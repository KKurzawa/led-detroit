import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav hidden md:flex justify-between w-full md:text-2xl lg:text-3xl mr-12 ml-20'>
            <button onClick={() => setTimeout(() => {
                const element = document.querySelector('#Shows');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>SHOWS</button>
            <button onClick={() => setTimeout(() => {
                const element = document.querySelector('#Band');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>BAND</button>
            <button onClick={() => setTimeout(() => {
                const element = document.querySelector('#Videos');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>VIDEOS</button>
            <button onClick={() => setTimeout(() => {
                const element = document.querySelector('#Testimonials');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>TESTIMONIALS</button>
            <button onClick={() => setTimeout(() => {
                const element = document.querySelector('#Contact');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)}>CONTACT</button>
        </nav>
    )
}

export default Navbar