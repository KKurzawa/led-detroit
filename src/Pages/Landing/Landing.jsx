import './Landing.css'


const Landing = () => {
    return (
        <main className='landing-main-container flex flex-col items-center justify-center mt-10'>
            <header className='landing-header flex text-7xl md:text-[10rem]'>LED DETROIT</header>
            <img src='./ZeppelinSymbolEight.png' width='750' height='570' className='landing-logo flex w-96 h-auto' />
            <article className='hidden md:flex flex-col items-center my-10'>
                <h2 id='detroit' className='landing-description text-6xl lg:texg-7xl pb-10'>DETROIT&apos;S<span id='ultimate'> ULTIMATE</span><span id='led'> LED</span><span id='zeppelin'> ZEPPELIN</span></h2>
                <h2 id='experience' className='landing-description text-6xl lg:texg-7xl pb-10'>EXPERIENCE</h2>
            </article>
            <article className='flex flex-col md:hidden items-center'>
                <h2 id='mobile-detroit' className='landing-description text-5xl mb-3'>DETROIT&apos;S</h2>
                <h2 id='mobile-ultimate' className='landing-description text-5xl mb-3'>ULTIMATE</h2>
                <h2 id='mobile-led' className='landing-description text-5xl mb-3'>LED ZEPPELIN</h2>
                <h2 id='mobile-experience' className='landing-description text-5xl mb-3'>EXPERIENCE</h2>
            </article>
        </main>
    )
}

export default Landing