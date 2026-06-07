import { useState} from 'react';

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
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                placeholder="Nombre del planeta"
                className="w-full border border-slate-300 px-3 py-2 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
            />
            <textarea
                name="descripcion"
                value={formulario.descripcion}
                onChange={handleChange}
                placeholder="Descripción del planeta"
                rows={4}
                className="w-full border border-slate-300 px-3 py-2 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
            />
            <button
                type="submit"
                className="border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
                Agregar planeta
            </button>
        </form>
    );
}

export default Formulario;
