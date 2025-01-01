import React, { useEffect, useRef, useState } from "react";

function ProfileDropdown() {
    const [enableOptions, setEnableOptions] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setEnableOptions(false);
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClickOptions = () => {
        setEnableOptions(false);
    };

    return (
        <div className="relative w-[auto] text-left">
            <button
                ref={buttonRef}
                type="button"
                className="flex justify-center w-auto px-4 py-2 text-sm font-medium bg-white text-gray-900 sm:text-white sm:bg-blue-600 rounded-md sm:hover:bg-blue-700 focus:outline-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setEnableOptions(!enableOptions)}
            >
                <span className="hidden sm:block">UserName</span>
                <div className="block sm:hidden text-2xl">⋮</div>
                <svg
                    className={`hidden sm:block -mr-1 ml-2 h-5 w-5 transition-transform ${enableOptions ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <div
                ref={dropdownRef}
                className={`${
                    enableOptions ? "" : "hidden"
                } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
            >
                <div className="py-1" role="none">
                    <a
                        onClick={handleClickOptions}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                    >
                        Profile
                    </a>
                    <a
                        onClick={handleClickOptions}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                    >
                        Orders
                    </a>
                    <a
                        onClick={handleClickOptions}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                    >
                        Settings
                    </a>
                    <a
                        onClick={handleClickOptions}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                    >
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileDropdown;
