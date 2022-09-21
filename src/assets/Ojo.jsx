
import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function Ojo() {
    const { theme, handleTheme } = useContext(ThemeContext);
    console.log(theme.color,"hola");
  return (
    <svg width="37" height="24" viewBox="0 0 37 24" fill={theme.color.color} xmlns="http://www.w3.org/2000/svg">
<path d="M18.0149 0C7.41896 0 0 11.7144 0 11.7144C0 11.7144 5.40425 23.4287 18.0149 23.4287C30.7307 23.4287 36.0297 11.7144 36.0297 11.7144C36.0297 11.7144 28.7181 0 18.0149 0ZM18.0149 19.1678C13.8822 19.1678 10.5979 15.8674 10.5979 11.7144C10.5979 7.56132 13.8822 4.26088 18.0149 4.26088C22.1475 4.26088 25.4318 7.56132 25.4318 11.7144C25.4318 15.8674 22.1475 19.1678 18.0149 19.1678Z" fill={theme.color.color}/>
<path d="M21.1939 11.7144C21.1939 13.4794 19.7713 14.9091 18.0149 14.9091C16.2585 14.9091 14.8359 13.4794 14.8359 11.7144C14.8359 9.94939 16.2585 8.51978 18.0149 8.51978C19.7713 8.51978 21.1939 9.94939 21.1939 11.7144Z" fill={theme.color.color}/>
</svg>
  )
}