import styled from "styled-components";
import '../../index.css'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 30px;
    margin: 32px;
    padding: 10px;
    width: 100vh;
    color: white;
    background-color: var(--color-LightBlue);
    box-sizing: border-box;

    h2 {
        font-family: var(--fm-RobotoSlab);
        font-weight: var(--fw-RobotoBold);
        font-size: 32px;
        margin: 0;
        color: black;
    }

    div {
        width: 100%;
        padding: 0 32px;
    }

    p {
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaMedium);
        color: black;

        span {
            color: white;
        }
    }
`
