import React, { useCallback, useRef, useState, useMemo } from 'react'
import {
	Image,
	Flex,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
	HStack,
	Button,
	Grid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import FormData from 'form-data'

import Container from 'Components/Core/Container'

import InputImage from 'Components/Presentation/InputImage'
import { useImageProcessing } from 'contexts/Image'

const Classificator = () => {
	const [src, setSrc] = useState(null)
	const [crop, setCrop] = useState<Crop>(null)
	const [image, setImage] = useState<HTMLImageElement>(null)
	const [output, setOutput] = useState(null)
	const [preview, setPreview] = useState<string>()
	const [nextStep, setNextStep] = useState<boolean>(false)
	const [result, setResult] = useState<boolean>(false)
	const [cropState, setCropState] = useState<File>(null)
	const { handleInsertData, classifications } = useImageProcessing()
	const refImage = useRef<HTMLInputElement>(null)

	console.log(classifications)

	const form = new FormData()

	const selectImage = useCallback((file: File) => {
		if (file) {
			setSrc(URL.createObjectURL(file))
		}
	}, [])

	const handleOpenFileReader = (): void => {
		if (refImage) {
			refImage?.current?.click()
		}
	}

	const handleSendData = useCallback(async () => {
		form.append('imageCrop', cropState)
		await handleInsertData(form)
	}, [cropState, form])

	const cropImageNow = useCallback(() => {
		const canvas = document.createElement('canvas')
		const scaleX = image.naturalWidth / image.width
		const scaleY = image.naturalHeight / image.height
		canvas.width = crop.width
		canvas.height = crop.height
		const ctx = canvas.getContext('2d')

		const pixelRatio = window.devicePixelRatio
		canvas.width = crop.width * pixelRatio
		canvas.height = crop.height * pixelRatio
		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
		ctx.imageSmoothingQuality = 'high'

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
		)

		// Converting to base64
		const base64Image = canvas.toDataURL('image/png')
		setOutput(base64Image)

		canvas.toBlob(blob => {
			setCropState(new File([blob], 'crop.png', { type: 'image/png' }))
			console.log(cropState)
		})

		setCrop(null)
	}, [image, crop])

	const resultImage = useMemo(
		() =>
			classifications?.length > 0 && (
				<Flex>
					<Image
						h="250px"
						src={`data:image/jpg;base64,${classifications}`}
						objectFit="cover"
					/>
				</Flex>
			),
		[classifications]
	)

	return (
		<Container>
			<Image h="250px" src="/images/nebula.png" objectFit="cover" />
			<Flex
				w="100%"
				minH="70vh"
				margin="32px auto"
				maxW="1400px"
				flexDir="column"
				justifyContent="space-around"
				alignItems="center"
			>
				<Grid>
					<Flex w="100%" justifyContent="center">
						<Breadcrumb
							fontSize="lg"
							spacing="8px"
							separator={<ChevronRightIcon color="pink.500" />}
						>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Página Inicial</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem>
								<BreadcrumbLink href="#">Start</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					</Flex>
					<Text
						m="20px 0"
						fontSize="5xl"
						fontWeight="semibold"
						fontFamily="Poppins"
						color="#0C1E39"
					>
						Classificador
					</Text>
				</Grid>

				<Grid
					w="100%"
					templateColumns="1fr 1fr"
					gap={32}
					justifyContent="center"
					alignItems="center"
				>
					{src ? (
						<Flex
							h="800px"
							flexDir="column"
							w="85%"
							py={16}
							gap={8}
							justifyContent="space-between"
						>
							<ReactCrop crop={crop} onChange={setCrop}>
								<Image
									w="100%"
									objectFit="contain"
									src={src}
									onLoad={V => setImage(V.currentTarget)}
								/>
							</ReactCrop>

							<HStack justifyContent="space-between">
								<Button
									colorScheme="yellow"
									variant="outline"
									onClick={() => {
										handleOpenFileReader()
										setCrop(null)
										setOutput(null)
									}}
								>
									<input
										type="file"
										hidden
										ref={refImage}
										formEncType="multipart/form-data"
										accept="image/jpg, image/jpeg, image/png"
										onChange={e => {
											selectImage(e.target.files[0])
											console.log(e.target.files[0])
										}}
									/>
									Escolher outro arquivo
								</Button>
								<Button
									bgColor="#ff8906"
									w="100px"
									_hover={{ bgColor: '#f25f4c' }}
									p={4}
									color="white"
									onClick={() => {
										cropImageNow()
									}}
								>
									Crop
								</Button>
							</HStack>
						</Flex>
					) : (
						<>
							<Flex flexDir="column">
								<Text>Funcionamento</Text>
								<Text>
									Escolha uma imagem, recorte a area desejada após isso escolha
									outra imagem para buscar o recorte nela
								</Text>
							</Flex>
							<Button
								bgColor="#ff8906"
								_hover={{ bgColor: '#f25f4c' }}
								p={6}
								margin="0 auto"
								w="200px"
								color="white"
								onClick={handleOpenFileReader}
							>
								<input
									type="file"
									hidden
									ref={refImage}
									formEncType="multipart/form-data"
									accept="image/jpg, image/jpeg, image/png"
									onChange={e => {
										selectImage(e.target.files[0])
										console.log(e.target.files[0])
									}}
								/>
								Escolha um arquivo
							</Button>
						</>
					)}

					{output && (
						<Flex
							w="100%"
							h="100%"
							py={16}
							justifyContent="space-evenly"
							alignItems="center"
							flexDir="column"
						>
							<Flex w="100%" flexDir="column">
								<Text>Recorte</Text>
								<Text>Area que será procurada</Text>
							</Flex>

							<Image w="60%" h="60%" objectFit="contain" src={output} />
							<Flex w="100%" justifyContent="right" alignItems="end">
								<Button
									bgColor="#ff8906"
									_hover={{ bgColor: '#f25f4c' }}
									p={6}
									w="100px"
									color="white"
									onClick={async () => {
										setNextStep(true)
										// handleSendData()
									}}
								>
									Próximo
								</Button>
							</Flex>
						</Flex>
					)}
				</Grid>
				{nextStep && (
					<Flex>
						<InputImage
							crop={cropState}
							form={form}
							preview={preview}
							setPreview={setPreview}
							setNextStep={setNextStep}
						/>
					</Flex>
				)}

				{resultImage}
			</Flex>
		</Container>
	)
}

export default Classificator
