import './BandMember.css'
import bandMemberList from '../../Utils/BandMemberList'
const BandMember = () => {
    return (
        <main className='band-member-main w-full h-full'>
            <article className='hidden md:flex justify-around my-10 w-full h-auto'>
                {bandMemberList.map((item, index) => index < 3 && (
                    <article key={item.id} className='member-container flex flex-col items-center w-full h-auto m-3 rounded-3xl'>
                        <h2 key={item.name} className='member-name flex md:text-4xl lg:text-5xl pt-2'>{item.name}</h2>
                        <img key={item.image} src={item.image} className='member-pic w-[95%] h-auto rounded-3xl pb-1 lg:pb-3' />
                        <p key={item.artists} className='artists text-xs lg:text-[1.25rem]'>{item.artists}</p>
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
                    <article key={item.id} className='member-container flex flex-col items-center w-full h-auto m-3 rounded-3xl'>
                        <h2 key={item.name} className='member-name flex md:text-4xl lg:text-5xl pt-2'>{item.name}</h2>
                        <article className='member-pic-container flex justify-center'>
                            <img key={item.image} src={item.image} className='member-pic w-[95%] h-auto rounded-3xl pb-1 lg:pb-3' />
                        </article>
                        <p key={item.artists} className='artists text-xs lg:text-[1.25rem]'>{item.artists}</p>
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
            <article className='flex flex-col md:hidden items-center mt-10 mb-5'>
                {bandMemberList.map((member) => (
                    <>
                        <article className='mobile-member-container flex flex-col items-center w-[90%] mb-10 rounded-3xl'>
                            <h2 key={member.name} className='mobile-member-header text-4xl pt-3'>{member.name}</h2>
                            <img src={member.image} key={member.image} alt='band member picture' className='mobile-member-pic w-[85%] rounded-3xl' />
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