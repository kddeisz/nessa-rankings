import { useCallback, useState } from "react";

const useField = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback(
    event => setValue(event.target.value),
    [setValue]
  );

  return [value, onChange];
};

export default useField;
