import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const user1 = await prisma.user.upsert({
		where: { email: "Filippo@email.com" },
		update: {},
		create: {
			email: "Filippo@email.com",
			name: "Filippo",
			scores: {
				create: {
					value: 5000,
				},
			},
		},
	});
	const user2 = await prisma.user.upsert({
		where: { email: "Sujin@email.com" },
		update: {},
		create: {
			email: "Sujin@email.com",
			name: "Sujin",
			scores: {
				create: {
					value: 1500,
				},
			},
		},
	});

	const user3 = await prisma.user.upsert({
		where: { email: "Spencer@email.com" },
		update: {},
		create: {
			email: "Spencer@email.com",
			name: "Spencer",
			scores: {
				create: {
					value: 1500,
				},
			},
		},
	});
	const user4 = await prisma.user.upsert({
		where: { email: "Eiichi@email.com" },
		update: {},
		create: {
			email: "Eiichi@email.com",
			name: "Eiichi",
			scores: {
				create: {
					value: 1600,
				},
			},
		},
	});
	const user5 = await prisma.user.upsert({
		where: { email: "Brandon@email.com" },
		update: {},
		create: {
			email: "Brandon@email.com",
			name: "Brandon",
			scores: {
				create: {
					value: 1700,
				},
			},
		},
	});
	const user6 = await prisma.user.upsert({
		where: { email: "Gustavo@email.com" },
		update: {},
		create: {
			email: "Gustavo@email.com",
			name: "Gustavo",
			scores: {
				create: {
					value: 2000,
				},
			},
		},
	});

	const user7 = await prisma.user.upsert({
		where: { email: "Lisa@email.com" },
		update: {},
		create: {
			email: "Lisa@email.com",
			name: "Lisa",
			scores: {
				create: {
					value: 800,
				},
			},
		},
	});

	const user8 = await prisma.user.upsert({
		where: { email: "Robert@email.com" },
		update: {},
		create: {
			email: "Robert@email.com",
			name: "Robert",
			scores: {
				create: {
					value: 900,
				},
			},
		},
	});
	const user9 = await prisma.user.upsert({
		where: { email: "Karl@email.com" },
		update: {},
		create: {
			email: "Karl@email.com",
			name: "Karl",
			scores: {
				create: {
					value: 900,
				},
			},
		},
	});
	const user10 = await prisma.user.upsert({
		where: { email: "Brian@email.com" },
		update: {},
		create: {
			email: "Brian@email.com",
			name: "Brian",
			scores: {
				create: {
					value: 900,
				},
			},
		},
	});
	const user11 = await prisma.user.upsert({
		where: {
			email: "Joao@email.com",
		},
		update: {},
		create: {
			email: "Joao@email.com",
			name: "Joao",
			scores: {
				create: {
					value: 900,
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
