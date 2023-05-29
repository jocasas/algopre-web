# Repositorio para el frontend de algoritmos de programacion

## Nomenclatura ARCHIVOS

Todos los componentes react deben utilizar el siguiente formato y estar en la capeta **components**
, el formato de el nombrado de componentes es 'snake_case'.

```ts
//syntax
"./components/comp_nombre_pagina";
//ejemplo para componentes que se utilizarian 1 vez
"./components/comp_form_admin";
"./components/comp_form2_admin";
"./components/comp_form_login";
"./components/comp_carta_index";
//ejemplo para un componente que se utilizaria en +1 de una pagina
"./components/comp_navbar"; //quitar pagina
```

Todos las paginas o views deben utilizar el siguiente formato, se crea un folder
con el nombre de la pagina y se utiliza el estandar de documentacion ./page.tsx por
tanto debe crearse una carpeta en 'src/app' para cada pagina.

```tsx
//syntax
'./about/page.tsx'
'./users/page.tsx'

//Si se quieren añadir componentes corresponde lo siguiente
'./src/app/users/components/(el componente va aqui)'
----src //folder
------app //folder
--------users //folder
----------page.tsx //file
----------components //folder
------------comp_admin_users.tsx //componente para folder users
```

## Nomenclatura CODIGO

Todas las funciones deben ser nombradas acorde y en lenguaje
al ¡¡INGLES!! , tambien se debe utilizar 'snake_case' de ser
necesario.

Funciones

```ts
//syntax funciones
function what_does_this_function_do();
//ejemplo
randomize_list();
function print_hi();
function get_last_digit();
function empty_list();
async function get_products();
async function get_products_detail();
const delete_products_index = () => {}; //incluso funciones lambda
```

Todas las variables deben ser nombradas acorde a su uso y en lenguaje
al ¡¡INGLES!! , se puede utilizar 'snake_case' para diferenciar variables
con nombre similar.

Variables

```ts
//ejemplo
let list = []
let product_list=[]
var counter = 0
var counter_2 = 0
const [response] = fetch {'http/......'}
const [response_2] = ......
```

## Documentacion CODIGO

Todo codigo debiese contener su autor(poner su nombre no su nick), de ser compleja la funcion de este script (wrappers,handlers,etc) debe ser acompañado de comentarios que expliquen su funcion general.

ejemplo

```ts
/* Funcion que preve el evento submit del formulario y
realiza una operacion post a la api '...' del backend
con los inputs del formulario -Benja Jamones  */
function handler_submit(e){
    e.preventDefault()
    const input_Number = document.getElementbyId('number').value
    try{
        await axios.post('http/....',{'number': input_Number})
    }catch(error){
        console.log(error:+'Post no proceso')
    }
}


const router = Router();
//cuando pidan la ruta ... contestare con -Pepe Palotes
router.get('/categories', async (req,res) => {
    const categories = await prisma.category.findMany({
        include:{
            products:true
        }
    })
    res.json(categories)
})

//este archivo es un wrapper para no hacer PrismaClient() todas las veces
//en las funciones que lo necesita -Vicente Rivas
import {PrismaClient} from '@prisma/client';
export const prisma = new PrismaClient();
```

# Levantar el proyecto

Requieres de la version estable mas reciente de node packet manager (nodejs) para ejecutar los comandos de abajo.

## Realizar siempre despues de descargar una nueva version del repositorio

```bash
npm install
```

## Correr un proyecto

```bash
npm run dev
```

Hosted en el puerto [http://localhost:3000](http://localhost:3000)

## Documentacion NEXT

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
