import React from "react";

import { ItemsField } from "./ItemStyle";

export class Item extends React.Component {
    render() {
        return(
            <ItemsField>
                <div>
                    <p>{this.props.quantidade}</p>
                    <span>{this.props.planet}</span>
                </div>
                <button onClick={this.props.onClick}><p>Remover</p></button>
            </ItemsField>
        )
    }
}