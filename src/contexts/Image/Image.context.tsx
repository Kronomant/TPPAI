import React, { createContext, useCallback, useContext, useState } from 'react'
import { getData, insertData } from 'services/python.api'
import { IImageContext, TClassification } from './Image.types'
import FormData from 'form-data'
export const ImageContext = createContext<IImageContext>({} as IImageContext)
export const useImageProcessing = (): IImageContext => useContext(ImageContext)

interface AppProps {
	children: React.ReactElement
}

const ImageProvider: React.FC<AppProps> = ({ children }: AppProps) => {
	const [classifications, setClassifications] = useState<string>()

	const handleGetAllData = useCallback(async () => {
		const { response, status } = await getData()
		console.log(response)
		console.log(status)
	}, [])

	const handleInsertData = useCallback(async (data: FormData) => {
		const { response, status } = await insertData(data)
		console.log(response)
		if (status === 200) {
			setClassifications(response)
		}
	}, [])

	return (
		<ImageContext.Provider
			value={{
				classifications,
				handleGetAllData,
				handleInsertData
			}}
		>
			{children}
		</ImageContext.Provider>
	)
}

export default ImageProvider
