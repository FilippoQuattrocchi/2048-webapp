import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {


	return (
		<>
			<div className="w-full h-20 bg-emerald-800 sticky top-0">
				<div className="container mx-auto px-4 h-full">
					<div className="flex justify-between items-center h-full">
						<Logo />
						<ul className="hidden md:flex gap-x-6 text-white">
							<li>
								<Link href="/">
									<p>Play</p>
								</Link>
							</li>
							<li>
								<Link href="/leaderboard">
									<p>Leaderboard</p>
								</Link>
							</li>
							<li>
								<Link href="/contacts">
									<p>Contacts</p>
								</Link>
							</li>
						</ul>
						<Link href="/login">
							<LoginButton />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
