import React from 'react'
import './Footer.css';
import { Products } from '../../Api/Footer/Footer';
import { Link } from 'react-router-dom';


function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <footer class="text-center text-lg-start bg-body-tertiary text-muted">
                <div className="container">
                    <div className='d-none d-lg-block '>
                        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                            <div class="me-5 d-none  d-lg-block">
                                <span className=' __text'>Get connected with us on social networks:</span>
                            </div>
                            <div class="me-5 d-none  d-lg-block __text">

                                <a href="https://github.com/swamithedev" class="me-4 text-reset">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/swaminathanselvam/" target='__blank' class="me-4 text-reset">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://linktr.ee/swamithedev" class="me-4 text-reset">
                                    <i class="fas fa-share"></i>
                                </a>
                                <a href="https://twitter.com/swamithedev" class="me-4 text-reset">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.google.com/search?q=swamithedev&oq=swamithedev&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCECMYJzIGCAMQRRg8MgYIBBBFGEEyBggFEEUYPDIGCAYQRRhBMgYIBxBFGEHSAQgxNzQxajBqNKgCALACAA&sourceid=chrome&ie=UTF-8" class="me-4 text-reset">
                                    <i class="fab fa-google"></i>
                                </a>
                            </div>
                        </section>
                    </div>
                    <section class="">
                        <div class="container text-center text-md-start mt-5">
                            <div class="row mt-3">
                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold   __footer_title __title">
                                        LearnDevProjects
                                    </h6>
                                    <p className='website_line __text'>
                                        Unlock real-time project learning for beginners and discover affordable, high-quality templates
                                        – both free and paid,
                                        resembling Canva, along with budget-friendly HTML templates, on LearnDevProjects.
                                    </p>
                                </div>

                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4 __footer_title __title">
                                        Products
                                    </h6>

                                    <ul>
                                        <li> <Link to="/project">Projects</Link></li>
                                        <li> <Link to="/blog">Blogs</Link></li>
                                        <li> <Link to="/service">Service</Link></li>
                                        {/* <li> <Link to="/blog">Blogs</Link></li> */}
                                        {/* <li> <Link to="/blog">Blogs</Link></li> */}

                                    </ul>
                                </div>

                                {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4 __footer_title">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" class='text-reset __links'>Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset __links">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset __links">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset __links">Help</a>
                                    </p>
                                </div> */}

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 class="text-uppercase fw-bold mb-4 __footer_title __title">Contact</h6>
                                    <p className=' __links __text'><i class="fas fa-home me-3"></i> Mayiladuthurai, TamilNadu</p>
                                    <p className=' __links __text'>
                                        <i class="fas fa-envelope me-3 "></i>
                                        <a href="mailto:swamithedev@gmail.com" className='__text'>swamithedev@gmail.com</a>
                                    </p>
                                    <p className=' __links __text'><i class="fas fa-phone me-3 " style={{ color: 'none' }}></i> <a href="tel:+91 6383548296" className='__text'> 6383548296</a></p>
                                    <p className=' __links __text'>
                                        <i class="fa-brands fa-whatsapp me-3"></i> <a className='__link __text' href="https://wa.me/916383548296?text=Hii">6383548296</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="text-center p-4 __text" style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}>
                        © {year} Copyright:
                        <a class="portfolio_link" target='__blank' href="https://swamithedev.vercel.app">swamithedev</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer


