import './Landing.css'
import ZepSymbolOne from '/ZeppelinSymbolOne.png'
import ZepSymbolTwo from '/ZeppelinSymbolTwo.png'
import ZepSymbolThree from '/ZeppelinSymbolThree.png'
import ZepSymbolFour from '/ZeppelinSymbolFour.png'

const Landing = () => {
    return (
        <>
            <div className='landing-main-two'>
                <main className='landing-main  flex flex-col items-center w-full h-full'>
                    <article className='zep-symbols-landing flex justify-evenly lg:justify-center items-center w-full h-20 lg:gap-32'>
                        <img src={ZepSymbolOne} alt='Zeppelin Symbol' className='zep-symbols w-14 h-14' />
                        <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='zep-symbols w-14 h-14' />
                        <img src={ZepSymbolThree} alt='Zeppelin Symbol' className='zep-symbols w-14 h-14' />
                        <img src={ZepSymbolFour} alt='Zeppelin Symbol' className='zep-symbols w-14 h-14' />
                    </article>
                    <article className='landing-body flex flex-col items-center justify-evenly w-full h-full py-12 md:py-10 lg:py-24'>
                        <h1 className='led-detroit flex justify-center items-center text-7xl md:text-9xl font-bold w-fit h-fit px-4 pb-4 pt-6 mb-14 md:mb-10 lg:mb-16 rounded-2xl'>LED-DETROIT</h1>
                        {/* small */}
                        <article className='small-description flex md:hidden flex-col justify-center items-center px-2 py-2 mb-10 font-bold'>
                            <h2 className='flex justify-center items-center text-[2.5rem] font-bold w-fit h-fit -mb-2'>DETROIT&apos;S ULTIMATE</h2>
                            <h2 className='flex justify-center items-center text-[2.5rem] font-bold w-fit h-fit -mb-2'>LED-ZEPPELIN</h2>
                            <h2 className='flex justify-center items-center text-[2.5rem] font-bold w-fit h-fit'>EXPERIENCE</h2>
                        </article>
                        {/* medium */}
                        <article className='medium-description hidden md:flex lg:hidden flex-col justify-center items-center px-2 py-2 mb-10 font-bold'>
                            <h2 className='flex justify-center items-center text-7xl font-bold w-fit h-fit pb-3 mt-5'>DETROIT&apos;S ULTIMATE</h2>
                            <h2 className='flex justify-center items-center text-7xl font-bold w-fit h-fit pb-3'>LED-ZEPPELIN</h2>
                            <h2 className='flex justify-center items-center text-7xl font-bold w-fit h-fit'>EXPERIENCE</h2>
                        </article>
                        {/* large */}
                        <h2 className='description hidden lg:flex justify-center items-center text-7xl font-bold w-fit h-fit px-4 py-4 mb-16 rounded-2xl'>DETROIT&apos;S ULTIMATE LED-ZEPPELIN EXPERIENCE</h2>
                        <button className='enter-btn flex justify-center items-center w-fit h-fit rounded-2xl text-3xl md:text-6xl lg:text-3xl px-2 py-1'>CLICK TO ENTER</button>
                    </article>
                    <footer className='landing-footer flex justify-center items-center w-full h-20'>
                        <h2 className='site-credit flex justify-center items-center text-xl lg:text-3xl font-bold'>SITE DESIGNED AND DEVELOPED BY KRIS KURZAWA</h2>
                        {/* <img src={ZepSymbolOne} alt='Zeppelin Symbol' className='zep-symbols w-10 h-10' />
        <img src={ZepSymbolTwo} alt='Zeppelin Symbol' className='zep-symbols w-10 h-10' />
        <img src={ZepSymbolThree} alt='Zeppelin Symbol' className='zep-symbols w-10 h-10' />
        <img src={ZepSymbolFour} alt='Zeppelin Symbol' className='zep-symbols w-10 h-10' /> */}
                    </footer>
                </main>
            </div>
            {/* large
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
            medium
            <main className='medium-crop-circle-container hidden md:flex lg:hidden flex-col items-center pt-40 pb-64'>
                <article className='medium-welcome-to flex flex-row justify-center items-center text-7xl font-bold -mb-[14.5rem]'>
                    <h2 className='medium-welcome pr-2'>WELCOME</h2>
                    <h2 className='medium-to'> TO</h2>
                </article>
                <article className='medium-led-detroit-container flex justify-center items-center -mb-[17rem]'>
                    <h2 className='medium-led-detroit text-8xl font-bold'>LED-DETROIT</h2>
                </article>
                <article className='medium-description flex flex-row justify-center items-center text-3xl font-bold'>
                    <h2 className='medium-detroits pr-3'>DETROITS&apos;S</h2>
                    <h2 className='medium-ultimate pr-3'>ULTIMATE</h2>
                    <h2 className='medium-led-zeppelin pr-3'>LED-ZEPPELIN</h2>
                    <h2 className='medium-experience-word'>EXPERIENCE</h2>
                </article>
            </main>
            small
            <main className='small-crop-circle-container flex md:hidden flex-col items-center pt-40 pb-60'>
                <article className='small-welcome-to flex flex-row justify-center items-center text-3xl font-bold -mb-[9rem]'>
                    <h2 className='small-welcome pr-2'>WELCOME</h2>
                    <h2 className='small-to'> TO</h2>
                </article>
                <article className='small-led-detroit-container flex justify-center items-center -mb-[12rem]'>
                    <h2 className='small-led-detroit text-5xl font-bold'>LED-DETROIT</h2>
                </article>
                <article className='small-description flex flex-row justify-center items-center text-lg font-bold'>
                    <h2 className='small-detroits pr-2'>DETROIT&apos;S</h2>
                    <h2 className='small-ultimate pr-2'>ULTIMATE</h2>
                    <h2 className='small-led-zeppelin pr-2'>LED-ZEPPELIN</h2>
                    <h2 className='small-experience-word'>EXPERIENCE</h2>
                </article>
            </main> */}
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