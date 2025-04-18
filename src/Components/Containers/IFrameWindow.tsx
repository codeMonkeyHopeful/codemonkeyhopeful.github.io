import React, { useState, useEffect } from "react";

// iframe example that works
// <iframe srcdoc="<div><h1>test</h1><script>window.alert()</script></div>"  allow-scripts width="100%" height="300" style="border:none;">
// </iframe>

export const IFrameWindow: React.FC<{}> = () => {
  console.log("IFrameWindow");
  return (
    <div className="col" key={"iframe"}>
      <p className="lead">{"Output"}</p>
      <iframe
        srcDoc={`<div><h1>Prepare to be amazed!</h1></div>`}
        width="100%"
        height="300"
        style={{ border: "1px solid red" }}
      ></iframe>
    </div>
  );
};
