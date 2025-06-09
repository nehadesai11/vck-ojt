import React from "react";
import Header from "../components/Header/Header"
import './Contact.css'
import "../components/Header/Header.css";
import "../components/Footer/Footer.css";
import Footer from "../components/Footer/Footer";
const ContactPage = () => {
    return (
        <>
            <div><Header /></div>
            <div className="other">
                <article className="contact-content">
                    <section className="contact-head">
                        <h1>Contact Us</h1>
                        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                    </section>
                    <section className="enquiry">
                        <h2>General Enquiries</h2>
                        <p>
                            <h4 id="bold-text">Vivekanand College Main Campus</h4>
                            <p id="p1">[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                                India</p>
                            <p id="p2">Phone: **+91 12345 67890**</p>
                            <p>Email: **info@vivekanandcollege.edu**</p>
                            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                        </p>
                    </section>
                    <section className="admit">
                        <h2>Admissions Office</h2>
                        <p id="a-p1">For all admission-related queries regarding undergraduate or postgraduate programs:</p>
                        <p>Phone: +91 98765 43210</p>
                        <p id="a-p2">Email: admissions@vivekanandcollege.edu</p>
                    </section>
                    <section className="services">
                        <h2>Student Support Services</h2>
                        <p id="s-p">For current student support, academic advising, or general assistance:</p>
                        <p>Phone: +91 87654 32109</p>
                        <p>Email: studentsupport@vivekanandcollege.edu</p>
                    </section>
                    <section className="map">
                        <h2>Find Us on the Map</h2>
                        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                        <a href="https://maps.app.goo.gl/JiY6Jqi4HUDi7Xzu6" target="_blank">View on Google Maps</a>
                    </section>
                    <section className="message">
                        <h2>Send Us a Message</h2>
                        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
                    </section>
                </article>
            </div>
            <div><Footer /></div>
        </>
    )
}
export default ContactPage;