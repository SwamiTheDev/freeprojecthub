import Showbtn from '../Components/showbtn';
import desktopherocoverimg from '../assets/Images/image-web-3-desktop.jpg';
import mobileherocoverimg from '../assets/Images/image-web-3-desktop.jpg';

import './Homepage.css'
export default function Homesection() {
    return (
        <>
            <section className='showcase mb-lg-4'>
                <div>
                    <picture>
                        <source media="(min-width: 768px)" srcset={desktopherocoverimg} />
                        <img src={mobileherocoverimg} alt="Load" />
                    </picture>
                    <article className='showcase-article'>
                        <h1 className='hero-title mt-3 mt-lg-0'>Join the <span style={{ color: 'hsl(5, 85%, 63%)' }}>Learning </span>Adventure!</h1>
                        <div>
                            <p className='hero-text'>
                                Empowering tech enthusiasts with a treasure trove of tutorials, source code, and cutting-edge projects – your gateway to a world of innovation. Join us at FreeProjectHub and elevate your technical journey!
                            </p>
                            <Showbtn btnname='Read more' />
                        </div>
                    </article>
                </div >
                <div>
                    <h4>New </h4>
                    <article>
                        <h5>Hydrogen VS Electric Cars</h5>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </article>
                    <article>
                        <h5>The Downsides of AI Artistry</h5>
                        <p>
                            What are the possible adverse effects of on-demand AI image
                            generation?
                        </p>
                    </article>

                </div>
            </section >
        </>
    )
}