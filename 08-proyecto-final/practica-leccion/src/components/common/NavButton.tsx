
import React from 'react'
import { useNavigate } from 'react-router-dom'

type NavButtonProps = {
    icono: React.ReactNode;
    texto: string;
    url?: string;
    onClick?: () => void;
}

function NavButton({ icono, texto, url, onClick }: NavButtonProps) {
    const navigate = useNavigate();

    function handleClick() {
        if (onClick) {
            onClick();
        } else if (url) {
            navigate(url);
        }
    }

    return (
        <a className='flex items-center gap-2 cursor-pointer w-62.5 rounded-full hover:bg-[#181818]' onClick={handleClick}>
            <div className='text-3xl pl-3 py-3'>{icono}</div>
            <h3 className='text-white'>{texto}</h3>
        </a>
    )
}

export default NavButton