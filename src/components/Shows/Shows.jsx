import './Shows.css'
import ShowCard from '../ShowCard/ShowCard'

const Shows = () => {
    return (
        <main id='Shows' className='flex flex-col items-center justify-center'>
            <header className='shows-header flex justify-center items-center text-4xl'>Shows</header>
            <ShowCard />
        </main>
    )
}

export default Shows