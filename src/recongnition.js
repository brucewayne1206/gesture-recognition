
import React, { useRef, useState, useEffect } from "react";


// eslint-disable-line no-unused-vars
import * as tf from "@tensorflow/tfjs"; // eslint-disable-line no-unused-vars
// eslint-disable-line no-unused-vars

import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utils";


import * as fp from "fingerpose";
import { helloDescription, okDescription, loveDescription, thumbsUpDescription, victoryDescription } from './handgestures';


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  const [emoji, setEmoji] = useState(null);
  const description = {
    thumbs_up: 'Good job',
    victory: 'Peace',
    hello: 'Hello',
    ok: 'Okay!',
    love: 'Love You'
  };


  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          victoryDescription,
          thumbsUpDescription,
          helloDescription,
          okDescription,
          loveDescription
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setEmoji(gesture.gestures[maxConfidence].name);
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(()=>{runHandpose()},[]); // eslint-disable-line react-hooks/exhaustive-deps
  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            margin: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            margin: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
        />
        {/* NEW STUFF */}
        {emoji !== null ? (
          <div
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            bottom: 100,
            right: 0,
            textAlign: "center",
            height: 100,
            fontWeight: "bold",
            fontSize: 40,
            fontStyle: "oblique",
            fontVariant: "petite-caps"
          }}
        >
          {description[emoji]}
        </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;