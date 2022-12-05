import React, { useCallback, useMemo, useRef, useState } from 'react'

import { Button, Flex, Grid, HStack, Text, Image } from '@chakra-ui/react'
import ReactCrop, { Crop } from 'react-image-crop'
import { TImageProcessing, useImageProcessing } from 'contexts/Image'
import FormData from 'form-data'
import XGBoost from '../XGBoost'

const Correlation = () => {
	const [src, setSrc] = useState(null)
	const [crop, setCrop] = useState<Crop>(null)
	const [image, setImage] = useState<HTMLImageElement>(null)
	const [output, setOutput] = useState(null)

	const [imageCompare, setImageCompare] = useState<File>(null)
	const [cropState, setCropState] = useState<File>(null)
	const [data, setData] = useState<TImageProcessing>()
	const { classifications, handleInsertData } = useImageProcessing()
	const refImage = useRef<HTMLInputElement>(null)

	console.log(classifications)

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

	const CropSection = useMemo(
		() => (
			<Flex
				h="800px"
				flexDir="column"
				w="100%"
				py={16}
				gap={8}
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex w="500px">
					<ReactCrop crop={crop} onChange={setCrop}>
						<Image
							w="500px"
							objectFit="contain"
							src={src}
							onLoad={V => setImage(V.currentTarget)}
						/>
					</ReactCrop>
				</Flex>

				<HStack w="500px" justifyContent="space-between">
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
								setImageCompare(e.target.files[0])
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

	const handleInsertImage = useCallback(async () => {
		const form = new FormData()

		form.append('imageFiles', imageCompare)
		form.append('imageCrop', cropState)

		await handleInsertData(form, setData)
		// form.append('imageFiles', null)
		console.log(form)
	}, [imageCompare, cropState])

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
							setImageCompare(e.target.files[0])
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
				w="75%"
				templateColumns={cropState ? '1fr 1fr' : '1fr'}
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
						justifyContent="space-between"
						alignItems="center"
						flexDir="column"
					>
						<Flex w="100%" flexDir="column">
							<Text fontSize="3xl" fontWeight="semibold">
								Recorte
							</Text>
							<Text>Area de interesse</Text>

							<Image
								mt={8}
								w="100%"
								h="100%"
								objectFit="contain"
								src={output}
							/>
						</Flex>

						<Flex w="100%" justifyContent="right" alignItems="end">
							<Button
								bgColor="#ff8906"
								_hover={{ bgColor: '#f25f4c' }}
								p={6}
								w="100px"
								color="white"
								onClick={() => {
									handleInsertImage()
								}}
							>
								Próximo
							</Button>
						</Flex>
					</Flex>
				)}
			</Grid>
			{data && (
				<Flex w={'100%'} mt={4} justifyContent="space-between">
					<XGBoost title="XGBoost" xgboost={data?.classifications?.xgboost} />
					<XGBoost
						title="Random Forest"
						xgboost={data?.classifications?.randomForest}
					/>
				</Flex>
			)}
		</>
	)
}

export default Correlation
