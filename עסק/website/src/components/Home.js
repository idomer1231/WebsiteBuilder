import React from 'react';
import Service from './Service';
import "./Style.css";
import ContactForm from './ContactForm';
import ContactF from './ContactF'
import Hero from './Hero';

function Home() {
  return (
    <main className="home">
        <Hero />
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Our Company has been providing top-notch web design and development services since 2010. Our team of experienced professionals is dedicated to creating high-quality, responsive, and user-friendly websites for businesses of all sizes. We work closely with our clients to ensure their vision is realized and their goals are met.
        </p>
      </section>

      <section className="services">
        <div className="services-grid">
          <Service
            title="Web Design"
            description="We create beautiful and responsive web designs that will impress your clients."
            iconName="web-design"
          />

        </div>
      </section>

      <section className="portfolio">
        <h2>Our Portfolio</h2>
        <p>
          We have worked with a diverse range of clients, from small startups to large enterprises. Our portfolio showcases some of our most successful projects. Check out our work to see the high-quality websites we have created for our clients.
        </p>
        <a href="#" className="portfolio-link">View Our Portfolio</a>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Interested in working with us? Get in touch with our team to discuss your project and learn more about our services. We'd be happy to provide a free consultation and quote for your website development needs.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
