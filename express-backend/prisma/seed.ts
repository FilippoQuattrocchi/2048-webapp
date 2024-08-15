import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const user1 = await prisma.user.upsert({
		where: { email: "email@email.com" },
		update: {},
		create: {
			email: "email@email.com",
			name: "User",
			scores: {
				create: {
					value: 500
				},
			},
		},
	});
	const user2 = await prisma.user.upsert({
		where: { email: "email1@email.com" },
		update: {},
		create: {
			email: "email1@email.com",
			name: "Userone",
			scores: {
				create: {
					value: 1500,
				},
			},
		},
	});
	console.log({ user1, user2 });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
