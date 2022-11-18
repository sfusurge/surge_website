import useMediaQuery from './useMediaQuery';
import { createContext, useContext } from 'react';

const context = createContext({});

const queries = {
  isDesktop: '(min-width: 600px)', // >= 600px
  isLaptop1200: '(min-width: 1200px)', // >= than 1200px. -- FIXME(eth-p): Why is this larger than the desktop one?
  isLaptop1392: '(min-width: 1392px)', // >= than 1392px. -- FIXME(eth-p): Why do we have two?
  isMobile: '(max-width: 599px)',  // < 600px
}

/**
 * Layout provider for the {@link useLayoutChecks} hook.
 * By default, gives options for:
 *  - `desktop`
 *  - `laptop`
 *  - `mobile`
 * 
 * @param {JSXElement} props.children The children which will receive this context.
 * @param {{[key: string]: string}} props.mediaQueries The media queries for the layout options.
 */
export function LayoutProvider({children, mediaQueries}) {
  const matchers = {};

  for (const [name, query] of Object.entries(mediaQueries == null ? queries : mediaQueries)) {
    // ~~~~~~~~~~~~~~~~~~~~~~~~ we don't change number of hooks unless the props change.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    matchers[name] = useMediaQuery(query);
  }

  // Return the context provider.
  return (
    <context.Provider value={matchers}>
      {children}
    </context.Provider>
  );
}

/**
 * Gets a key-value object map for the possible site layouts.
 * If the layout is true, it should be considered active.
 * 
 * @returns The layout states.
 */
export default function useLayoutChecks() {
  const data = useContext(context);
  return data;
}

