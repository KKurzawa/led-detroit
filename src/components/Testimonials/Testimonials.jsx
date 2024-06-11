import './Testimonials.css'
import ZepSymbolFour from '/ZeppelinSymbolFour.png'
import Testimonial from '../Testimonial/Testimonial'
import TestimonialForm from '../TestiomnialForm/TestimonialForm'

const Testimonials = () => {
    return (
        <main id='Testimonials' className='flex flex-col items-center justify-center'>
            <article className='testimonials-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolFour} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>TESTIMONIALS</header>
                <img src={ZepSymbolFour} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <Testimonial />
            <TestimonialForm />
            <article className='testimonials-top-btn-container flex justify-center w-full h-auto'>
                <button className='testimonials-top-btn w-fit h-auto my-3 text-4xl' onClick={() => setTimeout(() => {
                    const element = document.querySelector('#top');
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 500)}>To The Top</button>
            </article>
        </main>
    )
}

export default Testimonials