import React, { createContext, useCallback, useContext, useState } from 'react'
import { getData, insertData } from 'services/python.api'
import { IImageContext, TClassification, TImageProcessing } from './Image.types'
import FormData from 'form-data'
export const ImageContext = createContext<IImageContext>({} as IImageContext)
export const useImageProcessing = (): IImageContext => useContext(ImageContext)

interface AppProps {
	children: React.ReactElement
}

const ImageProvider: React.FC<AppProps> = ({ children }: AppProps) => {
	const [classifications, setClassifications] = useState<TImageProcessing>()

	const handleGetAllData = useCallback(async () => {
		const { response, status } = await getData()
		console.log(response)
		console.log(status)
	}, [])

	const handleInsertData = useCallback(async (data: FormData, callback) => {
		setClassifications(null)
		const { response, status } = await insertData(data)
		if (status === 200) {
			callback(response)
			setClassifications(response)
		}
	}, [])

	return (
		<ImageContext.Provider
			value={{
				classifications,
				setClassifications,
				handleGetAllData,
				handleInsertData
			}}
		>
			{children}
		</ImageContext.Provider>
	)
}

export default ImageProvider
