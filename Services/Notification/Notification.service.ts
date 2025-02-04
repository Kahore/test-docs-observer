import {NotificationRepository} from "@/Data/repositories/Notification";
import {ENotification} from "@/Domain/Notification/Entities";

export class NotificationService {

	constructor(private _repository: NotificationRepository) {}

	getNotifications(callback: (notifications:  ENotification) => void) {
		return this._repository.getNotifications(dto=>{
			const entity = new ENotification(dto)
			callback(entity)
		});
	}

	disconnect(): void {
		this._repository.closeConnection();
	}
}
