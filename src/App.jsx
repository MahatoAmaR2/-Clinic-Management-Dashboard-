
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
