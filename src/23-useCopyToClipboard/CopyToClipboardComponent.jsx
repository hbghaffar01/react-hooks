import { useRef } from "react";
import useCopyToClipboard from "./useCopyToClipboard";

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const inputRef = useRef();

  const handleCopy = () => {
    const inputValue = inputRef.current?.value || "";
    copyToClipboard(inputValue);
  };

  return (
    <>
      <button onClick={handleCopy}>{success ? "Copied" : "Copy Text"}</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
