import styled from "styled-components";
import '../../index.css'

export const TopField = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vh;
    padding: 10px;
    
    p{
        color: var(--color-Yellow);
        font-family: var(--fm-Comfortaa);
        font-size: 16px;
    }

    select {
        background-color: transparent;
        border: 0.4px solid var(--color-Yellow);
        border-radius: 30px;
        padding: 5px 20px;
        color: black;
        display: inline-block;
        background-color: var(--color-Yellow);

        option {
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            z-index: 999;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ::-ms-expand {
            display: none;
        }
    }
`

export const Produtos = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 10px;
`