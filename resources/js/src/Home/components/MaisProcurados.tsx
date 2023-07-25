import React, { Component } from "react";
import './styles/MaisProcurados.scss'

interface MaisProcuradosProps {
    
}
 
interface MaisProcuradosState {
    
}
 
class MaisProcurados extends React.Component<MaisProcuradosProps, MaisProcuradosState> {
    render() { 
        return ( 
            <section className="mais-procurados">
                <div className="mais-procurados-item">
                    <h1 className="mais-procurados-texto">Mais Procurados</h1>

                    <div className="mais-procurados-image-item">
                        <div className="mais-procurados-square"/>
                        <div className="mais-procurados-square"/>
                        <div className="mais-procurados-square"/>
                        <div className="mais-procurados-square"/>
                        <div className="mais-procurados-square"/>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default MaisProcurados;