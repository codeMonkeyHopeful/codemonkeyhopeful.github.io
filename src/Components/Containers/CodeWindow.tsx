import React from "react";

export const CodeWindow: React.FC<{ codeLanguage: string }> = ({
  codeLanguage,
}) => {
  return (
    <div className="col" key={codeLanguage}>
      <p className="lead">{`${
        codeLanguage.charAt(0).toUpperCase() + codeLanguage.slice(1)
      } Gives Your Code ${
        codeLanguage === "javascript" ? "Action" : "Style"
      }`}</p>
      <strong>{codeLanguage.toUpperCase()}</strong>
      <textarea
        className="form-control"
        placeholder={`${codeLanguage.toUpperCase()} Goes Here`}
        id="floatingTextarea"
      ></textarea>
    </div>
  );
};
