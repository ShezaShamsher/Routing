import Link from "next/link"
function Homepage(){
 return (
  <>
   <h1>I'm a About Page!</h1>

   <ul>
   <li><Link href="/">Home</Link></li>
   <li><Link href="/navbar">Navbar</Link></li>
   <li><Link href="/contact">Contact</Link></li>
   <li><Link href="/footer">Footer</Link></li>
   </ul>
   
  </>
 )

}

export default Homepage