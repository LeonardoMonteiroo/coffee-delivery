import { CoffeeGrid, CoffeeImage, CoffeeMenuContainer, CoffeInfo, CoffeInfoContainer, DescriptionGrid, SubtitleText, TextContainer, TextsContainer, TittleContainer } from "./style";
import coffeeImage from "../../assets/coffee-image.svg"
import TextIcon from "./components/TextIcon";
import CoffeeItem from "./components/CoffeeItem";

export default function Home() {
    const icons = [
        {
            iconName: "ShoppingCart",
            text: "Compra simples e segura"
        },
        {
            iconName: "Package",
            text: "Embalagem mantém o café intacto"
        },
        {
            iconName: "Timer",
            text: "Entrega rápida e rastreada"
        },
        {
            iconName: "Coffee",
            text: "O café chega fresquinho até você"
        }
    ]

    return (
        <div>
            <CoffeInfoContainer>
                <CoffeInfo>
                    <TextsContainer>
                        <TittleContainer>Encontre o café perfeito para qualquer hora do dia</TittleContainer>
                        <TextContainer>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</TextContainer>
                    </TextsContainer>
                    <DescriptionGrid>
                        {icons.map(icon => {
                            return <TextIcon iconName={icon.iconName} text={icon.text} />
                        })}
                    </DescriptionGrid>
                </CoffeInfo>
                <CoffeeImage src={coffeeImage} />
            </CoffeInfoContainer>
            <CoffeeMenuContainer>
                <SubtitleText>Nossos cafés</SubtitleText>
                <CoffeeGrid>
                    {["", "", "","", "", "","", "", "","", "", ""].map(() => {
                        return <CoffeeItem/>
                    })}
                </CoffeeGrid>
            </CoffeeMenuContainer>
        </div>
    )
}