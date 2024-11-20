import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Catering from "./components/Catering";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/story' element={<Story />} />
            <Route path='/catering' element={<Catering />} />
        </Routes>
    )
}

export default Router;