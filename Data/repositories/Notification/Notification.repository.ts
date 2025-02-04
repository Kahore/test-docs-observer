import {WebSocketClient} from "@/Data/ws";
import {NotificationResponse} from "@/Data/dto/Notification";

export class NotificationRepository {
	private wsClient: WebSocketClient;

	constructor(wsClient: WebSocketClient) {
		this.wsClient = wsClient;
	}

	getNotifications(callback: (data: NotificationResponse[]) => void): void {
		this.wsClient.on("message", callback);
	}

	closeConnection(): void {
		this.wsClient.close();
	}
}
