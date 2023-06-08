import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                //credenciales necesarias para logear
                email: { label: "Correo", type: "text" },
                password: { label: "Contraseña", type: "password" }
            },
            authorize(credentials, req) {
                //aqui deberia ser llamado desde la base de datos
                //validacion de usuario
                if (credentials?.email === "admin@ejemplo.cl" && credentials.password === "admin") {
                    return {
                        //lo que retornara cuando se logea
                        id: '1',
                        email: 'admin@ejemplo.cl'
                    };
                }
                return null;
            }
        })
    ],
    // pagina principal donde se realizara el logIn 
    pages: {
        signIn: '/'
    }
}