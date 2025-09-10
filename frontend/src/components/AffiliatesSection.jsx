import bmslLogo from '../assets/affiliates/bmsl_logo.png';
import galaxy from '../assets/affiliates/brantGalaxyLogo.png';
import grs from '../assets/affiliates/GRS_logo.png';
import manRocket from '../assets/affiliates/man_rocket_logo.png';
import nuFloat from '../assets/affiliates/nu_float_logo.png';
import omg from '../assets/affiliates/omg_logo.png';
import parisFC from '../assets/affiliates/parisFC_logo.jpg';
import pureImpact from '../assets/affiliates/pure_impact_logo.png';
import victoryFC from '../assets/affiliates/victoryFC_logo.png';
import zBRFT from '../assets/affiliates/zBRFT_logo.png';

const AffiliatesSection = () => {
	const affiliates = [
		{ name: "BMSL", logo: bmslLogo, website: "https://www.instagram.com/bmslofficial/" },
		{ name: "United Against Hate", logo: galaxy, website: "https://www.uniteagainsthate.ca/" },
		{ name: "Grand River Soccer", logo: grs, website: "https://grandriversoccer.com/" },
		{ name: "Man Rocket", logo: manRocket, website: "https://manrocket.ca/collections/ulysse-academy-fc" },
		{ name: "Nu-u Float Studio & Health Bar", logo: nuFloat, website: "https://www.nu-ufloat.com/" },
		{ name: "Oh My Goodness! Frozen Treats", logo: omg, website: "https://omgfrozentreats.square.site/" },
		{ name: "Paris FC", logo: parisFC, website: "https://www.parisfc.ca/programs" },
		{ name: "Pure Impact Athletics", logo: pureImpact, website: "https://pureimpactathletics.ca/" },
		{ name: "Victory FC", logo: victoryFC, website: "https://www.instagram.com/victoryfcbrantford/" },
		{ name: "zBRFT", logo: zBRFT, website: "https://www.zbtfd.ca/" }
	];

	return (
		<div className="bg-gray-100 py-8 sm:py-12 lg:py-16 border-t border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8 sm:mb-10 lg:mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Our Partners</h2>
					<p className="text-base sm:text-lg lg:text-xl">Trusted by leading sports brands worldwide</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-items-center">
					{affiliates.map((affiliate, index) => (
						<a key={index} href={affiliate.website} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center" aria-label={`Visit ${affiliate.name}`}>
							<div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-34 lg:h-34 xl:w-36 xl:h-36 rounded-full shadow-lg overflow-hidden bg-white border-3 border-gray-100">
								<img src={affiliate.logo} alt={`${affiliate.name} logo`} className="w-full h-full object-cover" />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default AffiliatesSection;