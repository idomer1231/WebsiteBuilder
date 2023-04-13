import React from 'react';
import Heading from './Heading';

function Service() {
  const services = [
    { title: 'Web Design', description: 'We create beautiful, responsive websites tailored to your needs.' },
    { title: 'Web Development', description: 'We develop scalable and efficient web applications using modern technologies.' },
    { title: 'SEO & Marketing', description: 'We help you improve your search engine rankings and increase your online presence.' },
  ];

  return (
    <section className="bg-gray-100 py-12"><Heading>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div></Heading>
    </section>
  );
}

export default Service;
