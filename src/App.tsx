import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Homepage from "./pages/Homepage_backup";
import Arena from "./pages/Arena";
import Academy from "./pages/Academy";
import Spotlight from "./pages/Spotlight";
import Studio from "./pages/Studio";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import RegisterForm from "./components/organisms/RegisterForm";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import FilmIndex from "./pages/dashboard/filmnetflix/FilmIndex";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";

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

    {/* */}
    <Route element={<ProtectedRoute />}>
    <Route element={<DashboardLayout />}>
      <Route path="/dashboard" element={<DashboardIndex />} />

      <Route path="/dashboard/category" element={<CategoryIndex />} />
      <Route
        path="/dashboard/category/create"
        element={<CategoryCreate />}
         />

      <Route path="dashboard/filmnetflix" element={<FilmIndex />} />
      <Route path="dashboard/event" element={<EventIndex />} />
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;