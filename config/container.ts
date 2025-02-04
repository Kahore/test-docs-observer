import {Container, Token} from "dioma";
import {DocumentRepository} from "@/Data/repositories/Document";
import {apiClient, wsNotificationsClient} from "@/config/api";
import {NotificationRepository} from "@/Data/repositories/Notification";
import {DocumentQueryService} from "@/Services/Document";
import {NotificationService} from "@/Services/Notification";

// Normally you would have 2-3 containers - public(non-auth injections), private(auth injections) and service(metrics, analytics etc)

const documentRepository = new DocumentRepository(apiClient);
const notificationRepository = new NotificationRepository(wsNotificationsClient);


const documentQueryService = new DocumentQueryService(documentRepository)
const notificationService = new NotificationService(notificationRepository)

export const DocumentQueryServiceTid = new Token<DocumentQueryService>(
	"DocumentQueryServiceTid",
);
export const NotificationServiceTid = new Token<NotificationService>(
	"NotificationServiceTid",
);

class AppContainer extends Container {
	constructor() {
		super();
		this.register({
			token: DocumentQueryServiceTid,
			value: documentQueryService,
		});
		this.register({
			token: NotificationServiceTid,
			value: notificationService,
		});
	}
}

const appContainer = new AppContainer();

export default appContainer;
