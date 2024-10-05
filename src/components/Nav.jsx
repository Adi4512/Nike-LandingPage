import {hamburger} from "../assets/icons";
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container"> 
        <a href="/">
        <img src={headerLogo}
             alt="HeaderLogo"
            width={130}
            height={29}
        />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((items)=>(
                <li key={items.label}
                className="font-montserrat leading-tight text-slate-gray"
                >
                    <a href={items.href}>
                    {items.label}
                    </a>
                    </li>

            ))}

        </ul>
        <div className="hidden max-lg:block"><img src={hamburger} width={25} height={25}
        
        /></div>
      </nav>
    </header>
  )
}

export default Nav
