'use client'
import { useRef } from 'react'
import Logo from '../../public/img/logo.png'
import Image from "next/image"
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const userName = useRef("")
  const pass = useRef("")
  //se valida los datos requeridos por credentials en utils/authOptions.tsx con los datos ingresados en los inputs al momento de hacer click en el boton
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: userName.current,
      password: pass.current,
      redirect: false,
      permanent: true,
    });
    //si el resultado es un error se muestra un toast con el mensaje de error
    if (result?.error || userName.current === "" || pass.current === "") {
      toast.error('Credenciales invalidas', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
      });
    } else {
      window.location.href = "/mlPage"
    }
  }

  return (
    <div className='h-screen w-full bg-[url(../../public/img/bg.jpg)]'>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={Logo} alt="logo" className="mx-auto h-16 w-auto"></Image>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Ingresa a tu cuenta</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST">
            <div>
              <label htmlFor="input-email-for-credentials-provider" className="block text-sm font-medium leading-6 text-white">Correo</label>
              <div className="mt-2">
                <input id="input-email-for-credentials-provider" onChange={(e) => (userName.current = e.target.value)} placeholder="Correo" name="Email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="input-password-for-credentials-provider" className="block text-sm font-medium leading-6 text-white">Contraseña</label>
              </div>
              <div className="mt-2">
                <input id="input-password-for-credentials-provider" onChange={(e) => (pass.current = e.target.value)} placeholder="Contraseña" name="password" type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" onClick={onSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>

  )
}

