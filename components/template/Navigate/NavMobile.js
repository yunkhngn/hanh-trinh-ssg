import React from "react";
import { useState } from "react";
import { Icon, Button, Div, Text } from "atomize";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navMob">
      <Button
        h="3rem"
        w="100%"
        bg="white"
        rounded="10px"
        onClick={() => setOpen(!open)}
        transition
      >
        <Icon
          name={open ? "Cross" : "Menu"}
          size="25px"
          color="black500"
          hoverColor="black900"
          transition
        />
      </Button>
      <Div
        pos="fixed"
        w="45vw"
        m={{ t: "1.5em", r: "0.5em" }}
        right="0"
        d={{ xs: open ? "flex" : "none", md: "none" }}
        flexDir="column"
        textAlign="center"
        p="10px"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        bg="white"
      >
        <Div
          bg="white"
          d="flex"
          align="center"
          textAlign="center"
          textColor="black500"
          m="0.5em"
          w="90%"
          transition
          borderColor="gray300"
          justify="flex-start"
          onClick={() => window.open("https://www.facebook.com/hanhtrinhssg")}
        >
          <Text
          color="black500"
          >Fanpage dự án</Text>
        </Div>
      </Div>
    </div>
  );
};

export default NavMobile;
