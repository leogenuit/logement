import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NoPage from "./pages/NoPage";
import ApartmentList from "./components/apartments/ApartmentList";
import ApartmentDetails from "./components/apartments/ApartmentDetails";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="list" element={<ApartmentList />} />
        <Route path="details/:id" element={<ApartmentDetails />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
