import {FormatDate} from "@/utils/Formatters/Date";
import {ENotification} from "@/Domain/Notification/Entities";

export class NotificationAdapter {
	public static toUI(notification:ENotification): VNotification{
		return {
			...notification,
			formattedTimestamp:  FormatDate.getHumanizedDateTime(notification.timestamp),
		}
	}
}

export interface VNotification extends ENotification {
	formattedTimestamp: string
}
