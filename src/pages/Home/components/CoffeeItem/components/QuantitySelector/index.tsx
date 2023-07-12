import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer, QuantitySelectorContainer } from "./style";
import { defaultTheme } from "../../../../../../styles/themes/default";
import { useState } from "react";

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(0);

    function increaseQuantity() {
        setQuantity(state => state + 1);
    }

    function decreaseQuantity() {
        if(quantity === 0) {
            return;
        }
        
        setQuantity(state => state - 1);
    }

    return (
        <QuantitySelectorContainer>
            <Minus onClick={decreaseQuantity} size={14} weight="bold" color={defaultTheme["purple-500"]}/>
            <QuantityContainer>{quantity}</QuantityContainer>
            <Plus onClick={increaseQuantity} size={14} weight="bold" color={defaultTheme["purple-500"]}/>
        </QuantitySelectorContainer>
    )
}