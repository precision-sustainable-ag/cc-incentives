import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./views/About/About";
import Incentives from "./views/Incentives/Incentives"
import Feedback from "./views/Feedback/Feedback"
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<About />}> */}
        <Route path="/" index element={<About currentTab={currentTab} setCurrentTab={setCurrentTab} />} />
        <Route path="/incentives" element={<Incentives  currentTab={currentTab} setCurrentTab={setCurrentTab} />} />
        <Route path="/feedback" element={<Feedback  currentTab={currentTab} setCurrentTab={setCurrentTab} />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
