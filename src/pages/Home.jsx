import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const characters = text.length;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Welcome to Word Counter</h1>

      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
          fontSize: "16px",
          marginTop: "10px"
        }}
      />

      <p><strong>Words:</strong> {words}</p>
      <p><strong>Characters:</strong> {characters}</p>
    </div>
  );
};

export default Home;