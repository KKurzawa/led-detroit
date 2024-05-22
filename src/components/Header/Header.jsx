import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <main className='flex justify-center'>
            <h1 className='flex text-5xl'>LED-DETROIT</h1>
            <Navbar />
        </main>

    )
}

export default Header