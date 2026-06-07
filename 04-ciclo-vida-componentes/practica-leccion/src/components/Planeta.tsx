import { useEffect } from 'react';

type PlanetaProps = {
  nombre: string;
  descripcion?: string;
};

function Planeta({ nombre, descripcion }: PlanetaProps) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return (
    <div className=" p-3">
      <h3 className="font-medium text-slate-900">{nombre}</h3>
      {descripcion ? <p className="mt-1 text-sm ">{descripcion}</p> : null}
    </div>
  );
}

export default Planeta;