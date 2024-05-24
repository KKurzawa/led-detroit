import './ShowCard.css'
import showList from '../../Utils/ShowList.jsx'

const ShowCard = () => {
    return (
        <>
            {showList.map((item, index) => (
                <article key={index} className='flex flex-col items-center justify-center'>
                    <h2 className='date'>{item.date}</h2>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.venueLink, '_blank')
                        , 500)} className='venue'>{item.venue}</button>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.ticketLink, '_blank')
                        , 500)} className='tckt-btn'>Get Tickets</button>
                </article>
            ))}
        </>
    )
}

export default ShowCard