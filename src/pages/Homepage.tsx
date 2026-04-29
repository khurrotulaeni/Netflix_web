import { Button } from "../components/atoms/Button";
import Homepage_bakup from "../pages/Homepage_backup";

export default function Homepage() {
    return (
        <>
        <section
            className="relative w-full min-h-screen py-20 flex items-center justify-center bg-gray-950 text-center"
            style={{
               backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_icon.svg')",
                backgroundSize: "center",
            }}
            >

            {/* content */}
           <div className="relative w-full z-10 flex flex-col gap-4 items-center -translate-y-10">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    className="w-56 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
                />

                <p className="text-white text-lg text-center max-w-2xl">
                    <span className="font-bold text-5xl block opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
                        Unlimited movies, TV shows, and more
                    </span>

                    <span className="text-gray-300 block mt-3 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
                        Starts at IDR 54,000. Cancel anytime.
                    </span>
                </p>
                <p className="text-gray-300 text-sm mt-2">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
              <div className="w-full max-w-xl mt-6 flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 rounded-l-md bg-black/60 border border-gray-600 text-white"
                />
                <Button
                    label="Get Started"
                    variant="primary"
                    className="px-6 py-3 rounded-md"
                />
                </div>
            </div>
        </section>

            <div className="w-full height-[1px] bg-gray-800"></div>
        <Homepage_bakup/>
        </>
    );
}