import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./views/About/About";
import Incentives from "./views/Incentives/Incentives"
import Feedback from "./views/Feedback/Feedback"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<About />}> */}
        <Route path="/" index element={<About />} />
        <Route path="/incentives" element={<Incentives />} />
        <Route path="/feedback" element={<Feedback />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
