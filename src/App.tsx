import React, { useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1>🔐 Password Generator</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Password Length: {length}</label>
        <br />
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />{" "}
          Include Uppercase
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />{" "}
          Include Numbers
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />{" "}
          Include Symbols
        </label>
      </div>

      <button
        onClick={generatePassword}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Generate Password
      </button>

      {password && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Password:</h3>
          <input
            type="text"
            value={password}
            readOnly
            style={{ fontSize: "18px", width: "80%", textAlign: "center" }}
          />
          <br />
          <button onClick={copyToClipboard} style={{ marginTop: "10px" }}>
            📋 Copy
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
