import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    const foundWord = data.find(
      (item) => item.word.toLowerCase() === input.trim().toLowerCase()
    );
    setOutput(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Definition:</h3>
      <p>{output}</p>
    </div>
  );
}

export default App;
