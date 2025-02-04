import {EDocument} from "@/Domain/Document/Entities";
import {FormatDate} from "@/utils/Formatters/Date";

export class DocumentListAdapter {
	public static toUI(documents:EDocument[]): VDocument[]{
		  return documents.map(document=>{
				return {
					...document,
					formattedCreatedAt:  FormatDate.getHumanizedDateTime(document.createdAt),
					formattedUpdatedAt:  FormatDate.getHumanizedDateTime(document.updatedAt),
				}
		  })
	}
}

export interface VDocument extends EDocument {
	formattedCreatedAt: string
	formattedUpdatedAt: string
}
