'use client'
import { FormEvent } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

const Login = () => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get("username");
		const password = formData.get("password");

		const response = await fetch(`NEXT_PUBLIC_BACKEND_URL + /`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			redirect('/');
		} else {
			// Handle errors
		}
	}

	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" name="username" placeholder="Username" required />
					<input
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
					<button type="submit">Login</button>
				</form>
			</div>
		</>
	);
};

export default Login;
