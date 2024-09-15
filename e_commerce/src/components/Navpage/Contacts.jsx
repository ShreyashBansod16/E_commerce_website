import React from 'react';

function Contacts() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Contact Information Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <div>
                  <p>Customer</p>
                  <p>+761 9854776</p>
                  <p>+951 4872996</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <div>
                  <p>Customer</p>
                  <a href="mailto:support@ecommerce.com" className="text-blue-500">support@ecommerce.com</a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <div>
                  <p>Office Address</p>
                  <p>Commerce Plaza,</p>
                  <p>Downtown Bussiness Center,</p>
                  <p>Mumbai CE16B</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔗</span>
                <div>
                  <p>Connect with</p>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-500">Instagram</a>
                    <a href="#" className="text-blue-500">Twitter</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Send Us a Message Section */}
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input type="text" placeholder="Customer's First Name" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input type="text" placeholder="Customer's Last Name" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">E-mail</label>
                <input type="email" placeholder="example@email.com" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm mb-2">Your Message</label>
                <textarea placeholder="Please write down your message" className="w-full p-2 border rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-orange-300 text-white py-2 px-4 rounded-md hover:bg-orange-400">Send &gt;</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;