import { ShoppingCart } from "@phosphor-icons/react"
import { CartButton } from "./styles"
import { defaultTheme } from "../../../../styles/themes/default"

export default function Cart(){
    return (
        <CartButton>
            <ShoppingCart size={22} color={defaultTheme["yellow-900"]} weight="fill"/>
        </CartButton>
    )
}