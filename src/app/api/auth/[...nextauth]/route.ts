import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

//handle para manejar credenciales dentro de la app
const handler = NextAuth(authOptions)

export {
    handler as GET,
    handler as POST
};