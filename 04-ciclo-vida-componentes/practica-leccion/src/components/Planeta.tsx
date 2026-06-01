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
    <div>
      <h3>{nombre}</h3>
      {descripcion ? <p>{descripcion}</p> : null}
    </div>
  );
}

export default Planeta;