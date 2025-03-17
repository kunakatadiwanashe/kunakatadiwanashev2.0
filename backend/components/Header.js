import { useState, useEffect } from "react";
import { BiExitFullscreen } from "react-icons/bi";
import { RiBarChartHorizontalFill, RiBellFill } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";
import LoginLayout from "./LoginLayout";


export default function Header({ handleAsideOpen }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setIsFullScreen(true);
            });
        } else {
            document.exitFullscreen().then(() => {
                setIsFullScreen(false);
            });
        }
    };

    return (
        <>
            <LoginLayout>
                <header className="header flex justify-between items-center">
                    <div className="flex gap-2">
                        <h1 className="">Admin</h1>
                        <div className="headerham flex flex-center" onClick={handleAsideOpen}>
                            <RiBarChartHorizontalFill />
                        </div>
                    </div>

                    <div className="rightnav flex gap-2">
                        <div onClick={toggleFullScreen} className="fullScreen flex flex-center">
                            {isFullScreen ? <BiExitFullscreen /> : <GoScreenFull />}
                        </div>

                        <div className="notification">
                            <RiBellFill />
                        </div>
                        <div className="profilenav w-20 h-20">
                            <img
                                className="w-20 h-20"
                                src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png"
                                alt=""
                            />
                        </div>
                    </div>
                </header>
            </LoginLayout>
        </>
    );
}