import { useState } from 'react';
import alexb from '../assets/team/staff/alexb.jpg';
import alexferro from '../assets/team/staff/alexferro.jpg';
import andrew from '../assets/team/staff/andrew.jpg';
import brendon from '../assets/team/staff/brendon.jpg';
import brody from '../assets/team/staff/brody.jpg';
import connor from '../assets/team/staff/connor.jpg';
import corrado from '../assets/team/staff/corrado.jpg';
import dexter from '../assets/team/staff/dexter.jpg';
import jeff from '../assets/team/staff/jeff.jpg';
import joey from '../assets/team/staff/joey.jpg';
import marcus from '../assets/team/staff/marcus.jpg';
import matt from '../assets/team/staff/matt.jpg';
import megan from '../assets/team/staff/megan.jpg';
import michael from '../assets/team/staff/michael.jpg';
import mitch from '../assets/team/staff/mitch.jpg';
import pat from '../assets/team/staff/pat.jpg';
import sandra from '../assets/team/staff/sandra.jpg';
import tenn from '../assets/team/staff/tenn.jpg';

import dexterPlayer from '../assets/team/player/dexter.png';
import hope from '../assets/team/player/hope.png';
import jacek from '../assets/team/player/jacek.png';
import lisa from '../assets/team/player/lisa.png';
import misik from '../assets/team/player/misik.png';
import tait from '../assets/team/player/tait.png';


const StaffSpotlightSection = () => {
	const [activeTab, setActiveTab] = useState('staff');
	const [activeCategory, setActiveCategory] = useState('all');

	const staffData = {
		coach: [
			{ name: "Coach Brendon", role: "Head Coach", image: brendon, bio: "For 12 years Coach Brendon has been mentoring players in the game of soccer. He has worked within several soccer academies in southwestern Ontario. After spending two years in England, coach Brendon is back to share his knowledge and expertise with local Brantford players.", availability: "1 on 1s Available - Sundays and Wednesdays" },
			{ name: "Coach Tenn", role: "Head Coach", image: tenn, bio: "Coach Tenn is an OG legend here at UST. He has had a hand in developing both players and coaches throughout the community. His philosophy towards the game has inspired many young athletes to improve their game and better their lives.", availability: "1 on 1s Available" },
			{ name: "Coach Dexter", role: "Coach", image: dexter, bio: "Coach Dexter is a semi-pro player with Miami Academy. During his off-season he returns to Brantford to join our summer camps. He shares his experience with the local youth. Check out his profile on our local player spotlight.", availability: "Unavailable - Training in Miami, FL" },
			{ name: "Coach Mitch", role: "Coach", image: mitch, bio: "Coach Mitch grew up playing soccer in Brantford. He is a proud product of Brantford Galaxy and UST soccer. Recently joined Victory FC men's league team. Has an arsenal of outrageous juggling moves to share. Ask him about the Engelfield Hurricane!", availability: "Unavailable - Attending University of Waterloo" },
			{ name: "Coach Corrado", role: "Coach", image: corrado, bio: "Coach Corrado is an enthusiastic young coach here at UST. As a player he has had great success. Won championships with St. Johns Collegiate and lifted the Grand River Grail at our Sobeys 6v6 tournament.", availability: "Unavailable - Attending Western University" },
			{ name: "Coach Andrew", role: "Coach", image: andrew, bio: "Coach Andrew is an experienced staff member here at UST. He enjoys hyping up kids at soccer camp. From Jailbreaker to Swedish Fish he has 100s of fun activities that develop excellent fundamentals for youth players.", availability: "Unavailable - Attending University of Waterloo" },
			{ name: "Coach Pat", role: "Coach", image: pat, bio: "Coach Pat has a wealth of experience and ability to share. Scoring goals and taking names in the BMSL. Lighting it up for the Brantford Galaxy men's team. Players learn something new when Pat is around.", availability: "1 on 1s Available" },
			{ name: "Coach Megan", role: "Coach", image: megan, bio: "Coach Megan loves soccer and has been playing for 6 years. She has played forward, midfield and defence. Highlights include winning the SRSL league cup in 2009 and winning BCSAA in 2010 with the BCI Mustangs.", availability: "Contact regarding availability" },
			{ name: "Coach Michael", role: "Coach", image: michael, bio: "Guru Mikey is the real brain here at UST. His understanding of the game and attention to detail surpass most. Learn from him whenever possible.", availability: "Unavailable - Attending Algoma U" },
			{ name: "Coach Marcus", role: "Junior Coach", image: marcus, bio: "An outstanding player with the Brantford Galaxy U17 team. Coach Marcus has great skills to match his personality. Cheer him on while playing for Assumption, Brantford Galaxy or Victory FC.", availability: "Contact regarding availability" },
			{ name: "Coach Joey", role: "Junior Coach", image: joey, bio: "Coach Joey has grown up playing soccer through Brantford Galaxy soccer club. He now spends his time in the summer giving back by coaching in the Brantford Galaxy House League program.", availability: "Contact regarding availability" }
		],
		goalkeeping: [
			{ name: "Coach Connor", role: "Goalkeeper Coach", image: connor, bio: "Coach Connor cheers for the worst team... Arsenal! But we still love him. As a goalkeeper for Victory FC, Connor racks up clean sheets in the Brantford Men's Soccer League.", availability: "1 on 1s Available Wednesdays" },
			{ name: "Coach Matt", role: "Goalkeeper Coach", image: matt, bio: "Coach Matt is an outstanding teacher and coach. Each spring you can find him on the side lines of the Assumption College lions. You can also look for him to feature in our house league and small group training sessions whenever a goalkeeping coach is required.", availability: "Contact regarding availability" },
			{ name: "Coach Alex Borsos", role: "Goalkeeper Coach", image: alexb, bio: "Coach Alex has worked hard to establish a reputation for excellence in goalkeeping. If you want to take your game to the next level contact him for development.", availability: "Contact regarding availability" },
			{ name: "Coach Jeff", role: "Goalkeeper Coach", image: jeff, bio: "Unbelievable goalkeeping ability. Just try scoring a PK on him. Coach Jeff features at our Christmas and March Break camps as well as GK programs.", availability: "Contact regarding availability" }
		],
		speed: [
			{ name: "Coach Brody", role: "Speed Development", image: brody, bio: "Want to develop speed? Coach Brody is on staff to workshop player movements and running mechanics. Specialized training in acceleration, agility, and sport-specific movement patterns.", availability: "Contact regarding availability" }
		],
		director: [
			{ name: "Alex Ferro", role: "Tournament Director", image: alexferro, bio: "Our new tournament director here at UST. Keep your eyes open for a tournament every Christmas and every Summer.", availability: "usoccertournaments@gmail.com" }
		],
		registrar: [
			{ name: "Sandra", role: "Registrar", image: sandra, bio: "Sandra coordinates our programs here at UST. She is your contact for anything program related. Would love to hear from you with any questions, concerns, or feedback that you have!", availability: "registrar@ulyssesoccertraining.com" }
		]
	};

	const playerData = [
		{ name: "Zach Tait", position: "Midfielder", age: 28, height: "6'1\"", jersey: "11 & 4", image: tait, achievement: "CSL Champions 2010, OYSL League Champions (3 consecutive years)", bio: "Started at age 4 in timbits soccer. Played for Hamilton Sparta, London City, Brantford Galaxy, Team Ontario, and U21 Canadian National Team. Favourite team: Manchester United. Best memory: Winning the CSL Championship." },
		{ name: "Lisa Bijman", position: "Midfielder", age: 24, height: "5'7\"", jersey: "5", image: lisa, achievement: "NCAA D1 University of Maine, AE Women's Soccer Scholar-Athlete of the Year 2014", bio: "Physician Assistant graduate 2018. Played for Burlington Soccer Academy and University of Maine. AE First-Team 2013. Favourite team: Team Canada. Best memory: Scoring the tying goal in senior year conference semi's." },
		{ name: "Jacek Przednowek", position: "Forward", age: 31, height: "6'", jersey: "13", image: jacek, achievement: "Milwaukee Wave (MISL), Canadian National Beach Soccer Team", bio: "Born in Poland, moved to Canada in 1992. Police Officer. Played for Drexel University, Robert Morris University, and Milwaukee Wave professional indoor soccer. Favourite team: FC Barcelona. Best memory: Scoring hat trick vs Monmouth in conference championship, tournament MVP." },
		{ name: "Patryk Misik", position: "Midfielder", age: 22, height: "5'8\"", jersey: "6", image: misik, achievement: "Professional player in Spain (SD Órdenes), Canadian Youth International", bio: "Born in Brantford. Played for Brantford Galaxy, WKS Śląsk Wrocław (Poland), Ottawa Fury FC, Raków Częstochowa. Called up to U20 and U23 Canadian National Team. Favourite team: FC Barcelona. Best memory: Scoring first international goal against France at 2013 Francophone Games." },
		{ name: "Hope Baker", position: "Centre Back", age: 13, height: "5'5\"", jersey: "5", image: hope, achievement: "OPDL Hamilton United U13, Published author and 'A' student", bio: "Playing soccer since age 5. Trains 5 days per week. Top goal scorer scoring from 30 yards. Coached by Billy McKenna with 30 years experience. Favourite team: Barcelona FC. Best memory: Winning gold in Chili, NY tournament beating American teams." },
		{ name: "Dexter Hamilton", position: "Striker", age: 25, height: "5'7\"", jersey: "16/8", image: dexterPlayer, achievement: "Miami Soccer Academy, Rookie of the year Elements FC", bio: "Moved to Canada at age 4. Started travel soccer at 10 with BICS. Played in Trinidad with Elements FC, then Brantford Galaxy for 3-4 seasons as starter/captain. Favourite team: Manchester City. Best memory: Scoring first professional hat trick." }
	];

	const categories = {
		all: "All Staff",
		coach: "Coaches",
		goalkeeping: "Goalkeeping",
		speed: "Speed Development",
		director: "Tournament Director",
		registrar: "Registrar"
	};

	const getAllStaff = () => {
		return [
			...staffData.coach,
			...staffData.goalkeeping,
			...staffData.speed,
			...staffData.director,
			...staffData.registrar
		];
	};

	const currentData = activeTab === 'staff' ? (activeCategory === 'all' ? getAllStaff() : staffData[activeCategory]) : playerData;

	return (
		<div className="bg-gray-100 py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<p className="text-lg text-black mb-2">Meet Our Team</p>
					<h2 className="text-4xl font-bold text-black">Excellence in Action</h2>
				</div>
				<div className="flex justify-center mb-8">
					<div className="bg-white rounded-lg p-1 shadow-lg">
						<button onClick={() => setActiveTab('staff')} className={`px-8 py-3 rounded-lg font-medium transition-colors ${activeTab === 'staff' ? 'bg-orange-500 text-white' : 'text-black hover:bg-gray-50'}`}>UST Staff</button>
						<button onClick={() => setActiveTab('players')} className={`px-8 py-3 rounded-lg font-medium transition-colors ${activeTab === 'players' ? 'bg-orange-500 text-white' : 'text-black hover:bg-gray-50'}`}>Player Spotlight</button>
					</div>
				</div>
				{activeTab === 'staff' && (
					<div className="flex justify-center mb-12">
						<div className="bg-white rounded-lg p-1 shadow-lg flex flex-wrap gap-1">
							{Object.entries(categories).map(([key, label]) => (
								<button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${activeCategory === key ? 'bg-orange-500 text-white' : 'text-black hover:bg-gray-50'}`}>{label}</button>
							))}
						</div>
					</div>
				)}
				<div className="overflow-x-auto">
					<div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
						{currentData.map((person, index) => (
							<div key={index} className="bg-white rounded-xl shadow-lg w-96 flex-shrink-0 relative overflow-hidden group">
								<div className="p-8">
									<img src={person.image} alt={person.name} className="w-full h-64 object-contain rounded-lg mb-6" />
									<h3 className="text-xl font-bold text-black mb-2">{person.name}</h3>
									<p className="text-orange-500 font-medium mb-4">{activeTab === 'staff' ? person.role : person.position}</p>
									{activeTab === 'players' && (
										<div className="text-sm text-gray-600 mb-4">
											<p>Age: {person.age} | Height: {person.height} | Jersey: {person.jersey}</p>
											<p className="mt-2 font-medium">{person.achievement}</p>
										</div>
									)}
									{activeTab === 'staff' && (
										<div className="text-sm">
											{person.availability}
										</div>
									)}
								</div>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-xl"></div>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
									<div className="text-white p-8 text-center">
										<p className="text-md leading-relaxed">{person.bio}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StaffSpotlightSection;