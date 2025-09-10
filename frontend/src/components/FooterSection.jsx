import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import EmailInput from './EmailInput'; // Adjust path as needed

const FooterSection = () => {
	return (
		<footer className="bg-gray-100 py-16">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

					{/* Logo */}
					<div>
						<h3 className="text-2xl font-bold mb-4 text-black">UST Soccer</h3>
						<p className="text-black">Developing champions on and off the field since 2010.</p>
					</div>

					{/* Info Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-black">Information</h4>
						<ul className="space-y-2 text-black">
							<li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
							<li><a href="#" className="hover:text-orange-500 transition-colors">Our Staff</a></li>
							<li><a href="#" className="hover:text-orange-500 transition-colors">Facilities</a></li>
							<li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
							<li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
						</ul>
					</div>

					{/* Newsletter & Social */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-black">Stay Connected</h4>
						<EmailInput className="mb-4" />

						{/* Social Links */}
						<div className="flex gap-4">
							<a href="https://www.facebook.com/ulyssesoccertraining" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-orange-500 transition-colors text-black" aria-label="Facebook">
								<FaFacebookF size={18} />
							</a>
							<a href="https://www.instagram.com/ulyssesoccertraining/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-orange-500  transition-colors text-black" aria-label="Instagram">
								<FaInstagram size={18} />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-300 mt-12 pt-8 text-center text-black">
					<p>&copy; 2025 UST Soccer. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;