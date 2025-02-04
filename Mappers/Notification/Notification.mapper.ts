import {NotificationResponse} from "@/Data/dto/Notification";
import {ENotification} from "@/Domain/Notification/Entities";

export class NotificationMapper {
	static toEntity(dto:NotificationResponse[]) {
		return dto.map(notification=> new ENotification(notification));
	}
}
