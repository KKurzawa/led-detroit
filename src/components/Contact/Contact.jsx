import './Contact.css'
import ZepSymbolTwo from '/ZeppelinSymbolTwo.png'

const Contact = () => {
    return (
        <main id='Contact' className='flex flex-col items-center justify-center'>
            <article className='contact-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>Contact</header>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
        </main>
    )
}

export default Contact