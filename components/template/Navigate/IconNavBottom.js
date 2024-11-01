import React from "react";
import Link from "next/link";
import { Icon, Div } from "atomize";
import { usePathname } from 'next/navigation'

const IconNavBottom = ({ name, route }) => {
  const pathname = usePathname()

  return (
    <Link href={route} passHref>
      <Div
        p={{ x: "1rem" }}
        m="auto"
        d="flex"
        justify="center"
        align="center"
        transition
      >
        <Icon name={name} size="25px" m="auto" color={pathname === route ? (pathname === "/donation" ? "brand800" : "black500") : "gray600"} />
      </Div>
    </Link>
  );
};

export default IconNavBottom;
