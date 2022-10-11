import { TClassification } from 'contexts/Image/Image.types'
import API from './api'
import FormData from 'form-data'
import { toast } from 'react-toastify'
export const insertData = async (
	data: FormData
): Promise<{
	status: number
	response: string
}> => {
	const resp = await API.post('upload-image', data)
		.then(({ data, status }) => {
			console.log(data)
			toast.success('Classificação feita com sucesso!!!')
			return { status, response: data }
		})
		.catch(err => {
			return { status: err.status, response: null }
		})

	return resp
}

export const getData = async (): Promise<{
	status: number
	response: TClassification[]
}> => {
	const resp = await API.get('api/pessoa/')
		.then(({ data, status }) => {
			return { status, response: data?.data }
		})
		.catch(err => {
			return { status: err.status, response: [] }
		})

	return resp
}
