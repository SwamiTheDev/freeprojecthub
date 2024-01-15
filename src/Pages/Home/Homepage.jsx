import Showbtn from '../../Components/Readmore Button/showbtn'
import desktopherocoverimg from '../../assets/Images/image-web-3-desktop.jpg';
import mobileherocoverimg from '../../assets/Images/image-web-3-mobile.jpg'
import './Homepage.css'
import ServiceSection from '../Services/Services';
export default function Homesection() {
    return (
        <>
            <section className='showcase '>
                <div className='mb-3 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <picture>
                        <source media="(min-width: 768px)" srcset={desktopherocoverimg} />
                        <img src={mobileherocoverimg} alt="Load" />
                    </picture>
                    <article className='showcase-article'>
                        <h1 className='hero-title mt-3 mt-lg-0 text-center' >Join the <span style={{ color: 'hsl(5, 85%, 63%)' }}>Learning </span>Adventure!</h1>
                        <div>
                            <p className='hero-text'>
                                Empowering tech enthusiasts with a treasure trove of tutorials, source code, and cutting-edge projects – your gateway to a world of innovation. Join us at FreeProjectHub and elevate your technical journey!
                            </p>
                            <Showbtn btnname='Read more' className='' />
                        </div>
                    </article>
                </div >
                <div>
                    <h4 className='text-center'>New </h4>
                    <article>
                        <h5 className='text-center'>Hydrogen VS Electric Cars</h5>
                        <p className='text-center __line'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </article>
                    <article>
                        <h5 className='text-center'>The Downsides of AI Artistry</h5>
                        <p className='text-center __line'>
                            What are the possible adverse effects of on-demand AI image
                            generation?
                        </p>
                    </article>
                </div>
            </section >
            <ServiceSection />
        </>

    )
}