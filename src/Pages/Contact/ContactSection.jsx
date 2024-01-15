import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import contactus from '../../assets/lotties/contact us.json'
import style from './Contact.module.css'
import Sendbtn from '../../Components/Sendbtn/sendbtn';
import Footer from '../../Pages/Footer/Footer'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
    });


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactus,

    };

    const validateEmail = (email) => {
        // Use regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = '';

        // Perform validation based on the input field
        switch (name) {
            case 'fullName':
                error = value.length < 4 ? 'Enter a Full Name' : '';
                break;
            case 'email':
                error = validateEmail(value) ? '' : 'Invalid email address';
                break;
            default:
                break;
        }
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for any remaining errors
        for (const key in formData) {
            if (key !== 'phone' && formData[key].length === 0) {
                setErrors({ ...errors, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required` });
                return;
            }
        }

        // Your EmailJS integration code
        const templateParams = {
            from_name: formData.fullName,
            from_email: formData.email, // Update with your recipient's name
            message: formData.message,
            from_number: formData.phone
        };

        emailjs.send('service_pwzrcfe', 'template_3pb90wm', templateParams, 'oXQnEoFIPDavyb_Jr')
            .then((response) => {
                console.log('Email sent:', response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <>
            <div className={style.containers}>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 col-">
                            <div className={style.left_col}>
                                <h2 className={style.title}>Drop Us a Message</h2>
                                <div className={style.lottieContainer}>
                                    <Lottie className={style.lottie}
                                        options={defaultOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xs-12 col-sm-12 col-md-7 col-lg-7">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12 mx-auto col-xs-11 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="form-group">
                                            <label htmlFor="fullName" className={style.label}>Full Name</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.fullName && 'is-invalid'}`}
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required placeholder='John Doe'
                                            />
                                            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto col-xs-11 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className={style.label}>Email</label>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.email && 'is-invalid'}`}
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required placeholder='johndoe@gmail.com'
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mx-auto col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="form-group">
                                        <label htmlFor="phone" className={style.label}>Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder='638354****'
                                        />
                                    </div>
                                </div>

                                <div className="col-12 mx-auto col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="form-group">
                                        <label htmlFor="message" className={style.label}>Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className={style.btn}>
                                    <button type="submit" className={style.btn} style={{ margin: 'auto', border: 'none', padding: 'none', backgroundColor: 'transparent' }} ><Sendbtn /> </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ContactForm;
