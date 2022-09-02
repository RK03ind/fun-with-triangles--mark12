import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
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
              element={<Quiz setMessage={setFooterMsg} />}
            />
          </Routes>
        </main>
        <footer>{footerMessage}</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
