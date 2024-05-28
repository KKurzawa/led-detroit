import './Testimonials.css'
import ZepSymbolFour from '/ZeppelinSymbolFour.png'

const Testimonials = () => {
    return (
        <main id='Testimonials' className='flex flex-col items-center justify-center'>
            <article className='testimonials-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolFour} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>Testimonials</header>
                <img src={ZepSymbolFour} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
        </main>
    )
}

export default Testimonials