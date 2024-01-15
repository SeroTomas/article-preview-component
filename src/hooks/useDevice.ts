import { useState, useEffect } from "react"

const useDevice = () => {
    const [device, setDevice] = useState(false);

    const desktopMediaQuery = window.matchMedia("(min-width: 1440px)")

    const handleWindow = (event: MediaQueryListEvent) => {
        const isDesktop = event.matches
        isDesktop ? setDevice(false) : setDevice(true)
    }

    const initialWindow = () => {
        const mobile = window.innerWidth < 1440;
        mobile ? setDevice(true) : setDevice(false)
    }

    useEffect(() => {
        initialWindow()
        desktopMediaQuery.addEventListener('change', handleWindow)
        return () => { desktopMediaQuery.removeEventListener('change', handleWindow) }
    }, [])

    return device
}
export default useDevice