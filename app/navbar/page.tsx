import Link from "next/link"
function Navbar(){
 return (
  <>
   <h1>I'm a Navbar Page!</h1>

   <ul>
   <li><Link href="/">Home</Link></li>
   <li><Link href="/about">About</Link></li>
   <li><Link href="/contact">Contact</Link></li>
   <li><Link href="/footer">Footer</Link></li>
   </ul>
   
  </>
 )

}

export default Navbar