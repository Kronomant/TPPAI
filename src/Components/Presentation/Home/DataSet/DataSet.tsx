import React from 'react'

import { Flex, Text, Link, HStack, Image } from '@chakra-ui/react'

const DataSet: React.FC = () => (
	<Flex
		id="Dataset"
		scrollMargin="160px"
		flexDir="column"
		alignItems="center"
		bgColor="#0f0e17"
	>
		<Text
			fontFamily="Poppins"
			fontSize="4xl"
			fontWeight="semibold"
			color="#0C1E39"
			mb={4}
			// textShadow="3px 4px var(--chakra-colors-pink-300)"
		>
			Data Set
		</Text>
		<Text
			color="pink.400"
			fontFamily="Poppins"
			fontSize="xl"
			fontWeight="hairline"
		>
			base de dados
		</Text>
		<Flex margin={'40px 0'} alignItems="center">
			<Flex gap={4} flexDir="column" w="50%">
				<Text color="pink.400" fontFamily="Poppins" fontSize="2xl">
					Galaxias
				</Text>
				<HStack spacing={8}>
					{[...Array(4)].map((e, i) => (
						<Image
							h="128px"
							w="128x"
							key={`galaxy${i}`}
							src={`/images/galaxy/galaxy${i}.jpg`}
						/>
					))}
				</HStack>
				<Text color="pink.400" fontFamily="Poppins" fontSize="2xl">
					Estrelas
				</Text>
				<HStack spacing={8}>
					{[...Array(4)].map((e, i) => (
						<Image
							h="128px"
							w="128x"
							key={`star${i}`}
							src={`/images/star/star${i}.jpg`}
						/>
					))}
				</HStack>
			</Flex>
			<Flex flexDir="column" w="40%">
				<Text fontFamily="Poppins" fontSize="lg" color="gray.500">
					Iremos utilizar duas bases de dados para a execução desse trabalho.
					Ambas as bases possuem imagens com tonalidades de cinza e estão
					classificadas em pastas, uma pasta com imagens de galáxias e outra com
					imagens de estrelas
				</Text>
				<Text mt={4} fontFamily="Poppins" fontSize="lg" color="gray.500">
					Essas bases de dados podem ser acessadas por meio dos links abaixo:
				</Text>
				<Link
					_hover={{ color: 'var(--chakra-colors-pink-400)' }}
					mt={4}
					href="https://www.kaggle.com/datasets/brsdincer/mapping-dark-matter-image-set"
					fontFamily="Poppins"
					textDecor="underline"
					target="_blank"
					fontSize="lg"
					color="gray.500"
				>
					Mapping Dark Matter Image Set
				</Link>
				<Link
					_hover={{ color: 'var(--chakra-colors-pink-400)' }}
					mt={4}
					href="https://www.kaggle.com/datasets/divyansh22/dummy-astronomy-data"
					fontFamily="Poppins"
					target="_blank"
					textDecor="underline"
					fontSize="lg"
					color="gray.500"
				>
					Star-Galaxy Classification Data
				</Link>
			</Flex>
		</Flex>
	</Flex>
)

export default DataSet
