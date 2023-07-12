import styled from 'styled-components'

export const LocationButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background: ${props => props.theme['purple-100']};
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
`

export const LocationText = styled.span`
    color: ${props => props.theme['purple-900']}
`