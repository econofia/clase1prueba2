import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <CartContext.Provider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category' element={<ItemList/>} />
        <Route path='/item' element={<ItemList/>} />
        <Route path='/cart' element={<Cart/>} />
        </Routes>
        </BrowserRouter>
        </CartContext.Provider>
    )
    }