import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import Header from "./src/Header";
import Footer from "./src/Footer";
class Root extends React.Component{
    
    render() { 
        return (
            
            <BrowserRouter>
                <Header/>
                <Routes>
                    {Object.values(routes).map((route) => (
                        <Route 
                            key={route.name}
                            path={route.route}
                            element={<route.component name={route.name}/>}
                        />
                    ))}
                </Routes>
                <Footer/>
          </BrowserRouter>
          );
    }
}
 
export default Root;