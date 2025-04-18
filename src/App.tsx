import "./App.css";
import { CodeColumnContainer } from "./Components";
import { columnHeaderMapping } from "./Components";

function App() {
  // const supportedLanguages = ["html", "css", "javascript"];
  return (
    <>
      <CodeColumnContainer languages={Object.keys(columnHeaderMapping)} />
    </>
  );
}

export default App;
