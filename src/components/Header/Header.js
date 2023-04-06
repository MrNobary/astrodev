import React from "react";

import { Container, Title, Navbar } from "./Style";

import AccountIcon from '../../assets/account.png'

export function Header() {
    return(
        <Container>
            <Title>
                <h1>astrodev</h1>
            </Title>
            <Navbar>
                <a>Planetas</a>
                <a>Pacotes</a>
                <img src={AccountIcon} />
            </Navbar>
        </Container>
    )
}