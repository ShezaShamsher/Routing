'use client'
import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

function Homepage () {
    const route = useRouter();
    return (
        <>
            <h1>Welcome to Home page!</h1>

            <div>
                <h3>Links</h3>
                <p>In Next.js, route pages are created using the Link component, which enables client-side navigation between different pages of your application. This component is essential for building a smooth user experience, as it allows for quick transitions without full page reloads.</p>
                <ul>
                    <li><Link href="/navbar">1. Navbar</Link></li>
                    <li><Link href="/about">2. About</Link></li>
                    <li><Link href="/contact">3. Contact</Link></li>
                    <li><Link href="/footer">4. Footer</Link></li>
                </ul>
            </div>

            <h3>Navigation</h3>
            <p>In Next.js, you can implement navigation using buttons by utilizing the useRouter hook from next/router. This approach allows you to programmatically navigate to different pages within your application, making it ideal for scenarios where you want to trigger navigation based on user actions, such as button clicks.</p>
            <div className='nav'>
                <button text-center onClick={ () => route.push( "/navbar" ) }>Navbar</button>
                <button onClick={ () => route.push( "/about" ) }>About</button>
                <button onClick={ () => route.push( "/contact" ) }>Contact</button>
                <button onClick={ () => route.push( "/footer" ) }>Footer</button>

            </div>

        </>
    )

}

export default Homepage