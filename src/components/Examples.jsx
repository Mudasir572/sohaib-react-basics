import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(undefined);
  console.log(selectedTopic);

  function switchSelectedTopic(value) {
    setSelectedTopic(value);
  }
  let tabContent;

  if (selectedTopic == undefined) {
    tabContent = <p>Please Select a topic.</p>;
  } else {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          // container="menu"
          tabButtons={
            <>
              <TabButton
                selectedTopic={selectedTopic == "props"}
                changeSelectedTopic={() => switchSelectedTopic("props")}
              >
                Props
              </TabButton>
              <TabButton
                selectedTopic={selectedTopic == "jsx"}
                changeSelectedTopic={() => switchSelectedTopic("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                selectedTopic={selectedTopic == "components"}
                changeSelectedTopic={() => switchSelectedTopic("components")}
              >
                Components
              </TabButton>
              <TabButton
                selectedTopic={selectedTopic == "state"}
                changeSelectedTopic={() => switchSelectedTopic("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {/* <TabButton
          selectedTopic={selectedTopic == "props"}
          changeSelectedTopic={() => switchSelectedTopic("props")}
        >
          Props
        </TabButton>
        <TabButton
          selectedTopic={selectedTopic == "jsx"}
          changeSelectedTopic={() => switchSelectedTopic("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          selectedTopic={selectedTopic == "components"}
          changeSelectedTopic={() => switchSelectedTopic("components")}
        >
          Components
        </TabButton>
        <TabButton
          selectedTopic={selectedTopic == "state"}
          changeSelectedTopic={() => switchSelectedTopic("state")}
        >
          State 
        </TabButton> */}
          {/* <li>
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
        </li> */}

          {tabContent}

          {/* {selectedTopic == undefined && <p>Please Select a topic.</p>}
     {selectedTopic !== undefined &&  <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>} */}

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
        </Tabs>
      </Section>
      <h1>this is heading</h1>
      <Section title="OOOOOOOOOOOOOOOOOOOOOOOOO" id="examples">
        <Tabs
          container="ul"
          tabButtons={
            <>
           <li>heheheheh</li>
           <li>ohohohohoh</li>
           <li>ooooooooooo</li>
           <li>ammammamamamamam</li>
           </>
          }
        >
      
          <h1>Cat</h1>
          <h2>Dog</h2>
          <h3>Cow</h3>

        </Tabs>
      </Section>
    </>
  );
}
