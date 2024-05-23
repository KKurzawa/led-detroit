import './Home.css'
import Shows from '../../components/Shows/Shows'

const Home = () => {
    return (
        <main className='home-main-container flex flex-col items-center h-screen'>
            <article id='Shows' className='flex flex-col items-center'>
                <Shows />
            </article>
            <article id='Band' className='flex flex-col items-center'>
                <h2 className='text-3xl'>Band</h2>
                <h2 className='relative bottom-9 opacity-50 text-5xl text-yellow-800'>»</h2>
            </article>
            <article id='Videos' className='flex flex-col items-center'>
                <h2 className='text-3xl'>Videos</h2>
                <h2 className='relative bottom-9 opacity-50 text-5xl text-yellow-800'>«</h2>
            </article>
            <article id='Testimonials' className='flex flex-col items-center'>
                <h2 className='text-3xl'>Testiomials</h2>
                <h2 className='relative bottom-9 opacity-50 text-5xl text-yellow-800'>@</h2>
            </article>
            <article id='Contact'>Contact</article>
        </main>
    )
}

export default Home