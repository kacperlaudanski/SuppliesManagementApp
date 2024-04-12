import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'Register - StockWise', 
    description: 'Create your own account in StockWise'
}

export default function RegisterLayout({children}: {children: ReactNode}){
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}
