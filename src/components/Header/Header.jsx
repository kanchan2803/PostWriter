import React ,{useState}from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)


// navigation bar
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow-lg bg-gradient-to-r from-teal-500 to-blue-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
                        {navItems.map((item) => 
                            item.active ? (
                                <button
                                    key={item.name}
                                    onClick={() => navigate(item.slug)}
                                    className='inline-block px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-teal-500 hover:shadow-md'
                                >
                                    {item.name}
                                </button>
                            ) : null
                        )}
                        {authStatus && (
                            <LogoutBtn />
                        )}
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='text-white focus:outline-none'
                        >
                            {isMenuOpen ? (
                                <HiX className='h-6 w-6' />
                            ) : (
                                <HiMenu className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </nav>
            </Container>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navItems.map((item) =>
                            item.active ? (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        navigate(item.slug)
                                        setIsMenuOpen(false)
                                    }}
                                    className='block w-full text-left px-3 py-2 text-white font-semibold rounded-md hover:bg-white hover:text-teal-500 transition-all duration-300'
                                >
                                    {item.name}
                                </button>
                            ) : null
                        )}
                        {authStatus && (
                            <div className='px-3 py-2'>
                                <LogoutBtn />
                            </div>
                        )}
                    </div>
                </div>
            )}
    </header>
  )
}

export default Header