export enum Sort {
	asc = 'asc',
	desc = 'desc',

}
import {EDocument} from "@/Domain/Document/Entities";

export interface DocumentSort {
	key: keyof EDocument
	order: Sort

}
