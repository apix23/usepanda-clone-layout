import { useState } from "react";
import "./App.css";
import NewsContainer from "./components/NewsContainer";
import FeedContainer from "./components/FeedContainer";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FeedContainer />
      <NewsContainer />
      <MainContent />
    </div>
  );
}

export default App;
