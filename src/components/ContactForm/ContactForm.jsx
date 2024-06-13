import './ContactForm.css'
import { useState } from 'react'
import { validateEmail } from '../../Utils/EmailValidator'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setTimeout(() =>
                alert('Please Enter A Valid Email')
                , 500)
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your message ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <form onSubmit={handleSubmit} className='contact-form flex flex-col items-center w-full h-auto'>
            <article className='flex flex-col items-center w-full mb-2'>
                <input className='name w-5/6 md:w-1/2 px-3 py-1 mb-2 mt-10 text-3xl rounded-3xl'
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className='email w-5/6 md:w-1/2 px-3 py-1 my-2 text-3xl rounded-3xl'
                    type='text'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className='subject w-5/6 md:w-1/2 px-3 py-1 my-2 text-3xl rounded-3xl'
                    type='text'
                    placeholder='Your Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea className='message w-5/6 md:w-1/2 px-3 py-1 my-2 text-3xl rounded-3xl'
                    type='text'
                    rows='5'
                    cols='10'
                    placeholder='Your Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </article>
            <button type='submit' className='submit-btn w-44 rounded-3xl text-3xl mb-10 py-2'>SUBMIT</button>
        </form>
    )
}

export default ContactForm