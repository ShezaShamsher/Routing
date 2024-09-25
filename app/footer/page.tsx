import Link from "next/link"
function Footer(){
 return (
  <>
   <h1>I'm a Footer page!</h1>

   <ul>
   <li><Link href="/">Home</Link></li>
   <li><Link href="/navbar">Navbar</Link></li>
   <li><Link href="/about">About</Link></li>
   <li><Link href="/contact">Contact</Link></li>
   </ul>
   
  </>
 )

}

export default Footer