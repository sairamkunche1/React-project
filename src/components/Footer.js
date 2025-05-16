
const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-800 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-400 w-10 h-10 rounded flex items-center justify-center text-white font-bold text-lg">
                E
              </div>
              <h1 className="text-2xl font-bold text-blue-400">EatEasy</h1>
            </div>
            <p className="text-sm mt-2">© 2025 EatEasy Limited</p>
          </div>
  
          {/* Company Info */}
          <div>
            <h2 className="font-bold mb-3">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>EatEasy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>EatEasy One</li>
              <li>EatEasy Instamart</li>
              <li>EatEasy Dineout</li>  
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h2 className="font-bold mb-3">Contact us</h2>
            <ul className="space-y-2 text-sm">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
  
            <h2 className="font-bold mt-6 mb-3">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
  
          {/* Available In */}
          <div>
            <h2 className="font-bold mb-3">Available in:</h2>
            <ul className="space-y-2 text-sm">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <select className="mt-3 px-3 py-1 border rounded text-sm">
              <option>Hyderbad</option>
              <option>Bangalore</option>
              <option>Vizag</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Kochi</option>
              <option>Pune</option>
              <option>Lucknow</option>
              <option>Jaipur</option>
            </select>
          </div>
  
          {/* Life at EatEasy + Social */}
          <div>
            <h2 className="font-bold mb-3">Life at EatEasy</h2>
            <ul className="space-y-2 text-sm">
              <li>Explore with EatEasy</li>
              <li>EatEasy News</li>
              <li>Snackables</li>
            </ul>
  
            <h2 className="font-bold mt-6 mb-3">Social Links</h2>
            <div className="flex gap-4 text-xl">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  