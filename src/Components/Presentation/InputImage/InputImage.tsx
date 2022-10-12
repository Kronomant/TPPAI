import React, { useState, useRef, useCallback } from 'react'
import { IoMdImage } from 'react-icons/io'
import { Button, Flex, Icon, Image, Spinner } from '@chakra-ui/react'
import { ImageContainer, ImageCover } from './InputImage.style'
import { AiOutlineSend } from 'react-icons/ai'
import FormData from 'form-data'
import { useImageProcessing } from 'contexts/Image'

interface IInputImageProps {
	preview: string
	form: FormData
	crop: File
	setPreview: React.Dispatch<React.SetStateAction<string>>
	setResult: React.Dispatch<React.SetStateAction<boolean>>
}

const InputImage: React.FC<IInputImageProps> = ({
	preview,
	form,
	crop,
	setPreview,
	setResult
}) => {
	const [loadingImage, setLoadingImage] = useState<boolean>(false)
	const refImage = useRef<HTMLInputElement>(null)

	const { handleInsertData, setClassifications } = useImageProcessing()

	const handleInputImage = async (file: File) => {
		const form2 = new FormData()
		setLoadingImage(true)
		// await sleep(1000)
		form2.append('imageFiles', file)
		form2.append('imageCrop', crop)
		await handleInsertData(form2)
		setResult(true)
		// form.append('imageCrop', file)
		console.log(form)
		const objectUrl = URL.createObjectURL(file)
		setPreview(objectUrl)
		console.log(form)

		// api para enviar imagem
		setLoadingImage(false)
	}

	const handleInsertImage = useCallback(async () => {
		await handleInsertData(form)
		// form.append('imageFiles', null)
		console.log(form)
		setResult(true)
	}, [])

	const handleOpenFileReader = (): void => {
		if (refImage) {
			refImage?.current?.click()
		}
	}

	const handleClickIcon = () => {
		if (!loadingImage) {
			handleOpenFileReader()
			// setClassifications(null)
		}
	}

	const Loading = () => (
		<Flex
			position="absolute"
			top={175}
			right={0}
			flexDir="column"
			w="100%"
			cursor="progress"
			pointerEvents="fill"
			zIndex={2}
		>
			<Flex w="100%" justifyContent="center" alignItems="center">
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="pink.500"
					size="xl"
				/>
			</Flex>
		</Flex>
	)

	return (
		<>
			<Flex flexDir="column" alignItems="end">
				<ImageCover>
					<ImageContainer onClick={handleClickIcon}>
						{loadingImage && <Loading />}
						<Icon as={IoMdImage} height={5} width={5} color="#f25f4c" />
						<input
							type="file"
							formEncType="multipart/form-data"
							hidden
							ref={refImage}
							accept="image/jpg, image/jpeg, image/png"
							onChange={({ target }) => {
								if (target?.files?.[0]) {
									handleInputImage(target.files?.[0])
								}
							}}
						/>
						<Image src={preview} />
					</ImageContainer>
				</ImageCover>
				{preview && (
					<Button
						_hover={{ background: '#f25f4c' }}
						w="100px"
						rightIcon={<Icon as={AiOutlineSend} color="white" />}
						bgColor="orange.400"
						color="white"
						onClick={() => handleInsertImage()}
					>
						Enviar
					</Button>
				)}
			</Flex>
		</>
	)
}

export default InputImage
