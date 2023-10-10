import { useEffect, useCallback, RefObject } from 'react'

interface UseClickOutsideProps {
   ref: RefObject<HTMLElement>
   callback: () => void
}

export function useClickOutside({ ref, callback }: UseClickOutsideProps) {
   const handleClickOutside = useCallback(
      (event: Event) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
         }
      },
      [ref, callback]
   )

   useEffect(() => {
      window.addEventListener('click', handleClickOutside)

      return () => {
         window.removeEventListener('click', handleClickOutside)
      }
   }, [handleClickOutside])
}
