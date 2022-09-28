import React, { useState } from "react";
import "./styles.css";
const emojiDict = {
  "🫶": "Heart Hands",

  "😊": "Smiling Face with Smiling Eyes",
  "🥹": "Face Holding Back Tears",
  "✨": "Sparkles",
  "🫠": "Melting Face",
  "💀": "Skull",
  "🫡": "Saluting Face",
  "🔥": "Fire",
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥺": "Pleading Face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤍": "White Heart",

  "🥲": "Smiling Face with Tear",
  "🫣": "Face with Peeking Eye",
  "👍": "Thumbs Up",

  "✅": "Check Mark Button",
  "⭐": "Star",
  "😉": "Winking Face",
  "🫰": "Hand with Index Finger and Thumb Crossed",
  "🤔": "Thinking Face",
  "👀": "Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "👉": "Backhand Index Pointing Right",
  "🎉": "Party Popper",
  "🖤": "Black Heart"
};

const emojisWeHave = Object.keys(emojiDict);
export default function App() {
  const [userInput, userInputUpder] = useState("");
  function inputChangeHandler(e) {
    const userInputv = e.target.value;
    if (userInputv === "") userInputUpder(userInputv);
    else if (emojiDict[userInputv] !== undefined)
      userInputUpder(emojiDict[userInputv]);
    else
      userInputUpder(
        `Sorry we don't have that emoji in our database right now`
      );
  }
  function emojiClickHandler(userInputv) {
    userInputUpder(emojiDict[userInputv]);
  }

  function clearOutput(e) {
    if (!e.target.classList.contains("list-item")) {
      userInputUpder("");
    }
    // console.log(e.target.classList);
  }
  document
    .querySelector("body")
    .addEventListener("click", (e) => clearOutput(e));
  return (
    <div className="App">
      <h1>inside out</h1>
      <input
        placeholder="Place your emoji here"
        style={{
          padding: "1rem"
        }}
        className="input-text-box"
        onChange={inputChangeHandler}
      ></input>
      <p>{userInput}</p>
      <h3>Emojis we have </h3>
      <ul>
        {emojisWeHave.map((e) => {
          return (
            <li
              style={{
                display: "inline",
                fontSize: "2rem",
                margin: "1rem"
              }}
              className="list-item"
              key={e}
              onClick={() => emojiClickHandler(e)}
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
