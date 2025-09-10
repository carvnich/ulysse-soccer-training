import { useState } from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const ContactSection = () => {
	const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Add your form submission logic here
	};

	return (
		<div className="py-20">
			<div className="max-w-4xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-black mb-2">Get In Touch</h2>
					<p className="text-lg text-black">Ready to start your soccer journey? We'd love to hear from you.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

					{/* Contact Info */}
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<MdLocationOn className="w-3 h-3 text-white" />
									</div>
									<div>
										<p className="font-medium text-black">Address</p>
										<p className="text-black">93 McGuiness Drive, Brantford, ON N3T 6R6</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<MdPhone className="w-3 h-3 text-white" />
									</div>
									<div>
										<p className="font-medium text-black">Phone</p>
										<p className="text-black">(519) 865-5633</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<MdEmail className="w-3 h-3 text-white" />
									</div>
									<div>
										<p className="font-medium text-black">Email</p>
										<p className="text-black">coach@ulyssesoccertraining.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-white rounded-xl border-2 border-gray-100 p-8 shadow-lg">
						<h3 className="text-xl font-semibold text-black mb-6">Send Us a Message</h3>
						<div className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
								<input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
							</div>
							<input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
							<input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
							<textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"></textarea>
							<button onClick={handleSubmit} className="w-full px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">Send Message</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default ContactSection;