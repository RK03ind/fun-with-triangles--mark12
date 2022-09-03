import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Area from "./pages/area/Area";
import Hypotenuse from "./pages/hypotenuse/Hypotenuse";
import IsTriangle from "./pages/is-triangle/IsTriangle";
import Quiz from "./pages/quiz/Quiz";

function App() {
  const [footerMessage, setFooterMsg] = useState("");
  let location = useLocation();

  useEffect(() => {
    setFooterMsg("");
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Quiz setMessage={setFooterMsg} />} />
          <Route
            path="/hypotenuse"
            element={<Hypotenuse setMessage={setFooterMsg} />}
          />
          <Route
            path="/is-triangle"
            element={<IsTriangle setMessage={setFooterMsg} />}
          />
          <Route path="/area" element={<Area setMessage={setFooterMsg} />} />
        </Routes>
      </main>
      <footer>{footerMessage}</footer>
    </>
  );
}

export default App;
