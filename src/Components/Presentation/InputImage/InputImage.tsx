import React, { useState, useRef, useCallback } from 'react'
import { IoMdImage } from 'react-icons/io'
import { Button, Flex, Icon, Image, Spinner } from '@chakra-ui/react'
import { ImageContainer, ImageCover } from './InputImage.style'
import { AiOutlineSend } from 'react-icons/ai'
import FormData from 'form-data'
import { useImageProcessing } from 'contexts/Image'

interface IInputImageProps {
	preview: string
	setPreview: React.Dispatch<React.SetStateAction<string>>
	setNextStep: React.Dispatch<React.SetStateAction<boolean>>
}

const InputImage: React.FC<IInputImageProps> = ({
	preview,
	setPreview,
	setNextStep
}) => {
	const [loadingImage, setLoadingImage] = useState<boolean>(false)
	const refImage = useRef<HTMLInputElement>(null)
	const form = new FormData()
	const teste = true
	const { handleInsertData } = useImageProcessing()

	const handleInputImage = async (file: File) => {
		setLoadingImage(true)
		// await sleep(1000)
		form.append('imgFile', file)
		const objectUrl = URL.createObjectURL(file)
		setPreview(objectUrl)
		console.log(form)

		// api para enviar imagem
		setLoadingImage(false)
	}

	const handleInsertImage = useCallback(async () => {
		await handleInsertData(form)
		form.append('files', null)
		console.log(form)
		setNextStep(true)
	}, [])

	const handleOpenFileReader = (): void => {
		if (refImage) {
			refImage?.current?.click()
		}
	}

	const handleClickIcon = () => {
		if (!loadingImage) {
			handleOpenFileReader()
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
			{teste ? (
				<Flex flexDir="column" alignItems="end">
					<ImageCover>
						<ImageContainer onClick={handleClickIcon}>
							{loadingImage && <Loading />}
							<Icon as={IoMdImage} height={5} width={5} color="pink.500" />
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
							_hover={{ background: '#194077', color: 'pink.300' }}
							w="100px"
							rightIcon={<Icon as={AiOutlineSend} color="pink.400" />}
							bgColor="#0C1E39"
							color="pink.400"
							onClick={() => handleInsertImage()}
						>
							Enviar
						</Button>
					)}
				</Flex>
			) : (
				<form
					method="POST"
					action="/api/pessoa/upload-image"
					encType="multipart/form-data"
				>
					<input type="file" name="imgFile" />
					<input type="submit" value="upload" />
				</form>
			)}
		</>
	)
}

export default InputImage
