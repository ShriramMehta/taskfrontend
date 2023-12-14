import "./App.css";
import { ForgotPassword } from "./components/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Loginn } from "./components/Loginn";

function App() {
  return (
    <>
     
      <Routes>
        <Route index element={<Loginn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/........" element={<Upichecker />} /> */}
      </Routes>
    </>
  );
}

export default App;
