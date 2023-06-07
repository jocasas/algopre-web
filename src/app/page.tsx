import Link from "next/link"

export default function Home() {
  return (
    <div className='flex h-screen w-full items-center justify-center align-middle'>
      <form className='bg-white w-1/3 h-auto rounded-lg'>
        <div className='flex flex-col text-black'>
          <div className='w-full flex p-4 font-bold text-2xl justify-center'>
            Login
          </div>
          <div className='p-5'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
            <input type="text" id="first_name" className="text-sm rounded-lg block w-full h-12 p-2.5 bg-gray-600 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Correo@ejemplo.com" required />
          </div>
          <div className='p-5'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
            <input autoComplete="off" type="password" id="password" className="text-sm rounded-lg block w-full h-12 p-2.5 bg-gray-600 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="******" required />
          </div>
        </div>
        <div className='flex w-full justify-center pt-10 pb-10 '>
          <Link href='/mlPage' rel="preload" className='text-white bg-blue-600 p-3 rounded-lg'>Ingresar</Link>
        </div>
      </form>
    </div>
  )
}
