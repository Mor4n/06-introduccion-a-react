import { useEffect } from 'react';

type PlanetaProps = {
  nombre: string;
};

function Planeta({ nombre }: PlanetaProps) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return (
    <div>{nombre}</div>
  );
}

export default Planeta;