import React, { useState, useEffect } from "react";
import { boilerPlateCode } from "./index";

// iframe example that works
// <iframe srcdoc="<div><h1>test</h1><script>window.alert()</script></div>"  allow-scripts width="100%" height="300" style="border:none;">
// </iframe>

interface IFrameWindowProps {
  boilerPlateCode: string;
  html: string;
  css: string;
  js: string;
}
export const IFrameWindow: React.FC<IFrameWindowProps> = (
  IFrameWindowProps
) => {
  const [htmlCode, setHtmlCode] = useState<string>(``);
  const [cssCode, setCssCode] = useState<string>(``);
  const [jsCode, setJsCode] = useState<string>(``);

  const [srcDoc, setSrcDoc] = useState<string>(
    IFrameWindowProps.srcCode<IFrameWindowProps>
  );

  useEffect(() => {
    setSrcDoc((prevstate) => {
      `${boilerPlateCode}
      <body>${htmlCode}</body>
      <style>${cssCode}</style>
      <script>${jsCode}</script>`;
    });
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="col" key={"iframe"}>
      <p className="lead">{"Output"}</p>
      <iframe
        id={"iframe-input"}
        srcDoc={`<div><h1>Prepare to be amazed!</h1></div>`}
        width="100%"
        height="300"
        style={{ border: "1px solid red" }}
      ></iframe>
    </div>
  );
};
