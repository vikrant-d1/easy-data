import Image from 'next/image'
import Link from 'next/link'

function NavItem(props) {
    return (<li class="list-group-item">{props?.children}</li>);
}

export default NavItem;