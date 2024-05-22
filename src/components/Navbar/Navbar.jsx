import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='flex justify-around w-full text-3xl'>
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