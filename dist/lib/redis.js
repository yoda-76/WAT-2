"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
exports.client = new ioredis_1.default("rediss://default:AYVRAAIncDFhYWIyNWI1ZjAxMTQ0ZGNlOWU0OTI5NTY2ZGI5NmQxNHAxMzQxMjk@on-grouper-34129.upstash.io:6379");
// const userID = {
//   threadId: 1,
//   tradeBook: [],
//   tradeBookLength: 0,
//   active-child: [uid]
// };
//# sourceMappingURL=redis.js.map