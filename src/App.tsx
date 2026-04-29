import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Homepage from "./pages/Homepage";
import Arena from "./pages/Arena";
import Academy from "./pages/Academy";
import Spotlight from "./pages/Spotlight";
import Studio from "./pages/Studio";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import RegisterForm from "./components/organisms/RegisterForm";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/arena" element={<Arena />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/spotlight" element={<Spotlight />} />
      <Route path="/studio" element={<Studio />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginForm onSwitch={() => console.log("switch")}/>} />
        <Route path="/register" element={<RegisterForm onSwitch={() => console.log("switch")} />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;