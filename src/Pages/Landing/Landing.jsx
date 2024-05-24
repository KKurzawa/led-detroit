import './Landing.css'


const Landing = () => {
    return (
        <main className='landing-main-container flex flex-col items-center justify-center'>
            <header className='landing-header flex text-7xl md:text-[10rem]'>LED DETROIT</header>
            <img src='./ZeppelinLogoSeven.png' className='flex w-96 h-auto' />
            <article className='hidden md;flex flex-col items-center my-10'>
                <h2 className='landing-description text-6xl lg:texg-7xl pb-10'>DETROIT&apos;S ULTIMATE LED ZEPPELIN</h2>
                <h2 className='landing-description text-6xl lg:texg-7xl pb-10'>EXPERIENCE</h2>
            </article>
        </main>
    )
}

export default Landing