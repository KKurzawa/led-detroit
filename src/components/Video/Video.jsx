import './Video.css'

const Video = () => {
    return (
        <main className='video-main flex justify-center w-full'>
            {/* ro video */}
            <iframe className='ro-video my-10 hidden md:block rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/bD2gSjA9M8Y?si=kaVRPyGI2FMD4ze9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='ro-video my-10 md:hidden rounded-3xl' width="350" height="197" src="https://www.youtube.com/embed/bD2gSjA9M8Y?si=kaVRPyGI2FMD4ze9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </main>
    )
}

export default Video