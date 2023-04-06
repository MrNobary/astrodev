import React from "react";

import { CartContainer } from "./Style";
import { Item } from "./Item";

export class Carrinho extends React.Component {
    render() {
        const planetasNoCarrinho = this.props.pacotesDoCarrinho &&
        this.props.pacotesDoCarrinho.map(item => {
            return <Item 
                key={item.id}
                planet={item.planet}
                quantidade={item.quantidade}
                onClick={() => this.props.removerDoCarrinho(item)}
            />
        })

        return(
            <CartContainer>
                <h2>Viagens</h2>
                <div>{planetasNoCarrinho}</div>
                <p>Valor total: $ <span>{this.props.valorTotal},00</span></p>
            </CartContainer>
        )
    }
}