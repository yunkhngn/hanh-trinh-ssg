import React from 'react'
import {Div, Input, Button} from 'atomize'
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = ({openSearch}) => {
    const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  
  const removeVietnameseTones = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const slug = removeVietnameseTones(inputValue)
        .trim()
        .toLowerCase()
        .replace(/ /g, '-');
      router.push(`project/${slug}`);
    }
  };

  return (
    <Div
    w="auto"
    pos="fixed"
    bottom="50%"
    left="50%"
    transform="translateX(-50%)"
    >
      <input
      type="text"
      className="search"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      onFocusOut={() => openSearch(false)}
      placeholder="Nhập tên dự án..."
    />
    </Div>
  )
}

export default Search