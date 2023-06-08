'use client'
import { useRef } from 'react'
import Logo from '../../public/img/logo.png'
import Image from "next/image"
import { signIn } from 'next-auth/react'

export default function Home() {
  const userName = useRef("")
  const pass = useRef("")
  //se valida los datos requeridos por credentials en utils/authOptions.tsx con los datos ingresados en los inputs al momento de hacer click en el boton
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: userName.current,
      password: pass.current,
      //si el usuario es invalido se redirigira a login nuevamente
      redirect: true,
      //callbackUrl es donde se dirigira la pagina despues de ingresar con exito
      callbackUrl: '/mlPage'
    })
  }

  return (
    <div className='h-screen w-full bg-[url(../../public/img/bg.jpg)]'>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={Logo} alt="logo" className="mx-auto h-16 w-auto"></Image>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Ingresa a tu cuenta</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="http://localhost:3000/mlPage" method="POST">
            <div>
              <label htmlFor="input-email-for-credentials-provider" className="block text-sm font-medium leading-6 text-white">Correo</label>
              <div className="mt-2">
                <input id="input-email-for-credentials-provider" onChange={(e) => (userName.current = e.target.value)} placeholder="Correo" name="Email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="input-password-for-credentials-provider" className="block text-sm font-medium leading-6 text-white">Contraseña</label>
              </div>
              <div className="mt-2">
                <input id="input-password-for-credentials-provider" onChange={(e) => (pass.current = e.target.value)} placeholder="Contraseña" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" onClick={onSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

