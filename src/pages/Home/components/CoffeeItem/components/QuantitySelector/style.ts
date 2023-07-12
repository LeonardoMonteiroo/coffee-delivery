import { styled } from "styled-components";

export const QuantitySelectorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 8px;
    
    border-radius: 8px;
    height: 2.375rem;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-900"]}
`

export const QuantityContainer = styled.div`
    text-align: center;
    min-width: 1.25rem;
    user-select: none;
`