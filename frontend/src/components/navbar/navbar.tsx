import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import ProfileRender from "./navbarprofile";

function Navbar(): JSX.Element {
    const navigate = useNavigate();

    return (
        <header className="fixed w-screen h-[5rem] bg-color-1 flex place-content-between">
            <h1
                className="title-font text-color-1 cursor-pointer text-[2rem] m-[0.5rem] pl-[0.5rem]"
                onClick={() => {
                    navigate("/");
                }}
            >
                Project
            </h1>
            <div className="flex gap-[10px] items-center pr-[1rem]">
                <ProfileRender />
            </div>
        </header>
    );
}

export default Navbar;
