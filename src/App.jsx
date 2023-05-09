import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/UI/Header";
import Topic from "./components/Topics/Topic";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/topics/:id" element={<Topic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
