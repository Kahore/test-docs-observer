import {DocumentsVM} from "@/ViewModels/Documents";
import {useLocalObservable} from "mobx-react";
import appContainer, {DocumentQueryServiceTid, NotificationServiceTid} from "@/config/container";

export const useDocumentsViewModel = () => {
	return useLocalObservable(() => {
		const _spendingService = appContainer.inject(DocumentQueryServiceTid);
		const _userService = appContainer.inject(NotificationServiceTid);

		return new DocumentsVM(_spendingService, _userService);
	});
};
