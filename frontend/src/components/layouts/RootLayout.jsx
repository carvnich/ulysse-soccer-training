import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
	return (
		<div className="">
			<Navbar />
			<div className="">{children}</div>
		</div>
	);
};

export default RootLayout;