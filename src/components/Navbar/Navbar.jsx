import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav hidden md:flex justify-between w-full md:text-2xl lg:text-4xl mr-10 ml-20'>
            <button className='nav-btn' data-hover='SHOWS' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Shows');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>SHOWS</button>
            <button className='nav-btn' data-hover='BAND' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Band');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>BAND</button>
            <button className='nav-btn' data-hover='VIDEOS' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Videos');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>VIDEOS</button>
            <button className='nav-btn' data-hover='TESTIMONIALS' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Testimonials');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>TESTIMONIALS</button>
            <button className='nav-btn' data-hover='CONTACT' onClick={() => setTimeout(() => {
                const element = document.querySelector('#Contact');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>CONTACT</button>
        </nav>
    )
}

export default Navbar