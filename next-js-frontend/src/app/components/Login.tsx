"use client";
import { FormEvent, useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { redirect } from "next/navigation";
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
			router.push("/");
		} else {
			alert("Invalid credentials");
			// Handle errors
		}
	}

	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="text-black"
						name="username"
						placeholder="Username"
						required
						value={useUsername}
						onChange={handleUpdateUsername}
					/>
					<input
						type="password"
						name="password"
						className="text-black"
						placeholder="Password"
						required
						value={usePassword}
						onChange={handleUpdatePassword}
					/>
					<button type="submit">Login</button>
				</form>
			</div>
		</>
	);
};

export default Login;
