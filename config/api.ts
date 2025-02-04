import {ApiClient} from "@/Data/api";
import {WebSocketClient} from "@/Data/ws";

export const apiClient = new ApiClient(
	`${process.env.EXPO_PUBLIC_API_BASE_URL}`,
);

export const wsNotificationsClient = new WebSocketClient(
	`${process.env.EXPO_PUBLIC_WS_BASE_URL}/notifications`,
);
