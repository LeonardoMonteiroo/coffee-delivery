import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { defaultTheme } from "../../../../styles/themes/default";
import { Badge, TextContainer, TextIconContainer } from "./styles";

interface TextIconProps {
    text: string
    iconName: string
}

export default function TextIcon({ iconName, text }: TextIconProps) {
    function renderBadge() {
        switch (iconName) {
            case "ShoppingCart":
                return (
                    <Badge color={defaultTheme["yellow-900"]}>
                       <ShoppingCart color={defaultTheme["white"]} weight="fill" width={32}/> 
                    </Badge>
                )
            case "Timer":
                return (
                    <Badge color={defaultTheme["gray-700"]}>
                        <Timer color={defaultTheme["white"]} weight="fill" width={32}/> 
                    </Badge>
                )
            case "Package":
                return (
                    <Badge color={defaultTheme["yellow-500"]}>
                        <Package color={defaultTheme["white"]} weight="fill" width={32}/> 
                    </Badge>
                )
            case "Coffee":
                return (
                    <Badge color={defaultTheme["purple-500"]}>
                        <Coffee color={defaultTheme["white"]} weight="fill" width={32}/> 
                    </Badge>
                )
        }
    }

    return (
        <TextIconContainer>
            {renderBadge()}
            
            <TextContainer>
                {text}
            </TextContainer>
        </TextIconContainer>
    )
}