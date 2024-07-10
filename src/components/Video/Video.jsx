import './Video.css'

const Video = () => {
    return (
        <main className='video-main flex justify-center'>
            {/* ro video */}
            <article className='single-video-container flex justify-center my-10 rounded-3xl'>
                <iframe className='ro-video hidden md:block rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/bD2gSjA9M8Y?si=kaVRPyGI2FMD4ze9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className='ro-video md:hidden rounded-3xl' width="350" height="197" src="https://www.youtube.com/embed/bD2gSjA9M8Y?si=kaVRPyGI2FMD4ze9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </article>
        </main>
    )
}

export default Video