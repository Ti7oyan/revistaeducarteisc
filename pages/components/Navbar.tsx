import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaHome, FaBook, FaBlogger } from 'react-icons/fa';

type NavbarType = {
  text: string,
  href: string,
  icon: ReactElement<IconType>,
}

const NavbarItem = ({ text, href, icon }: NavbarType) => (
  <li className="mx-2 transition duration-100 hover:text-blue-300 hover:underline">
    <a className="flex" href={href}>
      <i className="text-2xl self-center">{icon}</i>
      <p className="hidden lg:block mx-2 text-lg">{text}</p>
    </a>
  </li>
);

const Navbar = () => (
  <nav className="bg-trueGray-800 fixed w-full">
    <ul className="flex justify-between p-5">
      <li className="">
        <p className="text-xl">Educarte</p>
      </li>
      <li className="flex">
        <NavbarItem text="Inicio" href="#" icon={<FaHome />} />
        <NavbarItem text="Ediciones" href="#editions" icon={<FaBook />} />
        <NavbarItem text="Blogger" href="#blogger" icon={<FaBlogger />} />
      </li>
    </ul>
  </nav>
);

export default Navbar;
