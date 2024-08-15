type Props = {
	username: string;
	score: number;
	position: number;
};

const LeaderboardPosition = async ({ username, score, position }: Props) => {
	return (
		<li className="flex items-center py-4 px-6">
			<span className="text-gray-700 text-lg font-medium mr-4">
				{position}.
			</span>
			<img
				className="w-12 h-12 rounded-full object-cover mr-4"
				src="https://randomuser.me/api/portraits/women/72.jpg"
				alt="User avatar"
				width={40}
			></img>
			<div className="flex-1">
				<h3 className="text-lg font-medium text-gray-800">{username}</h3>
				<p className="text-gray-600 text-base">{score} points</p>
			</div>
		</li>
	);
};
export default LeaderboardPosition;
