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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// src/index.js
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const score_route_1 = __importDefault(require("../routes/score.route"));
const auth_router_1 = __importDefault(require("../routes/auth.router"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
exports.prisma = new client_1.PrismaClient();
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//Cors settings
const corsOptions = {
    origin: process.env.NEXT_ORIGIN,
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        app.use(express_1.default.json());
        app.use((0, cors_1.default)(corsOptions));
        app.use("/api/v1/score", score_route_1.default);
        app.use("/api/v1/auth", auth_router_1.default);
        app.get("/", (req, res) => {
            res.send("Express + TypeScript Server");
        });
        app.all("*", (req, res) => {
            res.status(404).json({ error: `Route ${req.originalUrl}` });
        });
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.prisma.$connect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield exports.prisma.$disconnect();
    process.exit(1);
}));
module.exports = app;
