import {FormatDate} from "@/utils/Formatters/Date";
import {ENotification} from "@/Domain/Notification/Entities";

export class NotificationListAdapter {
	public static toUI(notifications:ENotification[]): VNotification[]{
		return notifications.map(notification=>{
			return {
				...notification,
				formattedTimestamp:  FormatDate.getHumanizedDateTime(notification.timestamp),
			}
		})
	}
}

export interface VNotification extends ENotification {
	formattedTimestamp: string

}
