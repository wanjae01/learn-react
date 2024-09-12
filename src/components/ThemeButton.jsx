import React from 'react'

const ThemeButton = ({isDarkMode, onTheme}) => {
  //
  return (
    <button type="button" onClick={onTheme}>현재 상태: {isDarkMode ? '다크모드' : '라이트모드'} </button>
  )
};

export default ThemeButton