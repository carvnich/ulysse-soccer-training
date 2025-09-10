import one from '../assets/socials/1.jpg';
import two from '../assets/socials/2.jpg';
import three from '../assets/socials/3.jpg';
import four from '../assets/socials/4.jpg';
import five from '../assets/socials/5.jpg';
import six from '../assets/socials/6.jpg';

const SocialsSection = () => {
	const instagramImages = [one, two, three, four, five, six];

	return (
		<div className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-black mb-2">Follow Our Journey</h2>
					<p className="text-lg text-black">See the latest from our training camps on Instagram</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{instagramImages.map((image, index) => (
						<div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg">
							<img src={image} alt={`Instagram post ${index + 1}`} className="w-full h-full object-fit" />
						</div>
					))}
				</div>

				<div className="text-center mt-8">
					<button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">View More on Instagram</button>
				</div>
			</div>
		</div>
	);
};

export default SocialsSection;