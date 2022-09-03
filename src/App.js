import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Area from "./pages/area/Area";
import Hypotenuse from "./pages/hypotenuse/Hypotenuse";
import IsTriangle from "./pages/is-triangle/IsTriangle";
import Quiz from "./pages/quiz/Quiz";

function App() {
  const [footerMessage, setFooterMsg] = useState("");

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
