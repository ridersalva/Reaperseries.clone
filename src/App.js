import Bar from "./components/Navbar/Bar.jsx";
import Foot from "./components/Footer/Foot.jsx";
import AppRoutes from "./routes/AppRoute.jsx";
import './App.css';
import Squeare from "./components/Navbar/Squeare.jsx";

function App() {
  return (
    <>
      <Bar/>
      <AppRoutes/>
      <Foot/>
    </>
  );
}

export default App;
