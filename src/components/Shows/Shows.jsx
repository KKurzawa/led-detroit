import './Shows.css'
import ShowCard from '../ShowCard/ShowCard'
import ZepSymbolOne from '/ZeppelinSymbolOne.png'

const Shows = () => {
    return (
        <main id='Shows' className='flex flex-col items-center justify-center w-full h-auto'>
            <article className='shows-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolOne} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>SHOWS</header>
                <img src={ZepSymbolOne} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <article className='show-card-container w-full h-auto'>
                <ShowCard />
            </article>
            <article className='shows-top-btn-container flex justify-center w-full h-auto'>
                <button className='shows-top-btn w-fit h-auto my-3 text-4xl' data-hover='To The Top' onClick={() => setTimeout(() => {
                    const element = document.querySelector('#top');
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 500)}>To The Top</button>
            </article>
        </main >
    )
}

export default Shows