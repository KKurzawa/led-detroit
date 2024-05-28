import './Videos.css'
import ZepSymbolThree from '/ZeppelinSymbolThree.png'

const Videos = () => {
    return (
        <main id='Videos' className='flex flex-col items-center justify-center w-full h-auto'>
            <article className='videos-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolThree} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>Videos</header>
                <img src={ZepSymbolThree} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
        </main>
    )
}

export default Videos