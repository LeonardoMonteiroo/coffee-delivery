import styled from 'styled-components'

export const CoffeInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
    margin: 5.75rem auto;
`

export const CoffeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`

export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem
`

export const CoffeeImage = styled.img`
    width: 29.75rem;
    height: 22.5rem;
`

export const TittleContainer = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme["gray-900"]};
`

export const TextContainer = styled.span`
    font-size: 1.25rem;
    color: ${props => props.theme["gray-800"]};
`

export const DescriptionGrid = styled.span`
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    gap: 1.25rem 2.50rem;
`

export const SubtitleText = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme["gray-800"]}
`

export const CoffeeMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
`

export const CoffeeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem 2rem;
`