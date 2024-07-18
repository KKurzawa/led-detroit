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
                    <article className='landing-body flex flex-col items-center justify-evenly w-full h-full py-12 md:py-10 lg:py-20'>
                        <h1 className='led-detroit flex justify-center items-center text-7xl md:text-9xl font-bold w-fit h-fit px-4 pb-4 pt-6 mt-5 md:mt-0 mb-14 md:mb-10 lg:mb-16 rounded-2xl'>LED-DETROIT</h1>
                        {/* small */}
                        <article className='small-description flex md:hidden flex-col justify-center items-center px-2 py-2 mb-14 font-bold'>
                            <h2 className='flex justify-center items-center text-[2.5rem] font-bold w-fit h-fit -mb-2'>DETROIT&apos;S ULTIMATE</h2>
                            <h2 className='flex justify-center items-center text-[2.5rem] font-bold w-fit h-fit -mb-2'>LED-ZEPPELIN</h2>
                            <h2 className='flex justify-center items-center text-[2.5rem] font-bold w-fit h-fit'>EXPERIENCE</h2>
                        </article>
                        {/* medium */}
                        <article className='medium-description hidden md:flex lg:hidden flex-col justify-center items-center px-2 py-2 font-bold'>
                            <h2 className='flex justify-center items-center text-7xl font-bold w-fit h-fit pb-3 mt-5'>DETROIT&apos;S ULTIMATE</h2>
                            <h2 className='flex justify-center items-center text-7xl font-bold w-fit h-fit pb-3'>LED-ZEPPELIN</h2>
                            <h2 className='flex justify-center items-center text-7xl font-bold w-fit h-fit'>EXPERIENCE</h2>
                        </article>
                        {/* large */}
                        <h2 className='description hidden lg:flex justify-center items-center text-7xl font-bold w-fit h-fit px-4 py-4 mb-12 rounded-2xl'>DETROIT&apos;S ULTIMATE LED-ZEPPELIN EXPERIENCE</h2>
                    </article>
                    <footer className='landing-footer flex justify-center items-center w-full h-20'>
                        <h2 className='site-credit flex justify-center items-center text-xl lg:text-3xl font-bold'>SITE DESIGNED AND DEVELOPED BY KRIS KURZAWA</h2>
                    </footer>
                </main>
            </div>
        </>
    )
}

export default Landing