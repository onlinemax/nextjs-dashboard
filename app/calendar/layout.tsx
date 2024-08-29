
import { ReactNode } from "react";
import  Image from "next/image"
export default function RootLayout({ children} : {children: ReactNode}){
    return (
        <div>
            <div className="flex ">
                <Image 
                    src="/hamburger.svg"
                    alt="An hamburger icon"
                    width={24}
                    height={24}
                />     
            </div>
            {children}
        </div>
    );
}