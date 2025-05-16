import UserClass from "./UserClass"
 

const About = () => {
    return (
        <div className="about-us bg-white text-gray-800 min-h-screen">
            <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-indigo-100 to-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 font-serif">
                        About <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                        EatEasy
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl italic mx-auto">
                    "Delivering joy, not just food"
                    </p>
                </div>
            </section>


                {/* 1. Who We Are */}
                <div className="group py-11 px-4 sm:px-8 md:px-16 text-center  ">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6 transition duration-300 group-hover:from-blue-700 group-hover:to-cyan-700">
                            Who We Are
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 group-hover:w-32 transition-all duration-500"></div>
                            
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            <span className="font-semibold text-blue-600">EatEasy</span> is revolutionizing food technology from our home in <span className="font-medium text-gray-800">Hyderabad, Telangana (533437)</span>. We're more than a delivery platform - we're culinary matchmakers, connecting food lovers with the perfect dining experiences through intelligent technology and heartfelt service.
                            </p>
                            
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6">
                            Every order carries our promise: to honor Hyderabad's rich food heritage while innovating for tomorrow's tastes. Because great meals should be effortless, reliable, and always delightful.
                            </p>
                        </div>
                </div>

                {/* 2. Our Journey */}
                <section className="py-10 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-white to-purple-50 hover:to-purple-200 transition duration-500">
                        <div className="max-w-3xl mx-auto">
                            {/* Header with gradient text */}
                            <div className="text-center mb-12 group">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-3 group-hover:from-purple-700 group-hover:to-indigo-700 transition duration-500">
                                Our  Journey
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto group-hover:w-28 transition-all duration-500"></div>
                            </div>

                            {/* Two-column layout */}
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Story text */}
                                <div className="md:w-1/2">
                                    <p className="text-gray-700 mb-5 leading-relaxed hover:text-gray-800 transition duration-300">
                                    In <span className="font-semibold text-black-600">2020</span>, while working late nights in Hyderabad's tech parks, our founder envisioned a food delivery service that would <span className="">deliver not just meals, but happiness</span>. EatEasy was born from this simple yet powerful idea.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition duration-300">
                                    From our first <span>10 neighborhood deliveries</span> to serving across <span className="font-semibold text-black-600">200+ cities</span>, we've stayed true to our Hyderabad roots - where every customer is treated like family.
                                    </p>
                                </div>

                                {/* Milestones with gradient borders */}
                                <div className="md:w-1/2 space-y-6">
                                    {[
                                    { 
                                        year: "2020", 
                                        border: "border-l-4 border-purple-400", 
                                        bg: "hover:bg-gradient-to-r hover:from-purple-50 hover:to-white",
                                        text: "Launched in Hyderabad with 10 passionate restaurant partners",
                                        color: "text-purple-600"
                                    },
                                    { 
                                        year: "2024", 
                                        border: "border-l-4 border-pink-300", 
                                        bg: "hover:bg-gradient-to-r hover:from-pink-50 hover:to-white",
                                        text: "Expanded to 50 cities with our 100% on-time guarantee",
                                        color: "text-pink-600"
                                    },
                                    { 
                                        year: "Today", 
                                        border: "border-l-4 border-indigo-300", 
                                        bg: "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white",
                                        text: "Serving 200+ cities with 4.5/5 customer ratings",
                                        color: "text-indigo-600"
                                    }
                                    ].map((item, index) => (
                                    <div 
                                        key={index}
                                        className={`${item.border} ${item.bg} pl-5 py-2 hover:translate-x-1 transition duration-300 rounded-r-lg`}
                                    >
                                        <h3 className={`text-lg font-semibold ${item.color} mb-1`}>{item.year}</h3>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                    ))}
                                </div>
                            </div>

                        {/* Founder quote with gradient border */}
                            <div className="mt-12 text-center group border-2 border-transparent hover:border-gradient-to-r hover:from-purple-200 hover:to-pink-200 transition duration-500 rounded-lg p-4">
                                <p className="text-gray-600 italic max-w-2xl mx-auto group-hover:text-gray-700 transition duration-300">
                                    "We don't just deliver food - we deliver <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">memories and moments</span>."
                                </p>
                                <p className="mt-2 font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition duration-500">— The EatEasy Family</p>
                            </div>
                        </div>
                </section>

                {/* 3. What Makes Us Unique */}
                <section className="group py-16 px-4 sm:px-8 md:px-16 text-center bg-white hover:bg-blue-50 transition duration-300 border-b border-gray-300">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-600 font-[cursive] mb-6 transition duration-300 group-hover:scale-105">
                    What Makes Us Unique
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-800 tracking-wide font-sans mb-10">
                    <span className="block text-balance">
                    Our lightning-fast delivery, real-time order tracking, and curated restaurant partnerships make EatEasy stand out.
                    Whether you’re craving local biryani or international cuisine, we make it available with just a few taps.
                    </span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="p-6 bg-white border border-teal-300 rounded-xl shadow hover:shadow-xl transition duration-300 hover:bg-teal-50">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="font-semibold text-lg text-teal-800">Instant Delivery</h3>
                    </div>
                    <div className="p-6 bg-white border border-teal-300 rounded-xl shadow hover:shadow-xl transition duration-300 hover:bg-teal-50">
                    <div className="text-4xl mb-2">📍</div>
                    <h3 className="font-semibold text-lg text-teal-800">Live Order Tracking</h3>
                    </div>
                    <div className="p-6 bg-white border border-teal-300 rounded-xl shadow hover:shadow-xl transition duration-300 hover:bg-teal-50">
                    <div className="text-4xl mb-2">🍽️</div>
                    <h3 className="font-semibold text-lg text-teal-800">Exclusive Restaurant Partners</h3>
                    </div>
                </div>
                </section>

                {/* 4. Our Commitment */}

                <section className="group py-10 px-2 sm:px-8 md:px-10 text-center bg-gradient-to-br from-gray-50 to-pink-50 hover:from-pink-50 hover:to-pink-100 transition-all duration-500   mx-auto shadow-lg  hover:shadow-xl border border-gray-200 hover:border-pink-300">
                    <div className="space-y-8">
                        {/* Animated title with decorative elements */}
                        <div className="relative inline-block">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 font-[Poppins] mb-4 transition-all duration-500 group-hover:scale-[1.02]">
                            Our Commitment
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full group-hover:w-32 transition-all duration-500"></div>
                        </div>

                        {/* Enhanced content with icon grid */}
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium mb-8">
                                We're committed to providing a <span className="font-semibold text-pink-600">trustworthy</span>, <span className="font-semibold text-pink-600">user-friendly</span> service that respects your time and taste.
                            </p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                                {[
                                { icon: "🚀", title: "Lightning Fast", desc: "30-min delivery guarantee" },
                                { icon: "🔒", title: "100% Secure", desc: "Safe payments & data" },
                                { icon: "🌱", title: "Eco-Friendly", desc: "Sustainable packaging" },
                                { icon: "❤️", title: "Local Love", desc: "Supporting community" }
                                ].map((item, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 hover:border-pink-200 transition-all hover:scale-105 shadow-sm group-hover:shadow-md">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <h3 className="font-bold text-pink-700">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            {/* Safety and hygine */}

            <section className="group py-7 px-4 sm:px-8 lg:px-9 bg-white hover:bg-green-50 transition-all duration-300 border-t border-b border-gray-200 w-full">
                <div className="max-w-7xl mx-auto">
                        {/* Minimalist title with underline animation */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-[Poppins] mb-4 ">
                                Safety & Hygiene Standards
                            </h2>
                           <div className="w-24 h-1 bg-green-500 mx-auto group-hover:w-32 transition-all duration-500"></div>
                        </div>

                        {/* Expanded content with restaurant hygiene focus */}
                        <div className="grid md:grid-cols-2 gap-12 text-left">
                           {/* Restaurant Standards */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-green-700 border-l-4 border-green-500 pl-4">
                            Restaurant Partner Protocols
                            </h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                    <span><strong>Certified kitchens:</strong> All partner restaurants pass rigorous hygiene audits with 100+ checklist points</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                    <span><strong>Staff training:</strong> Mandatory food safety certification for all handlers (FSSAI compliant)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                    <span><strong>Temperature control:</strong> Hot meals maintained above 60°C, cold items below 5°C during prep</span>
                                </li>
                            </ul>
                        </div>

                        {/* Delivery Standards */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-green-700 border-l-4 border-green-500 pl-4">
                            Delivery Assurance
                            </h3>
                            <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                <span><strong>Sanitized packaging:</strong> All containers sealed with tamper-evident labels</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                <span><strong>Contactless delivery:</strong> Optional no-contact dropoff with photo confirmation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 h-2 w-2 bg-green-500 rounded-full"></span>
                                <span><strong>Real-time monitoring:</strong> Delivery partners undergo daily health checks and temperature screening</span>
                            </li>
                            </ul>
                        </div>
                        </div>

                            {/* Compliance badge */}
                            <div className="mt-5 text-center border-t border-gray-100 pt-12">
                                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    We exceed <strong className="text-black-600">FSSAI guidelines</strong> and conduct surprise inspections at partner restaurants. 
                                    Every meal is tracked from kitchen to doorstep with our <span className="font-medium">Hygiene First Guarantee</span>.
                                </p>
                            </div>
                </div>
            </section>


            {/* Reviews */}
         <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className=" ">
                        What Our customers Say
                    </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">R</div>
                        <div className="ml-4">
                            <h4 className="font-semibold">Rahul M.</h4>
                            <p className="text-sm text-gray-500">Hyderabad • Regular User</p>
                        </div>
                        </div>
                        <p className="italic text-gray-700">"Never waited more than 30 minutes, even during rains. Their delivery partners are the most courteous I've encountered."</p>
                        <div className="mt-4 flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        ))}
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">S</div>
                        <div className="ml-4">
                            <h4 className="font-semibold">Sneha K.</h4>
                            <p className="text-sm text-gray-500">Secunderabad • Food Blogger</p>
                        </div>
                        </div>
                        <p className="italic text-gray-700">"The app's restaurant recommendations are spot-on! Discovered so many hidden gems through EatEasy."</p>
                        <div className="mt-4 flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        ))}
                        </div>
                    </div>

                    {/* Testimonial 3 - New */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-blue-200">
                        <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">A</div>
                        <div className="ml-4">
                            <h4 className="font-semibold">Arjun T.</h4>
                            <p className="text-sm text-gray-500">Gachibowli • Office Worker</p>
                        </div>
                        </div>
                        <p className="italic text-gray-700">"Their lunch combos saved me during busy workdays. Always fresh and exactly as shown in the app."</p>
                        <div className="mt-4 flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        ))}
                        <svg className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
         </section>

            {/* Footer */} 
            {/* <footer className="bg-indigo-600 text-white text-center py-6">
                <p>© {new Date().getFullYear()} EatEasy — Hyderabad’s Trusted Food Partner</p>
            </footer> */}
        </div>
    );
};





export default About