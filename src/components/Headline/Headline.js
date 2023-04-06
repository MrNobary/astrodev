import React from "react";

import { HeadlineContainer, HeadlineText, HeadlineImg } from "./Style";

import Banner from '../../assets/flame-dreams-of-space-travel.png'

export class Headline extends React.Component {
    render() {
        return(
            <HeadlineContainer>
                <HeadlineText>
                    <h1>Pacotes de viagens de outro mundo!</h1>
                    <p>Viva experiências únicas em planetas distantes, desvende mistérios antigos e maravilhe-se com paisagens extraterrestres!</p>
                </HeadlineText>
                <HeadlineImg>
                    <img src={Banner}/>
                </HeadlineImg>
            </HeadlineContainer>
        )
    }
}