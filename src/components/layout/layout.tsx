import { type ReactNode } from "react";
import Header from "./header/header";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main className="min-h-screen">{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
