import './Band.css'
import BandMember from '../BandMember/BandMember'
import ZepSymbolTwo from '/ZeppelinSymbolTwo.png'

const Band = () => {
    return (
        <main id='Band' className='flex flex-col items-center justify-center w-full h-full'>
            <article className='shows-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>BAND</header>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <BandMember />
            <article className='band-top-btn-container flex justify-center w-full h-auto'>
                <button className='band-top-btn w-fit h-auto py-3 text-4xl' data-hover='To The Top' onClick={() => setTimeout(() => {
                    const element = document.querySelector('#top');
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 500)}>To The Top</button>
            </article>
        </main>
    )
}

export default Band