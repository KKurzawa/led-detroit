import './Contact.css'
import ZepSymbolTwo from '/ZeppelinSymbolTwo.png'

const Contact = () => {
    return (
        <main id='Contact' className='flex flex-col items-center justify-center'>
            <article className='contact-header flex justify-center items-center w-full h-16'>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
                <header className='flex justify-center items-center text-5xl mx-10'>CONTACT</header>
                <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='w-10 h-10' />
            </article>
            <article className='contact-top-btn-container flex justify-center w-full h-auto'>
                <button className='contact-top-btn w-fit h-auto py-3 text-4xl' data-hover='To The Top' onClick={() => setTimeout(() => {
                    const element = document.querySelector('#top');
                    element?.scrollIntoView({ behavior: 'smooth' })
                }, 500)}>To The Top</button>
            </article>
        </main>
    )
}

export default Contact