import Link from "next/link";
import './global.css';

export default function Rootlayout({
    children,}:{
        children:React.ReactNode;
    }) {
        return (
         <html>
            <body>
                <main>
                    <nav>
                        <link href="/" >
                            Home
                        </link>
                        <link href="/notes" >
                            Notes</link>
                    </nav>
                    {children}
                </main>
            </body>
         </html>
        );
    }
