
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
