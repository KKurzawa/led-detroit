import Barb from '../../public/BarbOne.png'
import John from '../../public/JohnTwo.jpg'
import Kris from '../../public/KrisOne.png'
import Mark from '../../public/MarkOne.png'
import Todd from '../../public/ToddOne.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";

const bandMemberList = [
    {
        id: 1,
        name: 'Barbara Payton',
        image: Barb,
        facebookIcon: false,
        facebookLink: false,
        insigramIcon: false,
        instagramLink: false,
        websiteIcon: false,
        websiteLink: false,
        appleIcon: false,
        appleLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
    {
        id: 2,
        name: 'Kris Kurzawa',
        image: Kris,
        facebookIcon: <FaFacebookSquare />,
        facebookLink: 'https://www.facebook.com/KrisKurzawaGuitar/',
        insigramIcon: <FaInstagramSquare />,
        instagramLink: 'https://www.instagram.com/k_kurzawa/',
        websiteIcon: <TbWorld />,
        websiteLink: 'https://www.kriskurzawaguitar.com/',
        appleIcon: <SiApplemusic />,
        appleLink: 'https://music.apple.com/us/artist/kris-kurzawa/1071714493',
        spotifyIcon: <FaSpotify />,
        spotifyLink: 'https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx',
    },
    {
        id: 3,
        name: 'John Barron',
        image: John,
        facebookIcon: false,
        facebookLink: false,
        insigramIcon: false,
        instagramLink: false,
        websiteIcon: false,
        websiteLink: false,
        appleIcon: false,
        appleLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
    {
        id: 4,
        name: 'Mark Harper',
        image: Mark,
        facebookIcon: false,
        facebookLink: false,
        insigramIcon: false,
        instagramLink: false,
        websiteIcon: false,
        websiteLink: false,
        appleIcon: false,
        appleLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
    {
        id: 5,
        name: 'Todd Glass',
        image: Todd,
        facebookIcon: false,
        facebookLink: false,
        insigramIcon: false,
        instagramLink: false,
        websiteIcon: false,
        websiteLink: false,
        appleIcon: false,
        appleLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
]

export default bandMemberList