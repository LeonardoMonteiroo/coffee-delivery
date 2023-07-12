import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    border-radius: 6px 36px;

    background: ${props => props.theme["gray-200"]};
`

export const CartCointainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.375rem;
    height: 2.375rem;
    background: ${props => props.theme["purple-900"]};
    border-radius: 8px;
`

export const ActionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const FooterCoffeItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4375rem;
`

export const PriceContainer = styled.div`
    color: ${props => props.theme["gray-700"]}
`

export const DollarSignContainer = styled.span`
    font-size: 0.875rem;
    line-height: 1.13rem;
`

export const ValueContainer = styled.span`
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
`