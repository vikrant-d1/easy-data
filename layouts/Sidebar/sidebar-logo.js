import Image from 'next/image'
import Link from 'next/link'

function SidebarLogo() {
    return (<div className="sidebar-logo-wrapper">
        <Link href="/">
     <Image
      src="/logo.png"
      alt="Picture of the author"
      width={240}
      height={95}
    /></Link>
    </div> );
}

export default SidebarLogo;