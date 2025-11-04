import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ChatRoom } from "./pages/ChatRoom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chatroom" element={<ChatRoom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
