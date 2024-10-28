import React from 'react'
import { Input } from "atomize";

const SearchField = ({placeholder, postName}) => {
    const search = (e) => {
        const posts = document.querySelectorAll("."+postName);
        posts.forEach((post) => {
          if (post.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            post.style.display = "block";
          } else {
            post.style.display = "none";
          }
        });
      };
  return (
    <Input
        placeholder={placeholder}
        m={{ t: "1em", b: "1.5em" }}
        w={{ xs: "100%", md: "50%" }}
        h="3.5em"
        textSize="subheader"
        textColor="black"
        rounded="12px"
        focusBorderColor="gray300"
        onChange={search}
        transition
        border="1px solid"
        bg="#f9f9f9"
        borderColor="gray300"
      />
  )
}

export default SearchField