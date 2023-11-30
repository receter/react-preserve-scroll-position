import { useLayoutEffect, useRef } from "react"

export const usePreserveScrollPosition = (
  refScroller: React.RefObject<HTMLElement>,
  isActive: boolean
) => {
  const refLastScrollPosition = useRef<number | null>(null);

  if (refScroller.current) {
    // Save the tab position on every rerender
    refLastScrollPosition.current = refScroller.current.scrollTop;
  }

  useLayoutEffect(() => {
    if (isActive && refScroller.current && refLastScrollPosition.current !== null) {
      // Synchronously restore the scroll position when active
      refScroller.current.scrollTop = refLastScrollPosition.current;
    }
  }, [isActive, refScroller]);

}
