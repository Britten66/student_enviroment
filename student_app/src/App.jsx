import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout.jsx";
import Home from "./pages/Home.jsx";
import Tasks from "./components/Tasks.jsx";
import CountrySelector from './components/CountrySelector';


export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        
      </Routes>
    </MainLayout>
  );
}
