import FormData from 'form-data'

export enum EClassificationType {
	DEGREES = 'degrees',
	BINARY = 'binary'
}

export enum EClassificationLabel {
	ARTHROSIS = 'artrose',
	NO_ARTHROSIS = 'sem artrose',
	GRADE_0 = 'grau 0',
	GRADE_1 = 'grau 1',
	GRADE_2 = 'grau 2',
	GRADE_3 = 'grau 3',
	GRADE_4 = 'grau 4'
}

export type TClassification = {
	label: EClassificationLabel
	type?: EClassificationType
	model?: string
	time: string
	prob: number
}

export type TCNN = {
	binary: TClassification[] | []
	degrees: TClassification[] | []
}

export type TClassifiers = {
	xgboost: TClassification[] | []
	randomForest: TClassification[] | []
	cnn: TCNN
}

export type TImageProcessing = {
	correlation: string
	classifications: TClassifiers
}

export interface IImageContext {
	classifications: TImageProcessing
	setClassifications: React.Dispatch<React.SetStateAction<TImageProcessing>>
	handleGetAllData: () => Promise<void>
	handleInsertData: (data: FormData) => Promise<void>
}
