# SPA (Single Page Applications) & react-router-dom

- Instalar y configurar react-router-dom
- Crear rutas estáticas y dinámicas
- Navegar con link y useParams
- Implementar rutas primitivas

Paso 0.

Instalar react-router-dom
```bash
    npm i react-router-dom
```

Paso 1.

Importamos BrowserRouter de react-router-dom en main.jsx
```
import { BrowserRouter } from 'react-router-dom'
```

Paso 2. 
Envolver la app con BrowserRouter en main.jsx
```
<BrowserRouter>
    <StrictMode>
    <App />
  </StrictMode>
</BrowserRouter>
```

Paso 3. 
Creamos una carpeta de routes y ponemos ahi el index.jsx

Paso 4. Definir las rutas
Creamos una función que tendrá dentro las rutas dentro de un Routes, especificando las rutas con Route

Paso 5. 
Eliminamos App para usar index.jsx y colocamos RouteIndex en main.jsx en su lugar



---

urlParams: en el url se pone urlParams/Alex, si queremos poner 2 valores: urlParams/Alex/Alexis

queryParams: en el url se pone ?name=Alex, si queremos poner 2 valores sería: ?name=Alex&name2=Alex2

hashParams: en el url se pone #Alex