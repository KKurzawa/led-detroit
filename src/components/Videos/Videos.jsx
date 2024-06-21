import './Videos.css'
import ZepSymbolThree from '/ZeppelinSymbolThree.png'
import Video from '../Video/Video'

const Videos = () => {
    return (
        <main id='Videos' className='flex flex-col items-center justify-center w-full h-auto'>
            <article className='videos-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolThree} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>VIDEO</header>
                <img src={ZepSymbolThree} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <article className='video-container w-full h-full'>
                <Video />
            </article>
            <article className='videos-top-btn-container flex justify-center w-full h-auto'>
                <button className='videos-top-btn w-fit h-auto my-3 text-4xl' onClick={() => setTimeout(() => {
                    const element = document.querySelector('#top');
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 500)}>To The Top</button>
            </article>
        </main>
    )
}

export default Videos