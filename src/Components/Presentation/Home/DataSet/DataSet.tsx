import React from 'react'

import { Flex, Text, Link, HStack, Image } from '@chakra-ui/react'

const DataSet: React.FC = () => (
	<Flex id="Dataset" scrollMargin="160px" flexDir="column" alignItems="center">
		<Text
			fontFamily="Poppins"
			fontSize="5xl"
			fontWeight="semibold"
			color="#0C1E39"
			mb={4}
		>
			Data Set
		</Text>
		<Text
			color="#f25f4c"
			fontFamily="Poppins"
			fontSize="2xl"
			fontWeight="hairline"
		>
			base de dados
		</Text>
		<Flex
			margin="40px 0"
			alignItems="center"
			justifyContent="center"
			flexDir="column"
			gap={8}
		>
			<Flex gap={4} flexDir="column" w="90%">
				<Image src="/images/Kl.png" />
			</Flex>
			<Flex flexDir="column" w="100%">
				<Text fontFamily="Poppins" fontSize="xl" color="gray.600">
					Iremos utilizar uma base de dados que é composta por Raios X de
					joelhos, com todas as classificações da Escala KL
				</Text>
				<Text mt={4} fontFamily="Poppins" fontSize="xl" color="gray.600">
					Essa base de dados pode ser acessada por meio dos links abaixo:
				</Text>
				<Link
					_hover={{ color: 'var(--chakra-colors-orange-500)' }}
					mt={4}
					href="https://data.mendeley.com/datasets/56rmx5bjcr/1"
					fontFamily="Poppins"
					textDecor="underline"
					target="_blank"
					fontSize="lg"
					color="gray.500"
				>
					Knee Osteoarthritis Severity Grading Dataset
				</Link>
			</Flex>
		</Flex>
	</Flex>
)

export default DataSet
