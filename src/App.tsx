import "./App.css";

// iframe example that works
// <iframe srcdoc="<div><h1>test</h1><script>window.alert()</script></div>"  allow-scripts width="100%" height="300" style="border:none;">
// </iframe>
function App() {
  const supportedLanguages = ["html", "css", "javascript"];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead">{"HTML Gives Your Code Structure"}</p>
          <strong>{"HTML"}</strong>
          <textarea
            className="form-control"
            placeholder="HTML Goes Here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="col">
          <p className="lead">{"CSS Gives Your Code Style"}</p>
          <strong>{"CSS"}</strong>
          <textarea
            className="form-control"
            placeholder="CSS Goes Here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="col">
          <p className="lead">{"Javascript Gives Your Code Action"}</p>
          <strong>{"Javascript"}</strong>
          <textarea
            className="form-control"
            placeholder="Yup You Got It, Javascript Goes Here"
            id="floatingTextarea"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
