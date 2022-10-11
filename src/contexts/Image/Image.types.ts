import FormData from 'form-data'

export type TClassification = {
	label: string
	description: string
	percent: number
}
export interface IImageContext {
	classifications: string
	handleGetAllData: () => Promise<void>
	handleInsertData: (data: FormData) => Promise<void>
}
