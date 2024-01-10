
import { useState, useEffect } from "react"
import ShareMobile from "./ShareMobile.tsx";
import ShareIcon from "./ShareIcon.tsx";

const CardShare = () => {

    const [active, setActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const desktopMediaQuery = window.matchMedia("(min-width: 1440px)")

    const handleWindow = (event: MediaQueryListEvent) => {
        const isDesktop = event.matches
        isDesktop ? setIsMobile(false) : setIsMobile(true)
    }

    const initialWindow = () => {
        const mobile = window.innerWidth < 1440;
        mobile ? setIsMobile(true) : setIsMobile(false)
    }

    const handleClick = () => {
        setActive(!active)
    }

    useEffect(() => {
        initialWindow()
        desktopMediaQuery.addEventListener('change', handleWindow)
        return () => { desktopMediaQuery.removeEventListener('change', handleWindow) }
    }, [])

    return (
        <>
            <button onClick={handleClick} className="z-50">
                <ShareIcon />
            </button>
            {active ? isMobile ? <ShareMobile /> : null : null}
        </>
    )
}
export default CardShare