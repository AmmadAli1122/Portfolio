import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
                <Link href={"/"}>
                <li>HOME</li>
                </Link>
                <Link href={"/about-us"}>
                <li>ABOUT US</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>CONTACT US</li>
                </Link>
                <Link href={"/jobs"}>
                <li>JOBS</li>
                </Link>
            </ul>
        </div>
    )

};