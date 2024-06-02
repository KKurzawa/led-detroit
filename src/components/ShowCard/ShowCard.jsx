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
        <main className='card-container flex flex-col w-full h-full items-center my-5'>
            {showList.map((item, index) => (
                <article key={index} className='single-card flex flex-col items-center justify-center w-[22rem] h-full py-20 m-5 text-4xl'>
                    <h2 className='date'>{item.date}</h2>
                    <button data-hover={item.venue} onClick={() => setTimeout(() =>
                        window.open(item.venueLink, '_blank')
                        , 500)} className='venue'>{item.venue}</button>
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
            ))}
        </main>
    )
}

export default ShowCard