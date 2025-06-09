import React from "react";
import Header from "../components/Header/Header"
import './Home.css'
import "../components/Header/Header.css";
import "../components/Footer/Footer.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div><Header /></div>
            <div className="other" id="other">
                <article className="content">
                    <div className="banner">
                        <section className="hero-section">
                            <h1>Welcome to Vivekanand College!</h1>
                            <p>Your journey to excellence starts here.</p>
                            <button><Link to="/admissionspage">Apply Now!</Link>
                            </button>
                        </section>
                    </div>
                </article>
                <article className="info">
                    <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                </article>
                <article className="text">
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
                    </ul>
                </article>
                <figure className="image">
                    <figcaption>Campus Life & Facilities</figcaption>
                    <section className="img">
                        <img src="public\images\students-studying-DbLGuwF_.jpeg" />
                        <img src="public\images\campus-life-Crkero7B.jpg" id="img2" />
                    </section>
                </figure>
                <section className="bottom">
                    <h4>Ready to start your journey with us?</h4>
                    <button>Apply Now!</button>
                </section>
            </div>
            <div><Footer /></div>
        </>
    )
}
export default Home;