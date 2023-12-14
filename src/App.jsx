import "./App.css";
import { ForgotPassword } from "./components/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Upichecker } from "./components/Upichecker";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upichecker" element={<Upichecker />} />
      </Routes>
    </>
  );
}

export default App;
