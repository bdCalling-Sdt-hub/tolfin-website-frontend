
export default function BookingFrom() {
    return (
        <div className="bg-[#111]">
            <div className="w-full container  mx-auto  text-gray-300 p-8 rounded-lg shadow-lg ">
                <h1 className="text-2xl font-bold mb-6 text-center md:mt-20">Book  Appointment</h1>
                <form className="space-y-6 mt-20">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold">
                                First Name (required)
                            </label>
                            <input
                                type="text"
                                id="first-name"
                                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold">
                                Last Name (required)
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="company-name" className="block text-sm font-semibold">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company-name"
                                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="appointment-date" className="block text-sm font-semibold">
                                The date, when you want the appointment
                            </label>
                            <input
                                type="date"
                                id="appointment-date"
                                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold">
                                Email (required)
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="telephone" className="block text-sm font-semibold">
                                Telephone (required)
                            </label>
                            <input
                                type="tel"
                                id="telephone"
                                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="details" className="block text-sm font-semibold">
                            Details
                        </label>
                        <textarea
                            id="details"

                            className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 mt-4 bg-[#154047] text-white rounded-md hover:bg-teal-700 transition duration-300"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
