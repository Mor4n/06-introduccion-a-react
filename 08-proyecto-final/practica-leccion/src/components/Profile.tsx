import { useState } from 'react'

function Profile() {
  const [usuario, setUsuario] = useState(() => JSON.parse(localStorage.getItem('usuarioActivo') || '{}'));
  const [newImg, setNewImg] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleUpdateImg = () => {
    if (!newImg) return;

    const updatedUser = { ...usuario, img: newImg };
    
    localStorage.setItem('usuarioActivo', JSON.stringify(updatedUser));
    
    const allUsers = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const updatedAllUsers = allUsers.map((u: any) => u.user === usuario.user ? updatedUser : u);
    localStorage.setItem('usuarios', JSON.stringify(updatedAllUsers));

    setUsuario(updatedUser);
    setEditMode(false);
    setNewImg('');
    
    window.location.reload(); 
  };

  return (
    <div className='flex flex-col items-center mt-10 p-10 bg-[#15181c] rounded-2xl w-fit mx-auto border border-gray-800 shadow-xl'>
      <div className='relative group'>
        <img 
          src={usuario.img} 
          alt="Perfil" 
          className='w-32 h-32 rounded-full border-4 border-white mb-4 object-cover'
        />
      </div>
      
      <h1 className='text-white text-3xl font-bold'>{usuario.user}</h1>
      <p className='text-gray-500'>@{usuario.user?.toLowerCase()}</p>
      
      {!editMode ? (
        <div className='mt-6 w-full text-center'>
            <button 
                onClick={() => setEditMode(true)}
                
                className='text-black bg-[#eff3f4] py-2 px-10 rounded-full font-bold cursor-pointer  hover:bg-[#d7dbdc]  transition'
            >
                Cambiar imagen
            </button>
        </div>
      ) : (
        <div className='mt-6 flex flex-col gap-3 w-full'>
            <input 
                type="text" 
                placeholder="URL de la nueva imagen"
                className='bg-black text-white border border-gray-700 p-2 rounded-lg'
                value={newImg}
                onChange={(e) => setNewImg(e.target.value)}
            />
            <div className='flex gap-2'>
                <button 
                    onClick={handleUpdateImg}
                    className='flex-1 bg-white text-black py-2 rounded-full font-bold hover:bg-gray-200 cursor-pointer'
                >
                    Guardar
                </button>
                <button 
                    onClick={() => setEditMode(false)}
                    className='flex-1 bg-gray-800 text-white py-2 rounded-full font-bold hover:bg-gray-700 cursor-pointer' 
                >
                    Cancelar
                </button>
            </div>
        </div>
      )}
    </div>
  )
}

export default Profile