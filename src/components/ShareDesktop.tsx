

const ShareDesktop = () => {
    return (

        <div className="bg-c-darkGBlue z-30 flex gap-4 px-8 py-4 rounded-xl absolute top-0 right-12 translate-x-1/2 -translate-y-full shadow-xl">
            <div className="flex gap-4">
                <span className="text-sm tracking-[5px] text-c-grayishBlue">SHARE</span>
                <div className="flex gap-4">
                    <img src="images/icon-facebook.svg" />
                    <img src="images/icon-twitter.svg" />
                    <img src="images/icon-pinterest.svg" />
                </div>
            </div>
            <div className="bg-c-darkGBlue -z-10 h-4 w-4 absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 rotate-45 "> </div>
        </div>

    )
}
export default ShareDesktop