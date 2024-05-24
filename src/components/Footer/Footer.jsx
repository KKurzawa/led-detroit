import './Footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col items-center text-xl py-2'>
            <a href='mailto:kurzawa1@yahoo.com' className='mailto py-[.1rem]'>Email Us</a>
            <a href='tel:12485682806' className='phone py-[.1rem]'>Call Us</a>
            <p className='copyright py-[.1rem]'>Copyright &copy; {today.getFullYear()} Led Detroit - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link py-[.1rem]'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer