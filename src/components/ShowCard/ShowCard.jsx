import './ShowCard.css'
import showList from '../../Utils/ShowList.jsx'

const ShowCard = () => {

    function freeShow() {
        alert('This is a free Show!')
    }

    function ticketsNotYetAvailable() {
        alert('Tickets not yet available.  Please contact venue or check back later.')
    }

    return (
        <main className='card-container flex flex-col w-full h-full items-center py-5'>
            {showList.map((item, index) => (
                <section key={index} className='single-card-container flex justify-center w-full' >
                    <article className='single-card flex flex-col items-center justify-center w-[22rem] h-full py-20 my-10 mx-5 text-4xl'>
                        <h2 className='date'>{item.date}</h2>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.venueLink, '_blank')
                            , 500)} className='venue'>{item.venue}</button>
                        <h2 className='city'>{item.location}</h2>
                        {item.ticketLink === 1 ? (
                            <button onClick={() => setTimeout(() =>
                                ticketsNotYetAvailable()
                                , 500)} className='tckt-btn'>Get Tickets</button>
                        ) : item.ticketLink === 2 ? (
                            <button onClick={() => setTimeout(() =>
                                freeShow()
                                , 500)} className='tckt-btn'>Get Tickets</button>
                        ) :
                            <button onClick={() => setTimeout(() =>
                                window.open(item.ticketLink, '_blank')
                                , 500)} className='tckt-btn'>Get Tickets</button>
                        }
                    </article>
                </section>
            ))}
        </main>
    )
}

export default ShowCard