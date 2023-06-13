import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import userImage from "../../public/img/user.png";



export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                //credenciales necesarias para logear
                email: { label: "Correo", type: "text" },
                password: { label: "Contraseña", type: "password" },
            },
            authorize(credentials, req) {
                //aqui deberia ser llamado desde la base de datos
                //validacion de usuario
                const users = [
                    {
                        id: '1',
                        name: 'vi.rivas',
                        email: 'vi.rivas@duocuc.cl',
                        password: 'vi.rivas',

                    }, {
                        id: '2',
                        name: 'admin',
                        email: 'admin@admin.cl',
                        password: 'admin'

                    }, {
                        id: '3',
                        name: 'jo.casas',
                        email: 'jo.casas@duocuc.cl',
                        password: 'jo.casas'
                    }
                ];
                //recorre array de usuarios y valida si es que el usuario y contraseña ingresados son iguales a los de la base de datos
                for (const user of users) {
                    if (credentials?.email === user.email && credentials?.password === user.password) {
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,

                        };
                    }
                }
                return null;
            }
        })
    ],
    // pagina principal donde se realizara el logIn 
    pages: {
        signIn: '/'
    },

}