import React from "react";

export const CodeColumnContainer: React.FC<{ languages: Array<string> }> = ({
  languages,
}) => {
  //   return <div className="code-column-container">{children}</div>;
  return (
    <div className="container">
      <div className="row">
        {languages.map((language) => {
          return (
            <div className="col" key={language}>
              <p className="lead">{`${
                language.charAt(0).toUpperCase() + language.slice(1)
              } Gives Your Code ${
                language === "javascript" ? "Action" : "Style"
              }`}</p>
              <strong>{language.toUpperCase()}</strong>
              <textarea
                className="form-control"
                placeholder={`${language.toUpperCase()} Goes Here`}
                id="floatingTextarea"
              ></textarea>
            </div>
          );
        })}
      </div>
    </div>
  );
};
