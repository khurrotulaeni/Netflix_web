import { useState } from "react";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./components/organisms/RegisterForm";

function App() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      {mode === "login" ? (
        <LoginForm onSwitch={() => setMode("register")} />
      ) : (
        <RegisterForm onSwitch={() => setMode("login")} />
      )}
    </div>
  );
}

export default App;