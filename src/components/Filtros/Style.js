import styled from "styled-components";
import '../../index.css'

export const Dot = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 0 12px;
    background-color: var(--color-Yellow);
`

export const InputField = styled.div`
    border-bottom: 1px solid var(--color-Yellow);
    border-radius: 30px;
    width: 100vh;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px;
`

export const MinMaxField = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;


    span {
        font-family: var(--fm-RobotoSlab);
        font-weight: var(--fw-RobotoMedium);
        font-size: 26px;
        margin-right: 16px;
        color: var(--color-Yellow);
    }

    label {
        margin: 0;
        padding: 0;
        color: var(--color-Yellow);
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaLight);
    }

    input {
        background-color: transparent;
        border: 0.6px solid var(--color-Yellow);
        border-radius: 25px;
        padding: 5px 12px;
        outline: none;
        color: white;
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaLight)
    }
`

export const SearchField = styled.section `
    display: flex;
    align-items: center;

    span {
        font-family: var(--fm-RobotoSlab);
        font-weight: var(--fw-RobotoMedium);
        font-size: 12px;
        margin-right: 16px;
        color: var(--color-Yellow);
    }

    input {
        background-color: transparent;
        border: 0.6px solid var(--color-Yellow);
        border-radius: 25px;
        width: 210px;
        padding: 5px 12px;
        outline: none;
        color: white;
        font-family: var(--fm-Comfortaa);
        font-weight: var(--fw-ComfortaaLight)
    }
`