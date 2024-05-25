import './BandMember.css'
import bandMemberList from '../../Utils/BandMemberList'
const BandMember = () => {
    return (
        <main>
            <article className='hidden md:flex justify-around my-10'>
                {bandMemberList.map((item, index) => index < 3 && (
                    <article key={item.id} className='flex flex-col items-center'>
                        <h2 key={item.name} className='member-name md:text-4xl lg:text-5xl'>{item.name}</h2>
                        <img key={item.image} src={item.image} id='band-member' className='w-[75%] h-auto rounded-3xl' />
                    </article>
                ))}
            </article>
            <article className='hidden md:flex mb-10'>
                {bandMemberList.map((item, index) => index > 2 && (
                    <article key={item.id} className='flex flex-col items-center'>
                        <h2 key={item.name} className='member-name md:text-4xl lg:text-5xl'>{item.name}</h2>
                        <img key={item.image} src={item.image} id='band-member' className='w-[50%] h-auto' />
                    </article>
                ))}
            </article>
            <article className='flex flex-col md:hidden items-center my-10'>
                {bandMemberList.map((member) => (
                    <>
                        <h2 key={member.name} className='mobile-member-header text-4xl'>{member.name}</h2>
                        <img src={member.image} key={member.image} alt='band member picture' className='mobile-member-pic w-[75%] rounded-2xl mb-10' />
                    </>
                ))}
            </article>
        </main>


    )
}

export default BandMember