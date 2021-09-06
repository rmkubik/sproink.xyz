import ReactDOM from "react-dom";
import React, { useRef } from "react";
import "./styles.scss";
import sproinkClip from "../assets/sproink.mp3";

const App = () => {
  const sproinkAudioRef = useRef();

  return (
    <>
      <audio ref={sproinkAudioRef} src={sproinkClip}></audio>
      <button
        onClick={() => {
          sproinkAudioRef.current.currentTime = 0;
          sproinkAudioRef.current.play();
        }}
      >
        Sproink!
      </button>
    </>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
