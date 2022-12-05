import React, { useCallback, useMemo, useRef, useState } from 'react'

import { Button, Flex, Grid, HStack, Text, Image } from '@chakra-ui/react'
import ReactCrop, { Crop } from 'react-image-crop'
import InputImage from '../InputImage'
import { useImageProcessing } from 'contexts/Image'
import FormData from 'form-data'

const Correlation = () => {
	const [src, setSrc] = useState(null)
	const [crop, setCrop] = useState<Crop>(null)
	const [image, setImage] = useState<HTMLImageElement>(null)
	const [output, setOutput] = useState(null)

	const [nextStep, setNextStep] = useState<boolean>(false)
	const [result, setResult] = useState<boolean>(false)
	const [cropState, setCropState] = useState<File>(null)
	const { classifications } = useImageProcessing()
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
		})

		setCrop(null)
	}, [image, crop])

	const resultImage = useMemo(
		() =>
			classifications?.correlation.length > 0 &&
			result && (
				<Flex>
					<Image
						h="250px"
						src={`data:image/jpg;base64,${classifications.correlation}`}
						objectFit="cover"
					/>
				</Flex>
			),
		[classifications]
	)

	const CropSection = useMemo(
		() => (
			<Flex
				h="800px"
				flexDir="column"
				w="500px"
				py={16}
				gap={8}
				justifyContent="space-between"
			>
				<ReactCrop crop={crop} onChange={setCrop}>
					<Image
						w="500px"
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
		),
		[refImage, src, crop]
	)

	const InfoSection = useMemo(
		() => (
			<>
				<Flex flexDir="column">
					<Text fontSize="3xl" fontWeight="semibold">
						Como Funciona ?
					</Text>
					<Flex mt={4} fontSize="xl" color="gray.600" flexDir="column">
						<Text>
							Correlação vai buscar uma area de interesse semelhante em outra
							imagem, nesse caso a articulação do joelho, para isso : <br />
						</Text>
						<Flex ml={12}>
							<ul>
								<li>Escolha uma imagem;</li>
								<li> Recorte na image escolhida a área de interesse;</li>
								<li>Selecione outra imagem para fazer a correlação.</li>
							</ul>
						</Flex>
					</Flex>
				</Flex>
				<Image src="" />
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
		),
		[refImage]
	)

	return (
		<>
			<Grid
				w="100%"
				templateColumns="1fr 1fr"
				gap={32}
				justifyContent="center"
				alignItems="center"
			>
				{src ? CropSection : InfoSection}

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

						<Image w="300px" h="300px" objectFit="contain" src={output} />
						<Flex w="100%" justifyContent="right" alignItems="end">
							<Button
								bgColor="#ff8906"
								_hover={{ bgColor: '#f25f4c' }}
								p={6}
								w="100px"
								color="white"
								onClick={async () => {
									setNextStep(true)
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
					<InputImage crop={cropState} form={form} setResult={setResult} />
				</Flex>
			)}

			{resultImage}
		</>
	)
}

export default Correlation
