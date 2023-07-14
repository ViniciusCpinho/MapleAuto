import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
class Root extends React.Component{
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <BrowserRouter>
            <Routes>
                {Object.values(routes).map((route) => (
                    <Route key={route.name} path={route.route} element={<route.component />} />
                ))}
            </Routes>
          </BrowserRouter>
          );
    }
}
 
export default Root;