import React from "react";
import { Div, Text } from "atomize";
import Image from "next/image";

const Member = ({ name, desc, img, link, type }) => {
  return (
    <Div rounded="16px" hoverBg={{xs:"",  md:"warning300"}} p={{xs:"0px", md:"2em 2em 2em" }}transition>
      <div className="teamImage">
        <Image
          src={img}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <Text textSize={{xs:"title", md:"heading"}} textWeight="bold" m={{ t: "1em" }}>
        {name}
      </Text>
      <Text textSize="subheader" text m={{ b: "0.7em" }}>{type}</Text>
      <Text
      textSize="paragraph" m={{ b: "1em" }}
      >{desc}</Text>
      <a className="linkTo" href={link} target="_blank" rel="noreferrer">
        Link contact
      </a>
    </Div>
  );
};

export default Member;
