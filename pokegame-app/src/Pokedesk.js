import React, { Component } from 'react';
import Pokecard from "./Pokecard";
import "./Pokedesk.css"

class Pokedesk extends Component{

    render() {
        let title;
        if (this.props.isWinner) {
            title =<span className ="Pokedesk-winner">Winning Hand</span>
        } else {
            title =<span className ="Pokedesk-loser">Losing Hand</span>
        }
        return (
            <div>
            
                <div className="Pokedesk">
                    <div>
                        <span>Total Experience: {this.props.exp}</span>
                        <span>{title}</span>
                    </div>
                 
                    <div className="Pokedesk-cards">
                           {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={ p.base_experience}/>
                   ))}
                    </div>
                       
                    </div>
                  
           
            </div>
        )
    }
}
export default Pokedesk

