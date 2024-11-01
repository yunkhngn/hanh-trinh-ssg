import React from "react";
import Link from "next/link";
import { Icon, Button } from "atomize";
import { usePathname } from 'next/navigation'
import { useState } from "react";

const IconNav = ({ name, route }) => {
  //path name include /project ?
  const pathname = usePathname()
  console.log(pathname)
  const [active, setActive] = useState("25px");
  const handleClick = () => {
    setActive("22px");
    setTimeout(() => {
      setActive("25px");
    }, 120);
  };
  return (
    <Link href={route} passHref className="iconNav">
      <Button
        h="3rem"
        w="100%"
        bg={pathname === route ? (pathname === "/project" ? "gray200" : "gray200") : "white"}
        hoverBg={pathname === route ? (pathname === "/project" ? "gray200" : "gray200") : "gray200"}
        rounded="10px"
        m="1em auto 1em"
        transition
        onClick={handleClick}
      >
        <Icon name={name} size={active} color={pathname === route ? (pathname === "/project" ? "black500" : "black500") : "gray600"} />
      </Button>
    </Link>
  );
};

export default IconNav;
