import React, { useState } from 'react';

const EmailInput = ({ className = '' }) => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Email submitted:', email);
		// Add your email submission logic here
		setEmail(''); // Clear input after submission
	};

	return (
		<div className={`flex flex-col lg:flex-row max-w-md ${className}`}>
			<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white text-black border border-gray-300 rounded-lg lg:rounded-l-lg lg:rounded-r-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2 lg:mb-0" required />
			<button onClick={handleSubmit} className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg lg:rounded-l-none lg:rounded-r-lg hover:bg-orange-600 transition-colors">
				Subscribe
			</button>
		</div>
	);
};

export default EmailInput;