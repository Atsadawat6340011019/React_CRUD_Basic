import Users from "./components/layouts/Users";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserCreate from "./components/create/UserCreate";
import UserUpdate from "./components/edit/UserUpdate";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/update/:id" element={<UserUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
