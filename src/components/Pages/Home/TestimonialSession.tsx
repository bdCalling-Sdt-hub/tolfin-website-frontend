import Image from 'next/image';
import hollywood from '@/assets/hero/holywood1.png';
import hollywood2 from '@/assets/hero/hlywood2.png';
import hollywood3 from '@/assets/hero/jonydev.png';
import hollywood4 from '@/assets/hero/the rock.png';


const TestimonialSection = () => {
    return (
        <section className="w-full container text-white py-12  ">
            <h2 className="text-4xl font-bold mb-8">
                What they say about us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                {/* First Card */}
                <div className="bg-[#154047] p-6 rounded-lg shadow-lg ">
                    <div className="flex md:flex-row sm:flex-col items-center mb-4 w-2/2">
                        {/* Left Side - Image */}
                        <div className="w-1/3">
                            <Image
                                src={hollywood}
                                alt="Testimonial"
                                width={200}
                                height={250}
                                className="rounded"
                            />
                        </div>
                        {/* Right Side - Content */}
                        <div className='w-3/4'>
                            <p className="text-lg">
                                I recently used Toflin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with distant and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!
                            </p>
                            <h3 className="text-2xl font-semibold">Johnny Depp</h3>
                          
                        </div>
                    </div>


                </div>
                {/* Other 3 Small Cards */}
                <div className="lg:flex  justify-end space-x-6">
                    <Image src={hollywood3} alt="Johnny Depp" width={180} height={180} className="rounded-full" />
                    <Image src={hollywood2} alt="Chris Hemsworth" width={180} height={180} className="rounded-full" />
                    <Image src={hollywood4} alt="Dwayne Johnson" width={180} height={180} className="rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

