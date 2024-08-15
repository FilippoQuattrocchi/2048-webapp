"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
	const [useUsername, setUsername] = useState("");
	const [usePassword, setPassword] = useState("");

    const router = useRouter();
	const handleUpdateUsername = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUsername(event.target.value);
	};

	const handleUpdatePassword = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setPassword(event.target.value);
	};

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const username = formData.get("username");
		const password = formData.get("password");

		const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) {
			const responseData = await response.json();
			console.log(responseData);
			localStorage.setItem('userId',responseData.id);
			router.push("/");
		} else {
			alert("Invalid credentials");
			// Handle errors
		}
	}

	return (
		<>
			<div>
				<form
					className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
					onSubmit={handleSubmit}
				>
					<div className="m-2">
						<input
							type="text"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							name="username"
							placeholder="Username"
							required
							value={useUsername}
							onChange={handleUpdateUsername}
						/>
					</div>
					<div className="m-2">
						<input
							type="password"
							name="password"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Password"
							required
							value={usePassword}
							onChange={handleUpdatePassword}
						/>
					</div>
					<div className="m-2">
						<button
							className="flex w-full justify-center rounded-md text-black cyan-bg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							type="submit"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
