import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon ,Bars3Icon,XMarkIcon,CheckBadgeIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isopen,setOpen] = useState([false])
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'FAQ', path: '/faq' }
      ];
      
    return (
        <nav className='bg-orange-400 px-4 '>
        <div onClick={()=> setOpen(!isopen)} className='md:hidden'> 
        <span>
            {
        isopen === true? 
        <XMarkIcon className="h-6 w-6 text-blue-500" />:
        <Bars3Icon className="h-6 w-6 text-blue-500" />
    }
    </span>
          
            </div> 
        
            <ul className={`md:flex absolute md:static
           duration-500 py-2 pl-8  pb-4 bg-orange-400 ${isopen ? 'top-6': '-top-96'}
            `}>
                {
                    routes.map(route => <Link key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;