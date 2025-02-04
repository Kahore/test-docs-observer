import {DocumentQueryService} from "@/Services/Document";
import {NotificationService} from "@/Services/Notification";
import {makeAutoObservable, runInAction} from "mobx";
import {Sort} from "@/Services/Document/types";
import {DocumentListAdapter, VDocument} from "@/Domain/Document/ViewAdapters";
import {NotificationAdapter, VNotification} from "@/Domain/Notification/ViewAdapters";

export class DocumentsVM {
	public documents: VDocument[] = []
	public notifications: VNotification[] = []

	constructor(
		private _documentQueryService: DocumentQueryService,
		private _notificationService: NotificationService,
	) {
		makeAutoObservable(this);
	}

	public get notificationsCount(){
		return this.notifications.length > 100 ? '99+': this.notifications.length
	}

	public load = async () =>{

		const resp =  await this._documentQueryService.getSortedDocuments({key:'createdAt', order:Sort.desc})

		runInAction(()=>{
			if(resp.isRight()) {
				this.documents = DocumentListAdapter.toUI(resp.value)
			}
			this.getNotifications()
		})

	}
	public getNotifications = ()=> {
		this._notificationService.getNotifications(cb=> {
			runInAction(()=>{
				this.notifications.push(NotificationAdapter.toUI(cb))
			})
		})
	}

	public dispose = ()=> {
		this._notificationService.disconnect()
	}
}
