"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../api/index");
const createScore = (userId, value) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.prisma.scoreboard.create({
        data: {
            value,
            userId,
        },
    });
});
const selectAllScore = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.prisma.scoreboard.findMany({
        orderBy: { value: "desc" },
        take: 20,
        include: {
            user: true,
        },
    });
});
const getScore = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.prisma.scoreboard.findUnique({
        where: { id },
    });
});
const updateScore = (userId, value) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.prisma.scoreboard.upsert({
        create: {
            userId: userId,
            value: value
        },
        where: { userId: userId },
        update: {
            value: value,
        },
    });
});
const deleteScore = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.prisma.scoreboard.delete({
        where: { id },
    });
});
exports.default = {
    createScore,
    getScore,
    selectAllScore,
    updateScore,
    deleteScore,
};
