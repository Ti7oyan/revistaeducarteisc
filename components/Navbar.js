import React from "react";
import { FaHome, FaBook, FaBlogger } from 'react-icons/fa';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar z-50 fixed justify-evenly w-full bg-gray-800">
                <ul className="sm:hidden flex justify-around p-5">
                    <NavbarItemDesktop icon={<FaHome />} href={"#"} text="Inicio" />
                    <NavbarItemDesktop icon={<FaBook />} href={"#editions"} text="Ediciones" />
                    <NavbarItemDesktop icon={<FaBlogger />} href={"#blogger"} text="Blog" />
                </ul>
                <ul className="hidden sm:flex justify-between p-5">
                    <p className="text-2xl self-center">EDUCARTE</p>
                    <div className="flex">
                        <NavbarItemMobile icon={<FaHome />} href={"#"} />
                        <NavbarItemMobile icon={<FaBook />} href={"#editions"} />
                        <NavbarItemMobile icon={<FaBlogger />} href={"#blogger"} />
                    </div>
                </ul>
            </nav>
        )
    }
}

class NavbarItemDesktop extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li className="transition duration-100 hover:text-blue-300 hover:underline mx-2">
                <a className="flex flex-row" href={this.props.href}>
                    <i className="self-center">{this.props.icon}</i><p className="mx-2 text-lg">{this.props.text}</p>
                </a>
            </li>
        )
    }
}

class NavbarItemMobile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="transition duration-100 hover:text-blue-300 hover:underline mx-2">
                <a className="flex flex-row" href={this.props.href}>
                    <i className="text-3xl self-center">{this.props.icon}</i>
                </a>
            </li>
        )
    }
}

export default Navbar;