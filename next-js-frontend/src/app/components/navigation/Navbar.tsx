"use client";
import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {

	const [useLog, setLog] = useState<string | null>(null);

	useEffect(() => {
		setLog(localStorage.getItem("userId"));
	}, []);

	return (
		<>
			<div className="w-full h-20 cyan-bg sticky top-0">
				<div className="container mx-auto px-4 h-full">
					<div className="flex justify-between items-center h-full">
						<Logo />
						<ul className="hidden md:flex gap-x-6 text-xl text-black">
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
						</ul>
						{useLog ? (
							<></>
						) : (
							<Link href="/login">
								<LoginButton />
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
