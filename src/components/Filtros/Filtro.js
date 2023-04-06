import React from "react";

import { Dot, InputField, MinMaxField, SearchField } from "./Style";

export class Filtros extends React.Component {
    render() {
        return(
            <InputField>
                <MinMaxField>
                <span>Filtros: </span>
                    <label>
                        <input 
                        type={"number"}
                        min={0}
                        placeholder="Mínimo"
                        value={this.props.minimo}
                        onChange={this.props.onChangeFiltroMin}
                        />
                    </label>
                    <Dot></Dot>
                    <label>
                        <input 
                        type={"number"}
                        min={0}
                        placeholder="Máximo"
                        value={this.props.maximo}
                        onChange={this.props.onChangeFiltroMax}
                        />
                    </label>
                </MinMaxField>
                <SearchField>
                    <input 
                    type="text"
                    placeholder="Qual planeta ?"
                    value={this.props.search}
                    onChange={this.props.onChangeSearch}
                    />
                </SearchField>
            </InputField>
        )
    }
}