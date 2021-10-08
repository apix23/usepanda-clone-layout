import { useState } from "react";
import "./App.css";
import NewsContainer from "./components/NewsContainer";
import FeedContainer from "./components/FeedContainer";
import MainContent from "./components/MainContent";
import Layout from "../Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout>
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
      </Layout>
    </div>
  );
}

export default App;
