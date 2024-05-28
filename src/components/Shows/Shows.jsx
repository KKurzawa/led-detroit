import './Shows.css'
import ShowCard from '../ShowCard/ShowCard'
import ZepSymbolOne from '/ZeppelinSymbolOne.png'

const Shows = () => {
    return (
        <main id='Shows' className='flex flex-col items-center justify-center w-full h-auto'>
            <article className='shows-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolOne} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>Shows</header>
                <img src={ZepSymbolOne} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <ShowCard />
        </main>
    )
}

export default Shows