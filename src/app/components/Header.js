// components/Header.js
"use client"

import Link from 'next/link';
import { useEffect ,useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const route = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.includes('token');  
    setIsLoggedIn(token); 
  }, []);

  
  async function logout(){
     await fetch('/api/logout')
      route.push('/login')
  }
  
  return (
    <header className=" bg-white text-black p-4">
      <nav className="flex justify-between container mx-auto">
        <Link href="/" className="text-2xl font-bold">
            Satish Diaries
        </Link>
        <div>
          <Link href="/about" className="mx-4 hover:underline">
             About
          </Link>
          <Link href="/blog" className="mx-4 hover:underline">
               Blog
          </Link>
          <Link href="/contact" className="mx-4 hover:underline">
               Contact
          </Link>
         
          {isLoggedIn ? 
               <Link href="/user/dashboard"className="mx-4 hover:underline" >
               User Profile
              </Link>
           :
           <Link href="/signup"className="mx-4 hover:underline" >
           Sign Up
           </Link>
           }
        
        </div>
      </nav>
    </header>
  );
};

export default Header;
