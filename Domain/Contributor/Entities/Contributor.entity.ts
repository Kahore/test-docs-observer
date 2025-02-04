import {DocumentItemContributor} from "@/Data/dto/Document";

export class EContributor {
	id:string;
	name: string;
	constructor(props:DocumentItemContributor){
		this.id = props.ID
		this.name = props.Name
	}
}
