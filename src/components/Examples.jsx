import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  function switchSelectedTopic(value) {
    setSelectedTopic(value);
  }

  return (
    <div id="examples">
        <h2>Examples</h2>
      <menu>
        <li>
          <button className={selectedTopic == "props" ? 'active': ""} onClick={() => switchSelectedTopic("props")}>Props</button>
        </li>
        <li>
          <button  className={selectedTopic == "jsx" ? 'active': ""}  onClick={() => switchSelectedTopic("jsx")}>JSX</button>
        </li>
        <li>
          <button  className={selectedTopic == "state" ? 'active': ""}  onClick={() => switchSelectedTopic("state")}>State</button>
        </li>
        <li>
          <button  className={selectedTopic == "components" ? 'active': ""}  onClick={() => switchSelectedTopic("components")}>
            Components
          </button>
        </li>
      </menu>
     {selectedTopic == undefined && <p>Please Select a topic.</p>}
     {selectedTopic !== undefined &&  <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>}


      {/* {selectedTopic == undefined ? (
        <p>Please Select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}
    </div>
  );
}
