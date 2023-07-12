import { styled } from "styled-components"

export const Badge = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 99999px;
    width: 2rem;
    height: 2rem;
    background: ${props => props.color};
`

export const TextIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const TextContainer = styled.span`
    font-size: 1rem;
    color: ${props => props.theme["gray-700"]}
`