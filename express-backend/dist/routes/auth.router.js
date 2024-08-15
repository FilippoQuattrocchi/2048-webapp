"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const router = express_1.default.Router();
router.get("/health", auth_controller_1.default.health);
router.post("/register", auth_controller_1.default.createUser);
router.post("/login", auth_controller_1.default.login);
router.get("/get/:id", auth_controller_1.default.getUser);
exports.default = router;
