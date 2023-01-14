import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
// import GameSelected from "./pages/GameSelected/GameSelected"
// import Erreur from "./pages/Erreur/Erreur";


function router() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/jeux/" element={<Games />}></Route>
                {/* <Route path="/jeu/" element={<GameSelected />}></Route>  */}
            </Routes>
            <Footer />
        </Router>

    );

}

export default router;