import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'Login - StockWise', 
    description: 'Sign In to your account and create better tomorrow for your business'
}

export default function LoginLayout({children}: {children: ReactNode}){
    return (
        <html>
            <body className="w-screen h-screen bg-neutral-200 flex items-center justify-center">
                {children}
            </body>
        </html>
    )
}