import React from 'react';

export default function Header({ children }){
return (
    <header>
        <h1>{children}</h1> 
    </header>

);

}//recebe props e coloca o titulo do parametro