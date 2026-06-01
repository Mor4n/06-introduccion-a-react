import { useState } from "react";

type FormularioProps = {
    onAgregarPlaneta: (planeta: { nombre: string; descripcion: string }) => void;
};

function Formulario({ onAgregarPlaneta }: FormularioProps) {
    const [formulario, setFormulario] = useState({
        nombre: "",
        descripcion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormulario((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formulario.nombre.trim() || !formulario.descripcion.trim()) {
            return;
        }

        onAgregarPlaneta(formulario);

        setFormulario({
            nombre: "",
            descripcion: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                placeholder="Nombre del planeta"
            />
            <textarea
                name="descripcion"
                value={formulario.descripcion}
                onChange={handleChange}
                placeholder="Descripción del planeta"
            />
            <button type="submit">Agregar planeta</button>
        </form>
    );
}

export default Formulario;
