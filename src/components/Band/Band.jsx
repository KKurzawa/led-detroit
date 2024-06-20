import './Band.css'
import BandMember from '../BandMember/BandMember'
import ZepSymbolTwo from '/ZeppelinSymbolTwo.png'

const Band = () => {
    return (
        <main id='Band' className='flex flex-col items-center justify-center w-full h-full'>
            <article className='band-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>BAND</header>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <article className='band-member-container w-full h-auto'>
                <BandMember />
            </article>
            <article className='band-top-btn-container flex justify-center w-full h-auto'>
                <button className='band-top-btn w-fit h-auto my-3 text-4xl' onClick={() => setTimeout(() => {
                    const element = document.querySelector('#top');
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 500)}>To The Top</button>
            </article>
        </main>
    )
}

export default Band