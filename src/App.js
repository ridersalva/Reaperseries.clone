import Bar from "./components/Navbar/Bar.jsx";
import Foot from "./components/Footer/Foot.jsx";
import AppRoutes from "./routes/AppRoute.jsx";
import "./pages/Pages.css"

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
