import { useState, type JSX } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/UseAuth";
import "../../css/DropDownContent.css";
import api from "../../services/api";
import useClickOutside from "./DropDownHandle";

function ProfileRender(): JSX.Element {
    const { isAuthorized, verifyAuth } = useAuth();
    const navigate = useNavigate();

    const showProfileBar = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen, setIsOpen] = useState(false);
    const profileDropdown = useClickOutside(
        async () => setIsOpen(false),
        isOpen
    );
    return (
        <div>
            <div
                onClick={() => {
                    setIsOpen(true);
                }}
                className="text-color-1 cursor-pointer flex items-center"
            >
                <CgProfile className="text-[1.8rem]" />
            </div>
            {isOpen && (
                <div
                    ref={profileDropdown}
                    className={`absolute translate-x-[-85%] flex-col rounded-md mt-[5px] pt-0 pb-0 flex w-[10rem] text-center ${
                        isOpen && "dropdown-content"
                    }`}
                >
                    {isAuthorized ? (
                        <>
                            <Link
                                to="/orders"
                                onClick={showProfileBar}
                                className="flex place-content-between cursor-pointer p-3 pt-[0] no-underline text-black p-0.2rem"
                            >
                                Orders
                            </Link>
                            <Link
                                to="/"
                                onClick={showProfileBar}
                                className="flex place-content-between cursor-pointer p-3 no-underline text-black"
                            >
                                Profile-settings
                            </Link>
                            <button
                                onClick={async () => {
                                    try {
                                        await api.post("api/auth/logout");
                                        verifyAuth();
                                        navigate("/");
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}
                                className="cursor-pointer flex place-content-between p-3 text-center no-underline text-black"
                            >
                                Sign-Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/sign-in"
                                onClick={showProfileBar}
                                className="flex place-content-between cursor-pointer p-3 no-underline text-black p-[0.4rem]"
                            >
                                Sign-in
                            </Link>
                            <Link
                                to="/sign-up"
                                onClick={showProfileBar}
                                className="flex place-content-between cursor-pointer p-3 no-underline text-black p-[0.4rem]"
                            >
                                Sign-up
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProfileRender;
