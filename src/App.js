import { useEffect, useState } from "react";

function App() {
  const Pad = [
    {
      id: "audio1",
      name: "Q",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio2",
      name: "W",

      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio3",
      name: "E",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio4",
      name: "A",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio5",
      name: "S",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio6",
      name: "D",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio7",
      name: "Z",

      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio8",
      name: "X",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
    {
      id: "audio9",
      name: "C",
      source: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
    },
  ];

  const [playing, setPlaying] = useState("Press a key to start");

  function playThis(name) {
    setPlaying(name);
    const sound = document.getElementById(name);
    sound.currentTime = 0;
    sound.play();
  }

  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.key) {
        case "q":
          playThis("Q");
          break;
        case "w":
          playThis("W");
          break;
        case "e":
          playThis("E");
          break;
        case "a":
          playThis("A");
          break;
        case "s":
          playThis("S");
          break;
        case "d":
          playThis("D");
          break;
        case "z":
          playThis("Z");
          break;
        case "x":
          playThis("X");
          break;
        case "c":
          playThis("C");
          break;
        default:
          setPlaying("Press a key to start");
          break;
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="app">
      <section id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display">
          <p>{playing}</p>
        </div>
        <div id="drum-pad-container">
          {Pad.map((pad, unique) => (
            <button key={unique} className="drum-pad">
              <audio id={pad.name} src={pad.source}></audio>
              <span>{pad.name}</span>
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}

export default App;
