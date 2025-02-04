import {NotificationResponse} from "@/Data/dto/Notification";

export class ENotification {
	documentID:string;
	documentTitle:string;
	timestamp:string;
	userID:string;
	userName:string;

	constructor(notification:NotificationResponse) {
		this.documentID  = notification.DocumentID
		this.documentTitle  = notification.DocumentTitle
		this.timestamp  = notification.Timestamp
		this.userID  = notification.UserID
		this.userName  = notification.UserName
	}
}
