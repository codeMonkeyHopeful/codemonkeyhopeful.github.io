import React from "react";
import { CodeWindow, IFrameWindow } from "../Containers";

export const CodeColumnContainer: React.FC<{ languages: Array<string> }> = ({
  languages,
}) => {
  //   return <div className="code-column-container">{children}</div>;
  return (
    <div className="container">
      <div className="row">
        {languages.map((language) => {
          return <CodeWindow codeLanguage={language} />;
        })}
      </div>
    </div>
  );
};
