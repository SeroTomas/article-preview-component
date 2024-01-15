
import { useState } from "react"
import ShareMobile from "./ShareMobile.tsx";
import ShareIcon from "./ShareIcon.tsx";
import useDevice from "../hooks/useDevice.ts";
import ShareDesktop from "./ShareDesktop.tsx";

const style = {
    noActive: "z-50 bg-c-lGblue h-8 w-8 flex items-center justify-center rounded-full",
    active: "z-50 bg-c-desDarkBlue h-8 w-8 flex items-center justify-center rounded-full"
}

const CardShare = () => {

    const [active, setActive] = useState(false);

    const mobile = useDevice();

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <button onClick={handleClick} className={active ? style.active : style.noActive}>
                <ShareIcon active={active} />
            </button>

            {active ? mobile ? <ShareMobile /> : <ShareDesktop /> : null}
        </>
    )
}
export default CardShare