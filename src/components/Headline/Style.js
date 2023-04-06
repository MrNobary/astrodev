import styled from "styled-components";

import '../../index.css'


export const HeadlineContainer = styled.section`
    width: 100vh;
    height: 30vh;
    margin: 32px 0px;
    display: flex;
    align-items: center;
    padding: 32px;
`

export const HeadlineText = styled.section`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;

    h1 {
        font-family: var(--fm-RobotoSlab);
        font-size: 36px;
        color: var(--color-Yellow);
        margin: 0;
    }

    p {
        font-family: var(--fm-Comfortaa);
        font-size: 14px;
        width: 75%;
        color: white;
    }
`

export const HeadlineImg = styled.section`
    display: grid;
    width: 50%;
    justify-content: center;
    align-items: center;

    img {
        width: 360px;
    }
`