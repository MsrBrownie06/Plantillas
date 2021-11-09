import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Elemento from '../Navegacion/Elemento'
import Home from '../Navegacion/Home'
import Menu from '../Navegacion/Menu'

function Parametros() {
    let { vision } = useParams();

    return <div>{vision}</div>
}

export default class Router extends Component {
    render() {

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="elemento">
                        <Route path=":vision" element={<Elemento vision={Parametros} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
