import React, { useState, useEffect } from "react";
import { Meme } from "./components/Meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);

    return (
      <div style={{ textAlign: "center" }}>
        {template && (
        <>
        <Meme template={template} />
        <input placeholder="top text"></input>
        <input placeholder="bottom text"></input>
        </>
        )}
        {!template &&
        <>
        <h1>Pick a Meme</h1>
          {templates.map(template => {
          return (
            <Meme
            template={template}
            onClick={() => {
              setTemplate(template);
            }}
          />
          );
        })}
        </>
    }
      </div>
    );
  }
    

export default App;