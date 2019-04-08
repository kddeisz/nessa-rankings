import { useCallback } from "react";

const useAriaClick = (onClick, deps = []) => {
  const dedupedOnClick = useCallback(onClick, deps);
  const onKeyDown = useCallback(
    event => {
      if (event.key === "Enter") {
        dedupedOnClick();
      }
    },
    [dedupedOnClick]
  );

  return { role: "button", tabIndex: 0, onClick: dedupedOnClick, onKeyDown };
};

export default useAriaClick;
