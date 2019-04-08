import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";

const useWindowEvent = (event, callback) => {
  useEffect(
    () => {
      window.addEventListener(event, callback);
      return () => window.removeEventListener(event, callback);
    },
    [event, callback]
  );
};

export const RouterContext = React.createContext({
  currentPath: "",
  onLinkClick: () => {},
  onPathChange: () => {}
});

export const History = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const onPathChange = useCallback(
    nextPath => {
      setCurrentPath(nextPath);
      window.history.pushState({}, "", nextPath);
    },
    [setCurrentPath]
  );

  const onLinkClick = useCallback(
    event => {
      event.preventDefault();
      onPathChange(event.currentTarget.pathname);
    },
    [onPathChange]
  );

  const value = useMemo(
    () => ({ currentPath, onPathChange, onLinkClick }),
    [currentPath, onPathChange, onLinkClick]
  );

  useWindowEvent("popstate", useCallback(
    event => setCurrentPath(event.currentTarget.location.pathname),
    [setCurrentPath]
  ));

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export const Link = ({ to, children, ...props }) => {
  const { onLinkClick } = useRouter();

  return <a {...props} href={to} onClick={onLinkClick}>{children}</a>;
};

const match = currentPath => {
  const pathSegments = currentPath.split("/").filter(Boolean);

  return child => {
    const segments = child.props.path.split("/").filter(Boolean);
    if (segments.length !== pathSegments.length) {
      return null;
    }

    const props = {};
    for (let idx = 0; idx < segments.length; idx += 1) {
      if (segments[idx].startsWith(":")) {
        props[segments[idx].slice(1)] = pathSegments[idx];
      } else if (segments[idx] !== pathSegments[idx]) {
        return null;
      }
    }

    return { child, props };
  };
};

export const Router = ({ children }) => {
  const { currentPath } = useRouter();

  const candidates = Array.isArray(children) ? children : [children];
  const matcher = match(currentPath);

  let matched;
  candidates.some(candidate => matched = matcher(candidate));

  return matched ? <matched.child.type {...matched.props} {...matched.child.props} /> : null;
};
