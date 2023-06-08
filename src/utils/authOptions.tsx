import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Correo", type: "text" },
                password: { label: "Contraseña", type: "password" }
            },
            authorize(credentials, req) {
                //aqui deberia ser llamado desde la base de datos
                if (credentials?.email === "admin@ejemplo.cl" && credentials.password === "admin") {
                    return {
                        id: '1',
                        email: 'admin@ejemplo.cl'
                    };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/'
    }
}