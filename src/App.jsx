import { useState } from "react";
import "./App.css";

import TheReader from "./components/layouts/TheReader";
import FeedDeck from "./components/layouts/FeedDeck";
import ElClassico from "./components/layouts/ElClassico";
import FrontHands from "./components/layouts/FrontHands";
import NewsFreak from "./components/layouts/NewsFreak";
import LeftHanded from "./components/layouts/LeftHanded";
import DesignGeek from "./components/layouts/DesignGeek";
import CrossEyed from "./components/layouts/CrossEyed";
import Cockpit from "./components/layouts/Cockpit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TheReader />
      {/* <FeedDeck numberOfFeeds={8} /> */}
      {/* <ElClassico /> */}
      {/* <FrontHands /> */}
      {/* <NewsFreak /> */}
      {/* <LeftHanded /> */}
      {/* <DesignGeek /> */}
      {/* <CrossEyed /> */}
      {/* <Cockpit /> */}
    </div>
  );
}

export default App;
