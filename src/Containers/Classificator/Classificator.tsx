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
	Grid,
	Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import 'react-image-crop/dist/ReactCrop.css'

import Container from 'Components/Core/Container'

import Correlation from 'Components/Presentation/Correlation'
import { AiOutlineSend } from 'react-icons/ai'
import ServiceCard from 'Components/Presentation/ServiceCard'
import ResNet from 'Components/Presentation/ResNet'
import { useImageProcessing } from 'contexts/Image'
import XGBoost from 'Components/Presentation/XGBoost'

const Classificator: React.FC = () => {
	const [cnn, setCnn] = useState<boolean>(false)
	const [correlation, setCorrelation] = useState<boolean>(false)
	const { classifications } = useImageProcessing()
	const Header = () => (
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
						<BreadcrumbLink
							href="#"
							onClick={() => {
								setCnn(false)
								setCorrelation(false)
							}}
						>
							Start
						</BreadcrumbLink>
					</BreadcrumbItem>

					{cnn && (
						<BreadcrumbItem>
							<BreadcrumbLink href="#">ResNet</BreadcrumbLink>
						</BreadcrumbItem>
					)}
					{correlation && (
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Classificadores rasos</BreadcrumbLink>
						</BreadcrumbItem>
					)}
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
	)

	const Card = () => (
		<>
			<Flex
				fontSize="md"
				w={'100%'}
				gap={2}
				h="100%"
				color="gray.700"
				justifyContent="space-between"
			>
				<Flex flexDir={'column'} gap={4} w={'60%'}>
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

				<Flex w={'40%'} gap={4}>
					<Flex flexDir="column" alignItems="center" gap={1}>
						<Image
							w="175px"
							h="175px"
							objectFit="contain"
							src="/images/crop.png"
						/>
						<Text fontWeight="bold"> Área de interesse</Text>
					</Flex>
					<Flex flexDir="column" alignItems="center" gap={1}>
						<Image
							w="175px"
							h="175px"
							objectFit="contain"
							src="/images/correlation.png"
						/>
						<Text fontWeight="bold">Correlação</Text>
					</Flex>
				</Flex>
			</Flex>
			<Button
				_hover={{ background: '#f25f4c', color: 'white' }}
				w="150px"
				h="40px"
				p={6}
				borderRadius="8px"
				rightIcon={
					<Icon as={AiOutlineSend} height="24px" w="24px" color="white" />
				}
				bgColor="orange.400"
				color="white"
				onClick={() => {
					setCorrelation(true)
				}}
			>
				<Text fontWeight="hairline">Acessar</Text>
			</Button>
		</>
	)

	const Classificar = () => (
		<>
			<Flex
				fontSize="md"
				w={'100%'}
				gap={2}
				h="100%"
				color="gray.700"
				justifyContent="space-between"
			>
				<Text w={'55%'}>
					Classificar com CNN restNet, a classificação é feita de duas maneiras:
					<br />
					<br />
					Primeiro classificando de forma binária, se o joelho possuí ou não
					artrose.
					<br /> Segunda classificando o grau de artrose, sendo o grau 0 joelho
					saudavel e grau 4 o pior grau de artrose.
				</Text>
				<Flex w={'40%'} gap={4}>
					<Flex flexDir="column" alignItems="center" gap={1}>
						<Image
							w="175px"
							h="175px"
							objectFit="contain"
							src="/images/noartrose.png"
						/>
						<Text fontWeight="bold" fontSize="sm">
							Sem Artrose; Grau 0
						</Text>
					</Flex>
					<Flex flexDir="column" alignItems="center" gap={1}>
						<Image
							w="175px"
							h="175px"
							objectFit="contain"
							src="/images/artrose.png"
						/>
						<Text fontWeight="bold" fontSize="sm">
							Possuí Artrose; Grau 4
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Button
				_hover={{ background: '#f25f4c', color: 'white' }}
				w="150px"
				h="40px"
				p={6}
				borderRadius="8px"
				rightIcon={
					<Icon as={AiOutlineSend} height="24px" w="24px" color="white" />
				}
				bgColor="orange.400"
				color="white"
				onClick={() => {
					setCnn(true)
				}}
			>
				<Text fontWeight="hairline">Acessar</Text>
			</Button>
		</>
	)

	return (
		<Container>
			<Flex
				w="100%"
				minH="100vh"
				margin="32px auto"
				maxW="1400px"
				flexDir="column"
				alignItems="center"
			>
				<Header />
				{!correlation && !cnn && (
					<Flex alignItems="center" flexDir="column" gap={4}>
						<ServiceCard title="Classificadores Rasos" content={<Card />} />
						<ServiceCard
							title="Classificação resNet"
							content={<Classificar />}
						/>
					</Flex>
				)}
				{correlation && <Correlation />}
				{cnn && <ResNet cnn={classifications?.classifications?.cnn} />}
				<Flex w={'100%'} mt={4} justifyContent="space-between">
					{cnn && (
						<XGBoost
							title="XGBoost"
							xgboost={classifications?.classifications?.xgboost}
						/>
					)}
					{cnn && (
						<XGBoost
							title="Random Forest"
							xgboost={classifications?.classifications?.randomForest}
						/>
					)}
				</Flex>
			</Flex>
		</Container>
	)
}

export default Classificator
