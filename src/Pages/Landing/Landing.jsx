import './Landing.css'


const Landing = () => {
    return (
        <main className='landing-main-container flex flex-col items-center justify-center'>
            <header className='landing-header flex text-[10rem]'>LED DETROIT</header>
            <img src='./ZeppelinLogoSeven.png' className='flex w-96 h-auto' />
            <h2 className='landing-description text-7xl'>DETROIT&apos;S <span>ULTIMATE </span><span className='landing-description'>LED </span><span>ZEPPELIN </span><span className='landing-description'>EXPERIENCE</span></h2>
        </main>
    )
}

export default Landing