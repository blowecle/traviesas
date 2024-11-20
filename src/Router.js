import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
    )
}

export default Router;