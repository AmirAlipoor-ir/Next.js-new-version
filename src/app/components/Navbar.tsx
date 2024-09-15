import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="flex gap-4 mt-2 ml-2 text-lg">
          <Link href="/">Home</Link>    
          <Link href="/products">products</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/posts/first">Post first</Link>
          <Link href="/posts/second">Post second</Link>
        </nav>
     );
}
 
export default Navbar;