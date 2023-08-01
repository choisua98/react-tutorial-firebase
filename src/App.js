import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import { useEffect } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  // useEffect(() => {
  //   createUserWithEmailAndPassword(auth, "test5@gmail.com", "12341234");
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
