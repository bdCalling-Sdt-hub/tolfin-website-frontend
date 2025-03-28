import ceo from "@/assets/hero/CEO.png";
import chef from "@/assets/hero/chef.png";
import manager from "@/assets/hero/maneger.png"
import Image from "next/image";


export default function TeamSection() {
    return (
        <div className=" w-full container min-h-screen  flex flex-col items-center justify-center py-12 ">
            <h1 className="text-white text-3xl font-bold mb-4">Meet The Team</h1>
            <p className="text-white text-sm font-bold mb-10">Managing Director/CEO management and leadership. <br /> A passionate team dedicated to innovation, creativity, and excellence.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center bg-[#154047] rounded-xl shadow-lg p-6 w-full max-w-[552px] h-[800px]">
                    <Image src={ceo} alt="Tolu Aribike" className="rounded-lg w-[500px] h-[500px] object-cover mb-4 overflow-hidden" />
                    <h2 className="text-2xl text-white font-semibold mb-2">Tolu Aribike</h2>
                    <p className="text-gray-500 text-xl mb-2">Managing Director/Ceo</p>
                </div>

                {/* Team Member 2 */}
                <div className="flex flex-col items-center bg-[#154047] rounded-xl shadow-lg p-6 w-full max-w-[552px] h-[800px]">
                    <Image src={chef} alt="Mustapha" className="rounded-lg w-[500px] h-[500px] object-cover mb-4" />
                    <h2 className="text-2xl text-white font-semibold mb-2">Mustapha</h2>
                    <p className="text-gray-500 text-xl mb-2">Chief Protocol Officer</p>
                </div>

                {/* Team Member 3 */}
                <div className="flex flex-col items-center bg-[#154047] rounded-xl shadow-lg p-6 w-full max-w-[552px] h-[800px]">
                    <Image src={manager} alt="Ogunlesi Oladipo" className="rounded-lg w-[500px] h-[500px] object-cover mb-4" />
                    <h2 className="text-2xl text-white font-semibold mb-2">Ogunlesi Oladipo</h2>
                    <p className="text-gray-500 text-xl mb-2">Business Development Manager</p>
                </div>
            </div>

        </div>
    );
}
