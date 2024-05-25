import './Band.css'
import BandMember from '../BandMember/BandMember'

const Band = () => {
    return (
        <main id='Band' className='flex flex-col items-center justify-center W-full'>
            <header className='band-header flex justify-center items-center text-4xl'>Band</header>
            <BandMember />
        </main>
    )
}

export default Band