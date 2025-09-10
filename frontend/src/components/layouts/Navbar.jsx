import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import AuthModal from "../AuthModal";
import ProfileInfo from "../ProfileInfo";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
	const { user, isAuthModalOpen, openAuthModal, closeAuthModal } = useUser();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);
	const handleLoginClick = () => { openAuthModal(); closeMenu(); };

	return (
		<>
			<nav className="bg-white sticky top-0 z-30 shadow-sm">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-center justify-between h-20">

						{/* Logo */}
						<Link to="/" onClick={closeMenu} className="flex-shrink-0">
							<img src={logo} alt="UST Soccer Logo" className="h-16 w-auto" />
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							<Link to="/" className="text-black hover:text-orange-500 transition-colors font-medium">Home</Link>
							<Link to="/matches" className="text-black hover:text-orange-500 transition-colors font-medium">Matches</Link>
							{user ? (
								<ProfileInfo />
							) : (
								<button onClick={openAuthModal} className="text-black hover:text-orange-500 transition-colors font-medium">Login</button>
							)}
						</div>

						{/* Social Icons & Mobile Menu Button */}
						<div className="flex items-center">
							<div className="hidden md:flex items-center space-x-3">
								<a href="https://www.facebook.com/ulyssesoccertraining" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500 transition-colors" aria-label="Facebook">
									<FaFacebookF size={24} />
								</a>
								<a href="https://www.instagram.com/ulyssesoccertraining/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500 transition-colors" aria-label="Instagram">
									<FaInstagram size={24} />
								</a>
							</div>

							<button onClick={toggleMenu} className="md:hidden text-black hover:text-orange-500 transition-colors" aria-label="Toggle menu">
								{isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
							</button>
						</div>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className="md:hidden border-t border-gray-100 py-4 space-y-4">
							<Link to="/" onClick={closeMenu} className="block text-black hover:text-orange-500 transition-colors font-medium">Home</Link>
							<Link to="/matches" onClick={closeMenu} className="block text-black hover:text-orange-500 transition-colors font-medium">Matches</Link>

							{user ? (
								<div className="pt-2 border-t border-gray-100">
									<ProfileInfo />
								</div>
							) : (
								<button onClick={handleLoginClick} className="block text-black hover:text-orange-500 transition-colors font-medium text-left">Login</button>
							)}

							<div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
								<a href="https://www.facebook.com/ulyssesoccertraining" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500 transition-colors" aria-label="Facebook">
									<FaFacebookF size={18} />
								</a>
								<a href="https://www.instagram.com/ulyssesoccertraining/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500 transition-colors" aria-label="Instagram">
									<FaInstagram size={18} />
								</a>
							</div>
						</div>
					)}
				</div>
			</nav>

			<AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
		</>
	);
};

export default Navbar;