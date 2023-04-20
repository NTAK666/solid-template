import { FooterComponent } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { Outlet } from "@solidjs/router";

const RootLayout = ( { children }: any ) => {
	return (
		<div class='container mx-auto flex flex-col items-center space-y-5 py-20'>
			<NavbarComponent/>
			<Outlet/>
			<div class='sticky bottom-0 w-full bg-white py-10 text-center'>
				<FooterComponent/>
			</div>
		</div>
	);
}

export default RootLayout;
