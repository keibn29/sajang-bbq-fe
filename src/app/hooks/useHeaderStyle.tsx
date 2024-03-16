import { useCallback, useEffect, useMemo, useState } from 'react';
import { getPageName } from 'utils/app';

type HeaderBackgroundColor = 'transparent' | '#17363B';
const SCROLL_POSITION_CHANGE_BACKGROUND = 700;

const useHeaderStyle = () => {
  const pageName = getPageName();
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<HeaderBackgroundColor>(
    !pageName ? 'transparent' : '#17363B'
  );

  const headerClassName = useMemo(() => (!pageName ? 'fixed' : 'sticky top-0'), [pageName]);

  const handleScroll = useCallback(() => {
    const nextHeaderBackground =
      !pageName && window.scrollY < SCROLL_POSITION_CHANGE_BACKGROUND ? 'transparent' : '#17363B';
    setHeaderBackgroundColor(nextHeaderBackground);
  }, [pageName]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { headerBackgroundColor, headerClassName };
};

export default useHeaderStyle;
