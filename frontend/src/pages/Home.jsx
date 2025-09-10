import AffiliatesSection from "../components/AffiliatesSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import GearSection from "../components/GearSection";
import HeroSection from "../components/HeroSection";
import RootLayout from "../components/layouts/RootLayout";
import ProgramSection from "../components/ProgramSection";
import SocialsSection from "../components/SocialsSection";
import StaffSpotlightSection from "../components/StaffSpotlightSection";

export const Home = () => {
	return (
		<RootLayout>
			<HeroSection />
			<GearSection />
			<ProgramSection />
			<StaffSpotlightSection />
			<SocialsSection />
			<AffiliatesSection />
			<ContactSection />
			<FooterSection />
		</RootLayout>
	);
};