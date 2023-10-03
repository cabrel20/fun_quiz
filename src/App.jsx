import { useState } from "react";

import Home from "./components/molecules/Home";
import Questions from "./components/molecules/Questions";

function App() {
  const [viewHome, setViewHome] = useState(true);
  return (
    <div>
      {viewHome && <Home onClick={() => setViewHome(false)} />}
      {!viewHome && <Questions />}
    </div>
  );
}

export default App;
