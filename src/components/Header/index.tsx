import LocationInfo from "../../pages/Home/components/LocationInfo";
import Logo from "../../assets/Logo.svg"
import { ButtonsContainer, HeaderContainer } from "./styles";
import Cart from "../../pages/Home/components/Cart";


export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo}/>
            <ButtonsContainer>
                <LocationInfo/>
                <Cart/>
            </ButtonsContainer>
        </HeaderContainer>
    )
}