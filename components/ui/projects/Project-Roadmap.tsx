import { twMerge as tw } from 'tailwind-merge'

type ProjectRoadmapProps = {
   items: { text: string; isChecked: boolean }[]
}

export function ProjectRoadmap({ items }: ProjectRoadmapProps) {
   return (
      <ul className="space-y-2">
         {items.map((item, index) => (
            <li key={index} className={tw(item.isChecked && 'text-secondary_text line-through')}>
               <input type="checkbox" className="mr-2" disabled checked={item.isChecked} />
               {item.text}
            </li>
         ))}
      </ul>
   )
}
