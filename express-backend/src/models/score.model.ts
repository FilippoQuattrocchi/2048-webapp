import { prisma } from "../api/index";

const createScore = async (userId: number,value: number) => {
	return await prisma.scoreboard.create({
		data: {
			value,
            userId
		},
	});
};

const selectAllScore = async () => {
	return await prisma.scoreboard.findMany({
		orderBy: {value : 'desc'},
		take:20,
		include : {
			user:true
		}
	});
};
const getScore = async (id: number) => {
    return await prisma.scoreboard.findUnique({
        where: { id}
    });
};
const updateScore = async (id: number, value: number) => {
    return await prisma.scoreboard.update({
        where: {id},
        data: {
            value
        },
    })
};
const deleteScore = async (id: number) => {
    return await prisma.scoreboard.delete({
			where: { id }
		});
};

export default {
	createScore,
	getScore,
	selectAllScore,
	updateScore,
	deleteScore,
};
