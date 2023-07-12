import styled from 'styled-components'

export const CartButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background: ${props => props.theme['yellow-100']};
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
`