import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import Header from "./src/Header";
class Root extends React.Component{

    private render_item = (route) => {
        return(
            <>
            </>
        );
    }

    render() { 
        return (
            
            <BrowserRouter>
                    <Header/>
                <Routes>
                    {Object.values(routes).map((route) => (
                        <Route 
                            key={route.name}
                            path={route.route}
                            element={<route.component/>}
                        />
                    ))}
                </Routes>
          </BrowserRouter>
          );
    }
}
 
export default Root;