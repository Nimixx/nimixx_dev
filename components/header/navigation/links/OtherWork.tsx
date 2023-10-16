'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { gsap } from 'gsap';

const linksData = [
  { name: 'Websites & Apps', href: '/websites-apps', icon: 'ArrowRight' },
  { name: 'Components', href: '/components', icon: 'ArrowRight' },
  { name: 'Graphic & Design', href: '/graphic-design', icon: 'ArrowRight' },
  { name: 'Others', href: '/others', icon: 'ArrowRight' }
];

export default function OtherWork() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;

    if (list) {
      const tl = gsap.timeline();

      tl.fromTo(list.children, {
        opacity: 0,
        y: -20
      }, {
        duration: 0.2,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: 'power3.out'
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <ul className="flex w-full flex-col gap-1" ref={listRef}>
      {linksData.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="flex items-center gap-2 transition hover:text-accent_2"
          >
            <Icon className="text-accent_2" name={link.icon} /> {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
