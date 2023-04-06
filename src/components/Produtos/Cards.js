import React from "react";


import { CardContainer, Description } from "./CardStyle";

export class Card extends React.Component {
    render() {
        return(
            <CardContainer>
                <img src={this.props.imagem}></img>
                <Description>
                    <span>{this.props.planet}</span>
                    <p>${this.props.price},00</p>
                    <button onClick={this.props.onClick}>Adicionar</button>
                </Description>
            </CardContainer>
        )
    }
}