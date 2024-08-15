import LeaderboardPosition from "./LeaderboardPosition";

const Leaderboard = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/score/getall`,
		{
			method: "GET",
			headers: { "Content-Type": "application/json" },
		}
	);
	let data: any;
	try {
		data = await response.json();
	} catch (e) {
		console.log(e);
	}

	const userList = 0;
	const scoreboardElement = [];
	let position = 1;

	for (let userScore of data) {
		scoreboardElement.push(
			<LeaderboardPosition
				username={userScore.user.name}
				score={userScore.value}
				position={position}
				key={position}
			></LeaderboardPosition>
		);
		position += 1;
	}

	const fetchScores = "";

	return (
		<div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
			<div className="bg-gray-100 py-2 px-4">
				<h2 className="text-xl font-semibold text-gray-800">Top Users</h2>
			</div>
			<ul className="divide-y divide-gray-200">{scoreboardElement}</ul>
		</div>
	);
};
export default Leaderboard;
