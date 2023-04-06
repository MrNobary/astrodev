import React from "react";

import { PacotesDeViagem } from "../../Pacotes";
import { TopField, Produtos } from "./Style";
import { Card } from "./Cards";

export class Gallery extends React.Component {
    render() {

        const pacotesOrdenados =
        this.props.produtos &&
        this.props.produtos.sort((a, b) => {
            if (this.props.ordenacao === "Crescente") {
            return a.price - b.price;
            } else {
            return b.price - a.price;
            }
      });

        const pacotesMapeados = 
        pacotesOrdenados && pacotesOrdenados.map((produto) => {
            return (
                <Card 
                key={produto.id} 
                planet={produto.planet}
                price={produto.price}
                imagem={produto.image}
                onClick={() => this.props.onClick(produto)}
                />
            );
        })

        return(
            <div>
                <TopField>
                    <p>Pacotes disponíveis: {this.props.quantidade}</p>
                    <select onChange={this.props.onChangeOrder}>
                        <option value={'Crescente'}>Crescente</option>
                        <option value={'Decrescente'}>Decrescente</option>
                    </select>   
                </TopField>
                <Produtos>
                    {pacotesMapeados}
                </Produtos>
            </div>
        )
    }
}