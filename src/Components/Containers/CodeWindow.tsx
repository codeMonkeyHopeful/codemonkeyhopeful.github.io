import React, { useEffect, useState } from "react";

interface CodeState {
  code: string;
  language: string;
}
export const CodeWindow: React.FC<{ codeLanguage: string }> = ({
  codeLanguage,
}) => {
  const [code, setCode] = useState<CodeState>({
    code: "",
    language: codeLanguage,
  });

  useEffect(() => {
    // TODO pass the new value into the IFrame Window
  }, [code]);

  const updateCode = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setCode((prevState) => ({
      ...prevState,
      code: (e.target as HTMLTextAreaElement).value,
    }));
  };

  return (
    <div className="col" key={codeLanguage}>
      <p className="lead">{`${
        codeLanguage.charAt(0).toUpperCase() + codeLanguage.slice(1)
      } Gives Your Code ${
        codeLanguage === "javascript" ? "Action" : "Style"
      }`}</p>

      <textarea
        onKeyUp={updateCode}
        className="form-control"
        placeholder={`${codeLanguage.toUpperCase()} Goes Here`}
        id={`${codeLanguage.toLocaleLowerCase()}-input`}
      ></textarea>
    </div>
  );
};
