import React from 'react'



const About = () => {
  return (
    <div>
    {/* Hero Section */}
    <section className="bg-secondary text-white">
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We are committed to providing the best products and services to our customers.
        </p>
      </div>
    </section>

    {/* Company Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Founded in 2023, InnovateMart started with a vision to innovate and bring unique solutions to the market.
          Over the years, we have grown into a team of passionate individuals driven by the desire to exceed customer
          expectations. With our headquarters based in Mumbai, we serve clients globally, striving for excellence in everything we do.
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>

        <div className="flex justify-center space-x-8">
          {/* Team Member 1 */}
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white p-6">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team Member"
            />
            <h3 className="font-bold text-xl mb-2">John Doe</h3>
            <p className="text-gray-600 mb-4">CEO & Founder</p>
            <p className="text-gray-600 text-sm">
              John has over 10 years of experience in tech and business management.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white p-6">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://randomuser.me/api/portraits/women/47.jpg"
              alt="Team Member"
            />
            <h3 className="font-bold text-xl mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-4">Chief Technology Officer</p>
            <p className="text-gray-600 text-sm">
              Jane leads our tech team, bringing her expertise in software development.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white p-6">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Team Member"
            />
            <h3 className="font-bold text-xl mb-2">Michael Brown</h3>
            <p className="text-gray-600 mb-4">Chief Marketing Officer</p>
            <p className="text-gray-600 text-sm">
              Michael is in charge of our marketing strategies and building customer relationships.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="  py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
        <p className="text-lg mb-8">
          Join our team and help us make a difference. We are always looking for talented and passionate people.
        </p>
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100">
          Join Us
        </button>
      </div>
    </section>
  </div>
);
};

export default About;