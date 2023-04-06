import styled from "styled-components"

export const CardContainer = styled.div`
    width: 290px;
    height: 380px;
    background-color: var(--color-Orange);
    border-radius: 30px;
    overflow: hidden;

    img {
        width: 100%;
        box-sizing: border-box;
        border-top: 2px solid var(--color-Orange);
        border-right: 2px solid var(--color-Orange);
        border-left: 2px solid var(--color-Orange);
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
    }

    transition: .2s;

    :hover {
        transform: scale(1.1)
    }
`

export const Description = styled.section`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaBold);
        font-size: 26px;
    }

    p {
        color: white;
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaLight);
        font-size: 14px;
    }

    button {
        border: 1px solid black;
        border-radius: 30px;
        padding: 5px 10px;
        color: black;
        background-color: transparent;
        cursor: pointer;
        transition: .2s;
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaLight);

        :hover {
            transform: scale(1.1)
        }
    }
`