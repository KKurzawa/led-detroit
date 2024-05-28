import './NavbarMobile.css'
import Navlinks from '../../Utils/Navlinks.jsx'
import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const NavbarMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <nav ref={ref} className="mobile-nav md:hidden">
            <article id='hamburger'>
                <Hamburger id='hamburger' toggled={isOpen} size={35} toggle={setOpen} color='#B59330' label="Show menu" rounded distance='lg' />
            </article>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="motion-div absolute left-0 right-0 top-24 p-5 pt-0"
                    >
                        <ul className="grid gap-2">
                            {Navlinks.map((route, idx) => {
                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                        key={route.title}
                                        className="route-title flex w-full h-full rounded-3xl py-2"
                                    >
                                        <a
                                            onClick={() => setOpen((prev) => !prev)}
                                            className={
                                                "flex items-center justify-between w-full"
                                            }
                                            href={route.href}
                                        >
                                            <span className="link-title flex text-5xl pl-5">{route.title}</span>
                                        </a>
                                        <img src={route.pic} alt='Zeppelin Symbol' className='flex items-center justify-center w-20 h-full pr-5 opacity-85' />
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};


export default NavbarMobile