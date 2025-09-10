import EmailInput from './EmailInput';
import heroOne from '../assets/hero/hero-1.jpg';
import heroTwo from '../assets/hero/hero-2.jpg';
import heroThree from '../assets/hero/hero-3.jpg';
import heroFour from '../assets/hero/hero-4.jpg';

const HeroSection = () => {
	const heroImages = [
		{ src: heroOne, alt: 'Soccer training field' },
		{ src: heroTwo, alt: 'Youth soccer players' },
		{ src: heroThree, alt: 'Soccer ball on field' },
		{ src: heroFour, alt: 'Soccer team celebration' }
	];

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
							{heroImages.slice(0, 2).map((image, index) => (
								<img key={index} src={image.src} alt={image.alt} className={"w-full h-48 object-cover rounded-lg shadow-lg"} />
							))}
						</div>
						<div className="space-y-4 mt-8">
							{heroImages.slice(2, 4).map((image, index) => (
								<img key={index + 2} src={image.src} alt={image.alt} className={"w-full h-48 object-cover rounded-lg shadow-lg"} />
							))}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default HeroSection;