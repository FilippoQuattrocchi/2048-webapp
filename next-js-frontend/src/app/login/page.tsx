import React, { useState } from "react";
import Login from "../components/Login";

export default function Home() {
	return (
		<div>
			<h1 className="text-center bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent my-9">
				Login
			</h1>
            <Login></Login>
		</div>
	);
}
