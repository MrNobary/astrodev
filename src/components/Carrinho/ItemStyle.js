import styled from "styled-components";
import '../../index.css'

export const ItemsField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    box-sizing: border-box;

    div {
        display: flex;
        gap: 12px;
        align-items: center;

        span {
            font-family: var(--fm-Comfortaa);
            font-size: 32px;
        }

        p {
            color: var(--color-DarkBlue);
        }
    }

    button {
            background-color: transparent;
            border: 0.4px solid var(--color-DarkBlue);
            border-radius: 12px;
            padding: 8px 12px;
            position: relative;
            display: flex;
            gap: 0.5rem;
            align-items: center;

            :hover {
                border: 0.4px solid red;
            }

            p {
                margin: 0;
                position: relative;
                font-size: 13px;
                color: var(--color-DarkBlue);

                ::before {
                    position: absolute;
                    content: "Remover";
                    width: 0%;
                    inset: 0;
                    color: red;
                    overflow: hidden;
                    transition: 0.3s ease-out;
                }
            }
        }

        button:hover p::before {
            width: 100%;
        }
`