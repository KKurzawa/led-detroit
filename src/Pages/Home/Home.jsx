import './Home.css'
import Shows from '../../components/Shows/Shows'
import Band from '../../components/Band/Band'
import Videos from '../../components/Videos/Videos'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <main className='home-main-container flex flex-col items-center h-auto'>
            <article id='Shows' className='flex flex-col items-center'>
                <Shows />
            </article>
            <article id='Band' className='flex flex-col items-center'>
                <Band />
            </article>
            <article id='Videos' className='flex flex-col items-center'>
                <Videos />
            </article>
            <article id='Testimonials' className='flex flex-col items-center'>
                <Testimonials />
            </article>
            <article id='Contact' className='flex flex-col items-center'>
                <Contact />
            </article>
        </main>
    )
}

export default Home