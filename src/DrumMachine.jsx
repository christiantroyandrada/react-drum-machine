import React, { useState, useEffect } from "react";
import "./styles.css";

const drumPads = [
  {
    key: "Q",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap"
  },
  {
    key: "W",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Hi-Hat"
  },
  {
    key: "E",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    key: "A",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-Hat"
  },
  {
    key: "S",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Boom"
  },
  {
    key: "D",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Ride"
  },
  {
    key: "Z",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Snare"
  },
  {
    key: "X",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Tom"
  },
  {
    key: "C",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Tink"
  }
];

function DrumMachine() {
  const [displayText, setDisplayText] = useState("");
  const [pressedButton, setPressedButton] = useState(null);

  function handleKeyDown(event) {
    const pad = drumPads.find((pad) => pad.key === event.key.toUpperCase());
    if (pad) {
      const audio = new Audio(pad.clip);
      audio.play();
      setDisplayText(pad.description);
      setPressedButton(pad.key);
    }
  }

  function handleClick(pad) {
    const audio = new Audio(pad.clip);
    audio.play();
    setDisplayText(pad.description);
  }

  function handleButtonBlur() {
    setPressedButton(null);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div id="drum-machine">
      <div id="display">
        <h1>Drum Machine</h1>
        <p>{displayText}</p>
      </div>
      {drumPads.map((pad) => (
        <div
          key={pad.key}
          className={`drum-pad ${pressedButton === pad.key ? "pressed" : ""}`}
          onClick={() => handleClick(pad)}
          onBlur={handleButtonBlur}
          tabIndex="0"
        >
          <audio className="clip" id={pad.key} src={pad.clip} />
          {pad.key}
        </div>
      ))}
    </div>
  );
}

export default DrumMachine;
