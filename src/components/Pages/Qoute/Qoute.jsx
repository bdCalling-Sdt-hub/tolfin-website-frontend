

export default function Qoute() {
    return (
        <div className='bg-[#111]'>
            

            <div className="min-h-screen text-white p-8 ">
                <div className="container mx-auto  p-6 rounded-lg shadow-lg mt-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">Get A Quote</h1>

                    <form>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="first-name">
                                    First Name (required)
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="last-name">
                                    Last Name (required)
                                </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="company-name">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company-name"
                                    name="company-name"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="service-date">
                                    The date, when you need service
                                </label>
                                <input
                                    type="text"
                                    id="service-date"
                                    name="service-date"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-lg mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full p-2 rounded-lg bg-gray-700 text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="state">
                                    State (required)
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="country">
                                    Country (required)
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="email">
                                    Email (required)
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-lg mb-2" htmlFor="telephone">
                                    Telephone (required)
                                </label>
                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-lg mb-2">Select your Service</label>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                <div className="flex items-center">
                                    <input type="checkbox" id="service1" className="mr-2" />
                                    <label htmlFor="service1">Secure Journey Management</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service2" className="mr-2" />
                                    <label htmlFor="service2">Airport Meet and Greet</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service3" className="mr-2" />
                                    <label htmlFor="service3">Manned Guarding</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service4" className="mr-2" />
                                    <label htmlFor="service4">Risk Management Consultancy</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service5" className="mr-2" />
                                    <label htmlFor="service5">Technical Security Services</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service6" className="mr-2" />
                                    <label htmlFor="service6">Tracking Solutions</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service7" className="mr-2" />
                                    <label htmlFor="service7">Training</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="service8" className="mr-2" />
                                    <label htmlFor="service8">Maritime Security</label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-lg mb-2" htmlFor="details">
                                Details
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                className="w-full p-2 rounded-lg bg-gray-700 text-white"
                                rows="4"
                                placeholder="Add details"
                            />
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#154047] text-white rounded-lg hover:bg-teal-700 transition"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
