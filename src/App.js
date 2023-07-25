import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Rick from "./pages/Rick";
import UsersList from "./pages/users/User";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<UsersList />} />
        <Route path="/rick" element={<Rick />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
