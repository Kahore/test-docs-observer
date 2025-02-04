import {EDocument} from "@/Domain/Document/Entities";
import {FormatDate} from "@/utils/Formatters/Date";

export class DocumentListAdapter {
	public static toUI(documents:EDocument[]): VDocument[]{
		  return documents.map(document=>{
				return {
					...document,
					formattedVersion:  `Version: ${document.version}`,
					formattedCreatedAt:  FormatDate.getHumanizedDateTime(document.createdAt),
					formattedUpdatedAt:  FormatDate.getHumanizedDateTime(document.updatedAt),
				}
		  })
	}
}

export interface VDocument extends EDocument {
	formattedVersion: string
	formattedCreatedAt: string
	formattedUpdatedAt: string
}
