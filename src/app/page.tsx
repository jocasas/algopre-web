import Link from "next/link"
import Logo from '../../public/img/logo.png'
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={Logo} alt="logo" className="mx-auto h-16 w-auto"></Image>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Ingresa a tu cuenta</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Correo</label>
            <div className="mt-2">
              <input id="email" placeholder=" Ingresa tu correo" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Contraseña</label>
            </div>
            <div className="mt-2">
              <input id="password" placeholder=" Ingresa tu contraseña" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <Link href='/mlPage' type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
