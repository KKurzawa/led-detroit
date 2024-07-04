import './BandMember.css'
import bandMemberList from '../../Utils/BandMemberList'
const BandMember = () => {
    return (
        <main className='band-member-main w-full h-full'>
            <article className='hidden md:flex justify-around my-10 w-full h-auto'>
                {bandMemberList.map((item, index) => index < 3 && (
                    <article key={item.id} className='member-container flex flex-col items-center w-full h-auto m-5 rounded-3xl'>
                        <h2 key={item.name} className='member-name flex md:text-4xl lg:text-5xl pt-2'>{item.name}</h2>
                        <section className='img-container flex justify-center w-[95%] mb-1 lg:mb-3 rounded-3xl'>
                            <img key={item.image} src={item.image} className='member-pic w-full h-auto rounded-3xl' />
                        </section>
                        <p key={item.artists} className='artists text-[.7rem] lg:text-[1.25rem]'>{item.artists}</p>
                        <article className='flex flex-row'>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button className='media-icon' onClick={() => setTimeout(() => {
                                window.open(item.facebookLink, '_blank')
                            }, 500)}>{item.facebookIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button className='media-icon' onClick={() => setTimeout(() =>
                                window.open(item.instagramLink, '_blank')
                                , 500)}>{item.instagramIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.websiteLink, '_blank')
                                , 500)}>{item.websiteIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.appleLink, '_blank')
                                , 500)}>{item.appleIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.spotifyLink, '_blank')
                                , 500)}>{item.spotifyIcon}</button></i>
                        </article>
                    </article>

                ))}
            </article>
            <article className='hidden md:flex justify-center mb-10 mx-32'>
                {bandMemberList.map((item, index) => index > 2 && (
                    <article key={item.id} className='member-container flex flex-col items-center w-full h-auto m-5 rounded-3xl'>
                        <h2 key={item.name} className='member-name flex md:text-4xl lg:text-5xl pt-2'>{item.name}</h2>
                        <article className='img-container flex justify-center w-[95%] mb-1 lg:mb-3 rounded-3xl'>
                            <img key={item.image} src={item.image} className='member-pic w-full h-auto rounded-3xl' />
                        </article>
                        <p key={item.artists} className='artists text-[.7rem] lg:text-[1.25rem]'>{item.artists}</p>
                        <article className='flex flex-row'>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() => {
                                window.open(item.facebookLink, '_blank')
                            }, 500)}>{item.facebookIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.instagramLink, '_blank')
                                , 500)}>{item.instagramIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.websiteLink, '_blank')
                                , 500)}>{item.websiteIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.appleLink, '_blank')
                                , 500)}>{item.appleIcon}</button></i>
                            <i className='media-icon mx-1 lg:mx-2 my-1 lg:my-3 text-2xl lg:text-3xl'><button onClick={() => setTimeout(() =>
                                window.open(item.spotifyLink, '_blank')
                                , 500)}>{item.spotifyIcon}</button></i>
                        </article>
                    </article>
                ))}
            </article>
            <article className='flex flex-col md:hidden items-center mx-2 mt-10 mb-5'>
                {bandMemberList.map((member) => (
                    <>
                        <article className='mobile-member-container flex flex-col items-center w-[90%] mb-10 rounded-3xl'>
                            <h2 key={member.name} className='mobile-member-header text-4xl pt-3'>{member.name}</h2>
                            <section className='img-container w-[85%] rounded-3xl mb-1'>
                                <img src={member.image} key={member.image} alt='band member picture' className='mobile-member-pic w-full rounded-3xl' />
                            </section>
                            <p key={member.artists} className='artists lg:text-[1.25rem]'>{member.artists}</p>
                            <article className='flex flex-row'>
                                <i className='media-icon text-2xl mx-2 mb-2'><button onClick={() => setTimeout(() => {
                                    window.open(member.facebookLink, '_blank')
                                }, 500)}>{member.facebookIcon}</button></i>
                                <i className='media-icon text-2xl mx-2 mb-2'><button onClick={() => setTimeout(() =>
                                    window.open(member.instagramLink, '_blank')
                                    , 500)}>{member.instagramIcon}</button></i>
                                <i className='media-icon text-2xl mx-2 mb-2'><button onClick={() => setTimeout(() =>
                                    window.open(member.websiteLink, '_blank')
                                    , 500)}>{member.websiteIcon}</button></i>
                                <i className='media-icon text-2xl mx-2 mb-2'><button onClick={() => setTimeout(() =>
                                    window.open(member.appleLink, '_blank')
                                    , 500)}>{member.appleIcon}</button></i>
                                <i className='media-icon text-2xl mx-2 mb-2'><button onClick={() => setTimeout(() =>
                                    window.open(member.spotifyLink, '_blank')
                                    , 500)}>{member.spotifyIcon}</button></i>
                            </article>
                        </article>
                    </>
                ))}
            </article>
        </main>


    )
}

export default BandMember