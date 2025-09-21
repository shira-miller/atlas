import React, { useState } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import About from './About';
import Home from './Home';
import Counter from './Counter';
import Counter2 from './Counter2';
import Atlas from './Atlas';
import Pixa from './Pixa';
import Vip from './Vip';
function AppRoutes() {
    const [number, SetNumber] = useState(6);
    const [coins, SetCoins] = useState(33);
    const [counter, SetCounter] = useState(0);

    return (
        <BrowserRouter>
            <AppContext.Provider value={
                {
                    val: "koko6",
                    number, SetNumber,
                    coins, SetCoins,
                    counter, SetCounter
                }
            }>
                <header className='p-2 container bg-info'>
                    <div>
                        {coins}
                    </div>
                    <Link to="/">home</Link> |
                    <Link to="/about">about</Link> |
                    <Link to="/counter">counter</Link> |
                    <Link to="/counter2">counter2</Link> |
                    <Link to="/atlas">atlas</Link> |
                    <Link to="/pixa/cats">pixa</Link> |
                    <Link to="/vip">vip</Link>
                </header>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/counter' element={<Counter />}></Route>
                    <Route path='/counter2' element={<Counter2 />}></Route>
                    <Route path='/atlas' element={<Atlas />}></Route>
                    <Route path='/pixa/cats' element={<Pixa />}></Route>
                    <Route path='/vip' element={<Vip />}></Route>
                </Routes>
            </AppContext.Provider>
            <footer className='p-2 container bg-danger'>footer</footer>
        </BrowserRouter>
    )
}

export default AppRoutes
