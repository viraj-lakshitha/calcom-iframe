import { useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import CalcomIframe from "./components/CalcomIframe";

const App = () => {
  useEffect(() => {
    console.log(window.location.pathname)
    if (!window.location.pathname.includes("/calcom")) {
      window.location.href = "/calcom?meeting=vitiya99/30min";
    }
  }, []);

  return (
    <div className="app-center">
      <Routes>
        <Route path="/calcom" element={<CalcomIframe />} />
      </Routes>
    </div>
  );
};

export default App;
