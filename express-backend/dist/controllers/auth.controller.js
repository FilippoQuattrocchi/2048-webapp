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
const auth_model_1 = __importDefault(require("../models/auth.model"));
const health = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Auth health is good!");
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Auth health is good!");
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Auth health is good!");
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const exist = yield auth_model_1.default.login(username, password);
        if (exist) {
            const id = exist === null || exist === void 0 ? void 0 : exist.id;
            res.status(200).json({ id });
        }
        else
            res.status(401).send("Invalid");
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.default = {
    health,
    createUser,
    getUser,
    login,
};
