'use client'

import React from 'react'
import { SessionProvider } from "next-auth/react";

export const NextAuthSessionProvider = ({ children }: { children: React.ReactNode }) => {
    //sirve para manipular data de users globalmente (este es la etiqueta que engloba el main en el layout principal)
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}
