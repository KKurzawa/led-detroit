import './Header.css'
import Navbar from '../Navbar/Navbar.jsx'
import NavbarMobile from '../NavbarMobile/NavbarMobile.jsx'

const Header = () => {
    return (
        <main id='top' className='flex items-center py-7'>
            <h1 className='header-header flex text-5xl md:text-5xl lg:text-6xl w-96 ml-6 md:ml-9'>LED-DETROIT</h1>
            <Navbar />
            <NavbarMobile />
        </main>

    )
}

export default Header