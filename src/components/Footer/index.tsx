"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const currentPath = usePathname();

    return (
        <footer>
            <Link href="#">Next step</Link>
        </footer>
    );
};

export default Footer;
