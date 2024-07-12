import './Landing.css'


const Landing = () => {
    return (
        <>
            {/* large */}
            <main className='crop-circle-container hidden lg:flex flex-col items-center -mt-[7.5rem]'>
                <article className='welcome-to flex flex-row justify-center items-center text-8xl -mb-[17.5rem]'>
                    <h2 className='welcome pr-2'>WELCOME </h2>
                    <h2 className='to'> TO</h2>
                </article>
                <article className='led-detroit-container flex justify-center items-center -mb-[21rem]'>
                    <h2 className='led-detroit text-9xl font-bold'>LED-DETROIT</h2>
                </article>
                <article className='description flex flex-row justify-center items-center w-fit -mb-[12rem] text-5xl font-bold'>
                    <h2 id='detroits' className='detroits pr-4'>DETROIT&apos;S</h2>
                    <h2 className='ultimate pr-4'>ULTIMATE</h2>
                    <h2 className='led-zeppelin pr-4'>LED-ZEPPELIN</h2>
                    <h2 className='experience-word'>EXPERIENCE</h2>
                </article>
            </main>
            {/* medium */}
            <main className='medium-crop-circle-container hidden md:flex lg:hidden flex-col items-center pt-40 pb-64'>
                <article className='medium-welcome-to flex flex-row justify-center items-center text-4xl -mb-[14.5rem]'>
                    <h2 className='medium-welcome pr-2'>Welcome </h2>
                    <h2 className='medium-to'> To</h2>
                </article>
                <article className='medium-led-detroit-container flex justify-center items-center -mb-[17rem]'>
                    <h2 className='medium-led-detroit text-8xl font-bold'>LED-DETROIT</h2>
                </article>
                <article className='medium-description flex flex-row justify-center items-center text-3xl'>
                    <h2 className='medium-detroits pr-2'>Detroits</h2>
                    <h2 className='medium-ultimate pr-2'>Ultimate</h2>
                    <h2 className='medium-led-zeppelin pr-2'>Led-Zeppelin</h2>
                    <h2 className='medium-experience-word'>Experience</h2>
                </article>
            </main>
            {/* small */}
            <main className='small-crop-circle-container flex md:hidden flex-col items-center pt-40 pb-60'>
                <article className='small-welcome-to flex flex-row justify-center items-center text-xl -mb-[9rem]'>
                    <h2 className='small-welcome pr-2'>Welcome </h2>
                    <h2 className='small-to'> To</h2>
                </article>
                <article className='small-led-detroit-container flex justify-center items-center -mb-[12rem]'>
                    <h2 className='small-led-detroit text-5xl font-bold'>LED-DETROIT</h2>
                </article>
                <article className='small-description flex flex-row justify-center items-center text-xl'>
                    <h2 className='small-detroits pr-1'>Detroits</h2>
                    <h2 className='small-ultimate pr-1'>Ultimate</h2>
                    <h2 className='small-led-zeppelin pr-1'>Led-Zeppelin</h2>
                    <h2 className='small-experience-word'>Experience</h2>
                </article>
            </main>
        </>
        // old Landing, pretty terrible
        // <main className='landing-main-container flex flex-col items-center justify-center mt-10'>
        //     <header className='landing-header flex text-7xl md:text-[10rem]'>LED DETROIT</header>
        //     <img src='./ZeppelinSymbolEight.png' width='750' height='570' className='landing-logo flex w-96 h-auto' />
        //     <article className='hidden md:flex flex-col items-center my-10'>
        //         <h2 id='detroit' className='landing-description text-6xl lg:texg-7xl pb-10'>DETROIT&apos;S<span id='ultimate'> ULTIMATE</span><span id='led'> LED</span><span id='zeppelin'> ZEPPELIN</span></h2>
        //         <h2 id='experience' className='landing-description text-6xl lg:texg-7xl pb-10'>EXPERIENCE</h2>
        //     </article>
        //     <article className='flex flex-col md:hidden items-center'>
        //         <h2 id='mobile-detroit' className='landing-description text-5xl mb-3'>DETROIT&apos;S</h2>
        //         <h2 id='mobile-ultimate' className='landing-description text-5xl mb-3'>ULTIMATE</h2>
        //         <h2 id='mobile-led' className='landing-description text-5xl mb-3'>LED ZEPPELIN</h2>
        //         <h2 id='mobile-experience' className='landing-description text-5xl mb-3'>EXPERIENCE</h2>
        //     </article>
        // </main>
    )
}

export default Landing