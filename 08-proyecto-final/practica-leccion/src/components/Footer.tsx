import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-0 left-0 w-full z-10 bg-[#1d9bf0] text-white py-3">
            <div className="flex justify-evenly">
                <div className=" ">
                    <h2 className="font-bold text-2xl">No te pierdas de lo que está sucediendo</h2>
                    <p className="">
                        Las personas en X son las primeras en enterarse.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="font-bold border border-white py-1 px-5 rounded-full hover:bg-[#34a5f2] cursor-pointer" onClick={()=>navigate('/login')}>Iniciar sesión</button>
                    <button className="font-bold border bg-white text-black border-white py-1 px-5 rounded-full hover:bg-[#e9f5fe] cursor-pointer" onClick={()=>navigate('/signup')}>Regístrate</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
