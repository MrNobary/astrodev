import styled from "styled-components";
import '../../index.css'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
    padding: 0 26px;
    border-bottom: 1px solid var(--color-Yellow);
    border-radius: 30px;
`

export const Title = styled.section`
    display: grid;
    justify-content: center;

    h1 {
        font-family: var(--fm-RobotoSlab);
        font-weight: var(--fw-RobotoBold);
        color: var(--color-Yellow);
        text-transform: uppercase;
    }
`

export const Navbar = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 25%;

    a {
        font-family: var(--fm-Comfortaa);
        color: var(--color-Yellow);
        cursor: pointer;
        
        :hover {
            transform: scale(1.1);
        }
    }

    img {
        width: 25px;
        cursor: pointer;
        :hover {
            transform: scale(1.1);
        }
    }
`