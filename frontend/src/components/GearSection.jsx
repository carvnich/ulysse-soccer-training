import hoodie from '../assets/gear/hoodie.png';
import hat from '../assets/gear/hat.png';
import training from '../assets/gear/training.png';

const GearSection = () => {
	const gearItems = [
		{ id: 1, name: "Soccer Hoodies", image: hoodie, description: "Premium quality hoodies perfect for training sessions and casual wear on and off the field.", link: "https://manrocket.ca/collections/ulysse-academy-fc" },
		{ id: 2, name: "Training T-Shirts", image: training, description: "Lightweight, moisture-wicking shirts designed for peak performance during intense training.", link: "https://manrocket.ca/collections/ulysse-academy-fc" },
		{ id: 3, name: "Soccer Caps", image: hat, description: "Stylish ball caps to keep the sun out of your eyes while representing your team pride.", link: "https://manrocket.ca/collections/ulysse-academy-fc" }
	];

	return (
		<div className="bg-gray-100 py-20 relative overflow-hidden">
			<div className="absolute inset-0 flex justify-end">
				<img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Soccer Field Background" className="w-2/3 h-full object-cover opacity-20" />
			</div>
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-black mb-2">Soccer Gear</h2>
					<p className="text-lg text-black">Discover our collection of premium soccer apparel</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{gearItems.map((item) => (
						<a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
							<img src={item.image} alt={item.name} className="w-full h-48 object-contain rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300" />
							<h3 className="text-2xl font-bold mb-3">{item.name}</h3>
							<p className="text-black">{item.description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default GearSection;