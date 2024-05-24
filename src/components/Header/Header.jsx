import './Header.css'
import Navbar from '../Navbar/Navbar.jsx'

const Header = () => {
    return (
        <main className='flex items-center my-7'>
            <h1 className='header-header flex text-4xl md:text-4xl lg:text-5xl w-72 ml-6 md:ml-12'>LED-DETROIT</h1>
            <Navbar />
        </main>

    )
}

export default Header