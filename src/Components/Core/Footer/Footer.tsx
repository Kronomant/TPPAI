import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => (
	<Flex
		flexDir="column"
		height="250px"
		justifyContent="center"
		alignItems="center"
		bgColor="#0C1E39"
		padding="48px 24px"
	>
		<Image w="70%" h="70%" objectFit="contain" src="/images/logo.png" />

		<Flex>
			<Text fontSize="md" color="white">
				Aplicação desenvolvida pelos alunos: Isabela Aguilar, Lucas Milard e
				Rossana Oliveira para a disciplina de Trabalho Interdisciplinar VI
			</Text>
		</Flex>
	</Flex>
)

export default Footer
