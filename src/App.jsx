import "./App.css";
import { Login } from "./components/login";
import { ForgotPassword } from "./components/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Upichecker} from "./components/upichecker";


function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/........" element={<Upichecker />} /> */}
      </Routes>
    </>
  );
}

export default App;
