import Link from "next/link"
function Contact(){
 return (
  <>
   <h1>I'm a Contact Page!</h1>

   <ul>
   <li><Link href="/">Home</Link></li>
   <li><Link href="/navbar">Navbar</Link></li>
   <li><Link href="/about">About</Link></li>
   <li><Link href="/footer">Footer</Link></li>
   </ul>
   
  </>
 )

}

export default Contact