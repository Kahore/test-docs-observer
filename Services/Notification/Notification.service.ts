import {NotificationRepository} from "@/Data/repositories/Notification";
import {NotificationMapper} from "@/Mappers/Notification";
import {ENotification} from "@/Domain/Notification/Entities";

export class NotificationService {

	constructor(private _repository: NotificationRepository) {}

	getNotifications(callback: (notifications:  ENotification[]) => void) {
		this._repository.getNotifications(callback=>{
			return NotificationMapper.toEntity(callback)
		});
	}

	disconnect(): void {
		this._repository.closeConnection();
	}
}
