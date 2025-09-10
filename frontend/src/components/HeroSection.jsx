import React from 'react';
import EmailInput from './EmailInput'; // Adjust path as needed

const HeroSection = () => {
	return (
		<div className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

					{/* Left Side - Text Content */}
					<div className="text-center lg:text-left">
						<h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
							Fall 2025 Programming
						</h1>
						<h2 className="mt-6 text-3xl lg:text-5xl font-bold text-black">
							Now Available
						</h2>
						<p className="mt-6 text-lg text-black leading-relaxed">
							Join our premier soccer training camps designed to develop skills,
							build character, and create lasting friendships on and off the field.
						</p>

						{/* Email input component */}
						<EmailInput className="mt-8 mx-auto lg:mx-0" />
					</div>

					{/* Right Side - Images */}
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-4">
							<img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Soccer training field" className="w-full h-64 object-cover rounded-lg shadow-lg" />
							<img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Youth soccer players" className="w-full h-48 object-cover rounded-lg shadow-lg" />
						</div>
						<div className="space-y-4 mt-8">
							<img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Soccer ball on field" className="w-full h-48 object-cover rounded-lg shadow-lg" />
							<img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Soccer team celebration" className="w-full h-64 object-cover rounded-lg shadow-lg" />
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default HeroSection;