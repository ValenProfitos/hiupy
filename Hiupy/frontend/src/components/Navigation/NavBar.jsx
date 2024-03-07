"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function NavBar() {
    return (
        <Navbar className="bg-white w-full sticky" fluid>
            <Navbar.Brand>
                <img
                    src="/assets/images/logo-marron.png"
                    className="mr-3 h-10 bg-white text-slate-700"
                    alt="Hiupy Logo"
                />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Hiupy</span> */}
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <Dropdown
                    className="bg-botones  "
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="/assets/images/Avatar.png"
                            className="mr-3"
                            rounded
                        />
                    }
                >
                    {/*----------- Dropdown del USER ------------*/}
                    <Dropdown.Header className="bg-botones ">
                        <span className="block text-sm text-white">
                            Anthony Kiedis
                        </span>
                        <span className="block truncate text-sm font-medium text-white">
                            akiedis@redhot.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item className="bg-botones text-white">
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="bg-botones text-white">
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                {/*----------------- TOOGLE BUTTON ACÁ ---------------- */}
                <Navbar.Toggle className="text-botones focus:ring-2 rounded-full focus:ring-botones " />
            </div>
            <Navbar.Collapse className="">
                <Navbar.Link
                    href="/home"
                    className="text-black font-semibold text-sm"
                >
                    Inicio
                </Navbar.Link>

                <hr className="border-botones" />

                <Navbar.Link
                    href="/Categories"
                    className="text-black font-semibold text-sm"
                >
                    Inventario
                </Navbar.Link>

                <hr className="border-botones" />

                <Navbar.Link
                    href="/Recipes"
                    className="text-black font-semibold text-sm"
                >
                    Recetas
                </Navbar.Link>
                <hr className="border-botones" />
            </Navbar.Collapse>
        </Navbar>
        
    );
}
