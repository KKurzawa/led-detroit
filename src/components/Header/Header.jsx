import './Header.css'
import Navbar from '../Navbar/Navbar.jsx'

const Header = () => {
    return (
        <main className='flex flex-col items-center'>
            <h1 className='header-header flex text-5xl'>LED-DETROIT</h1>
            <Navbar />
        </main>

    )
}

export default Header