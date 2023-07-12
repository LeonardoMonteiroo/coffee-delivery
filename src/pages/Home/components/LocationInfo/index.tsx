import { MapPin } from "@phosphor-icons/react";
import { LocationButton, LocationText } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";
import { useEffect, useState } from "react";

export default function LocationInfo(){
    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        setLocationName('Porto Alegre, RS')
    },[])

    return (
        <LocationButton>
            <MapPin color={defaultTheme["purple-500"]} size={22} weight="fill"/>
            <LocationText>{locationName}</LocationText>
        </LocationButton>
    )
}