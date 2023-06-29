import React from "react";
import logo from "public/Logo.svg";
import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-20 ">
      <Image src={logo} alt="dinemarket" className="w-40" />
      <ul className="flex gap-x-20">
        <li className="text-lg">
          <Link href={"/"}>Women</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Men</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>All Products</Link>
        </li>
      </ul>
      <li className="flex gap-2 items-center">
        <Search/>
        <Input placeholder="What are you looking for"></Input>
      </li>

      <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
}

export default Header;
