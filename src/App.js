// App's Constant
import "./App.css";

// React router dom Libraries
import { Outlet } from "react-router-dom";

// Component Section
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
