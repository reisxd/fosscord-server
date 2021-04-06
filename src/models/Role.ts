import { Schema, model, Types, Document } from "mongoose";
import db from "../util/Database";

export interface Role {
	id: string;
	guild_id: string;
	color: number;
	hoist: boolean;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: bigint;
	position: number;
	tags?: {
		bot_id?: string;
	};
}

export interface RoleDocument extends Document, Role {
	id: string;
}

export const RoleSchema = new Schema({
	id: String,
	guild_id: String,
	color: Number,
	hoist: Boolean,
	managed: Boolean,
	mentionable: Boolean,
	name: String,
	permissions: Types.Long,
	position: Number,
	tags: {
		bot_id: String,
	},
});

// @ts-ignore
export const RoleModel = db.model<RoleDocument>("Role", RoleSchema, "roles");
