import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/ss.jpeg" width={128} height={77} alt='' />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">about</Link>
            <Link href = "/play/playlist">Play-listen</Link> 


        </nav>
    );
}

export default Navbar;


