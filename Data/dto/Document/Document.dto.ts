export interface DocumentRequest {}

export type DocumentResponse = DocumentItem[]

export interface DocumentItem {
	"Attachments": string[],
	"Contributors": DocumentItemContributor[],
	"CreatedAt": string,
	"ID": string,
	"Title": string,
	"UpdatedAt": string,
	"Version": string
}
export interface DocumentItemContributor {
	"ID": string,
	"Name": string
}
