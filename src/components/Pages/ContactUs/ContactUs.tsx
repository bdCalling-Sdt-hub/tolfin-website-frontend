import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className="bg-[#111] text-white p-8">
        <div className="w-full container mx-auto flex flex-col md:flex-row gap-8 mt-20">

          <div className="bg-[#4F6367] flex-1 p-10 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
            <p className="text-lg mb-4">We're here to assist you—reach out for security solutions and support.</p>

            <div className="mb-4">
              <p>Email:</p>
              <a href="mailto:info@tolfinglobalng.com" className="text-[#2E4C49]">info@tolfinglobalng.com</a>
            </div>

            <div className="mb-4">
              <p>Phone:</p>
              <p className="text-[#2E4C49]">+2348141168700</p>
              <p className="text-[#2E4C49]">+1943-255-8091</p>
            </div>
          </div>


          <div className="flex-1">
            <div className="flex gap-4">
              <div className="mb-6">
                <p className="mb-2">First Name (required)</p>
                <input
                  type="text"
                  placeholder=" "
                  className="w-full p-3 bg-[#4F6367] text-white rounded-md mb-4"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">Last Name (required)</p>
                <input
                  type="text"
                  placeholder=" "
                  className="w-full p-3 bg-[#4F6367] text-white rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mb-6">
                <p className="mb-2">Email (required)</p>
                <input
                  type="email"
                  placeholder="Your Services"
                  className="w-full p-3 bg-[#4F6367] text-white rounded-md"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">Telephone (required)</p>
                <input
                  type="tel"
                  placeholder="Our Services"
                  className="w-full p-3 bg-[#4F6367] text-white rounded-md"
                />
              </div>
            </div>
            <div className="mb-6">
              <p className="mb-2">Details</p>
              <textarea
                placeholder="Add details"
                className="w-full p-3 bg-[#4F6367] text-white rounded-md"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button className="bg-[#4F6367] text-white py-2 px-6 rounded-md">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactForm