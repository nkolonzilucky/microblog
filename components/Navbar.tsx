"use client";
import Link from "next/link";
// import styles from './Navbar.module.css'; 
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();
    function isActive(linkPathname: string) {
        return pathname === linkPathname;
    }
    return (
        <nav>
            <div >
                <Link href="/" data-active={isActive("/")}>Microblog</Link>
                <Link href="/drafts" data-active={isActive("/drafts")}>Drafts</Link>
                <Link href="/about" data-active={isActive("/about")}>About</Link>
            </div>
            <div>
                <Link href="/signup" data-active={isActive("/signup")}>Sign up</Link>
                <Link href="/create" data-active={isActive("/create")}>Create Post</Link>
            </div>
        </nav>
    );
}