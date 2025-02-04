import {EContributor} from "@/Domain/Contributor/Entities";
import {DocumentItem} from "@/Data/dto/Document";

export class EDocument {
	id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	version: string
	attachments:string[]
	contributors:  EContributor[]

	constructor(props:Pick<DocumentItem,'ID'|'Title'|'CreatedAt'|'UpdatedAt'|'Version'|'Attachments'> &{	contributors:  EContributor[]}){
		  this.id = props.ID
		  this.title = props.Title
		  this.createdAt = props.CreatedAt
		  this.updatedAt = props.UpdatedAt
		  this.version = props.Version
		  this.attachments = props.Attachments
		  this.contributors = props.contributors
	}
}
