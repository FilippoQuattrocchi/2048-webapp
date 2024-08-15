import { prisma } from "../api/index";

const createUser = async (userId: number, value: number) => {
	return await prisma.scoreboard.create({
		data: {
			value,
			userId,
		},
	});
};

const login = async (name: string, password: string) => {
    return await prisma.user.findFirst({
        where: ({
            AND: [{
                name,
                password
            }]
        })
    })
};

export default {
	createUser,
	login,
};
