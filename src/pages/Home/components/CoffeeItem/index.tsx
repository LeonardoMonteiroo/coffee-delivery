import { ShoppingCartSimple } from "@phosphor-icons/react";
import { ActionsContainer, CartCointainer, CoffeeItemContainer, DollarSignContainer, FooterCoffeItem, PriceContainer, ValueContainer } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";
import QuantitySelector from "./components/QuantitySelector";

export default function CoffeeItem() {
    return (
        <CoffeeItemContainer>
            café 1
            <FooterCoffeItem>
                <PriceContainer>
                <DollarSignContainer>R$ </DollarSignContainer> 
                <ValueContainer>9,90</ValueContainer>
                </PriceContainer>
                <ActionsContainer>
                    <QuantitySelector/>
                    <CartCointainer>
                        <ShoppingCartSimple color={defaultTheme["gray-200"]} weight="fill" size={22}/>
                    </CartCointainer>
                </ActionsContainer>
            </FooterCoffeItem>
        </CoffeeItemContainer>
    )
}