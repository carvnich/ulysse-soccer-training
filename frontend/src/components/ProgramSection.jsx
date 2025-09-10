import { useState, useEffect } from 'react';

const ProgramSection = () => {
	const [programs, setPrograms] = useState([]);
	const [loading, setLoading] = useState(true);

	const getImagePath = (imagePath) => {
		return imagePath ? `/${imagePath}` : 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
	};

	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				const response = await fetch('http://localhost:8000/api/programs');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setPrograms(data);
			} catch (error) {
				console.error('Error fetching programs:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPrograms();
	}, []);

	if (loading) return <div className="py-20 text-center">Loading programs...</div>;

	return (
		<div className="py-20">
			<div className="max-w-7xl mx-auto px-6 space-y-20">
				{programs.map((program, index) => (
					<div key={program._id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
						<div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
							<img src={getImagePath(program.image) || 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'} alt={program.name} className="w-full h-80 object-fill rounded-xl shadow-lg" />
						</div>
						<div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
							<h3 className="text-5xl font-bold text-black mb-2">{program.name}</h3>
							<h4 className="text-2xl font-semibold text-black mb-6">{program.organization}</h4>
							<p className="text-lg text-black mb-8 leading-relaxed">{program.description}</p>
							<div className="flex gap-4">
								<button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">Learn More</button>
								<button className="px-8 py-3 border border-gray-300 text-black font-medium rounded-lg hover:bg-gray-50 transition-colors">View Details</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProgramSection;