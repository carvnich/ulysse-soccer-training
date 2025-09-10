import { useState } from 'react';

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
										<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
										</svg>
									</div>
									<div>
										<p className="font-medium text-black">Address</p>
										<p className="text-black">123 Soccer Field Lane, Sports City, SC 12345</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
										</svg>
									</div>
									<div>
										<p className="font-medium text-black">Phone</p>
										<p className="text-black">(555) 123-GOAL</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
										</svg>
									</div>
									<div>
										<p className="font-medium text-black">Email</p>
										<p className="text-black">info@ustsoccer.com</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-black mb-4">Training Hours</h3>
							<div className="space-y-2 text-black">
								<p><span className="font-medium">Monday - Friday:</span> 4:00 PM - 8:00 PM</p>
								<p><span className="font-medium">Saturday:</span> 9:00 AM - 5:00 PM</p>
								<p><span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM</p>
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