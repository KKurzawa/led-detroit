import './TestimonialsBody.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

const TestimonialsBody = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        experience: '',
    })

    const [comments, setComments] = useState([{
        firstName: '',
        lastName: '',
        experience: ''
    }])

    function validateComment() {
        if (!input.firstName || !input.lastName || !input.experience) {
            setTimeout(() =>
                alert('You must enter your first name, last name, and experience to submit.')
                , 500)
        }
    }

    useEffect(() => {
        fetch(`${apiBaseUrl}/comments`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes))
        console.log(comments)
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        validateComment();
        const newComment = {
            firstName: input.firstName,
            lastName: input.lastName,
            experience: input.experience
        }
        if (input.firstName && input.lastName && input.experience) {
            alert(`Thank you ${input.firstName} ${input.lastName} for your comment!`);
            axios.post(`${apiBaseUrl}/create`, newComment).then(result => {
                location.reload()
            }).catch(error => {
                console.error(error);
            });
        }


    }

    return (
        <main className='testimonials-body w-full h-auto'>
            <article className='testimonial-container w-full h-auto my-2 md:my-10'>
                {comments.map((item) => (
                    <ol key={item.firstName} className='testimonial flex flex-col py-1 md:py-5'>
                        <li className='user-experience text-xl md:text-3xl mx-4 md:mx-10 text-center'>{item.experience}</li>
                        <article className='user-name flex flex-row justify-end mx-4 md:mr-10 md:text-2xl italic'>
                            <li className='pr-1'>- {item.firstName}</li>
                            <li>{item.lastName}</li>
                        </article>
                    </ol>
                ))}
            </article>
            <article className='small-testimonials-form-header flex flex-col lg:hidden items-center'>
                <h2 className='text-3xl md:text-5xl'>Tell Us About Your Experience With</h2>
                <h2 className='text-3xl md:text-5xl'>Led-Detroit</h2>
            </article>
            <h2 className='testimonials-form-header hidden lg:flex justify-center md:text-6xl'>Tell Us About Your Experience With Led-Detroit</h2>
            <form onSubmit={handleSubmit} className='testimonials-form flex flex-col items-center w-full h-auto'>
                <article className='flex flex-col items-center w-full mb-2'>
                    <input className='first-name w-5/6 md:w-1/2 px-3 py-1 mb-4 mt-4 md:mt-10 text-3xl rounded-2xl'
                        name="firstName" value={input.firstName}
                        type='text'
                        placeholder='Your First Name'
                        onChange={handleChange}
                    />
                    <input className='last-name w-5/6 md:w-1/2 px-3 py-1 my-4 text-3xl rounded-2xl'
                        name="lastName" value={input.lastName}
                        type='text'
                        placeholder='Your Last Name'
                        onChange={handleChange}
                    />
                    <textarea className='experience w-5/6 md:w-1/2 px-3 py-1 my-4 text-3xl rounded-2xl'
                        type='text'
                        rows='5'
                        cols='10'
                        placeholder='Your Expereince'
                        name="experience"
                        value={input.experience}
                        onChange={handleChange}
                    />
                </article>
                <button type='submit' className='post-btn w-44 rounded-2xl text-3xl mt-1 mb-10 py-2'>ADD POST</button>
            </form>
        </main>
    )
}

export default TestimonialsBody