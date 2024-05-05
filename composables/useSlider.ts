export function useSlider(elemRef: Ref<HTMLElement | null | undefined>, interval: number = 4000, scrollBy: number = 50) {
  const intervalRef = ref<NodeJS.Timeout>();
  const animateRef = ref<() => void>(() => { });

  const clear = () => clearInterval(intervalRef.value);

  onMounted(() => {
    const elem = elemRef.value;
    if (!elem) return;

    animateRef.value = () => {
      intervalRef.value = setInterval(() => {
        const width = elem.scrollWidth;
        const currentRightBoundary = elem.clientWidth + elem.scrollLeft;

        if (width === currentRightBoundary) {
          elem.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
          return;
        }

        elem.scrollBy({
          left: scrollBy,
          behavior: 'smooth'
        });
      }, interval);
    };

    animateRef.value();

    elem.addEventListener('mouseover', clear);
    elem.addEventListener('touchstart', clear);
    elem.addEventListener('mouseleave', animateRef.value);
    elem.addEventListener('touchend', animateRef.value);
  });
  onUnmounted(() => {
    const elem = elemRef.value;
    if (!elem) return;
    clearInterval(intervalRef.value);
    elem.removeEventListener('mouseover', clear);
    elem.removeEventListener('touchstart', clear);
    elem.removeEventListener('mouseleave', animateRef.value);
    elem.removeEventListener('touchend', animateRef.value);
  });
};