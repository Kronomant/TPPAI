import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => (
	<Flex
		flexDir="column"
		height="250px"
		justifyContent="center"
		alignItems="center"
		bgColor="#0f0e17"
		padding="48px 24px"
	>
		<Image w="70%" h="70%" objectFit="contain" src="/images/logo.png" />

		<Flex>
			<Text mt={4} fontSize="md" color="white">
				Aplicação desenvolvida pelos alunos: Isabela Aguilar, Lucas Milard e
				Rossana Oliveira para a disciplina de Processamento e análise de Images
			</Text>
		</Flex>
	</Flex>
)

export default Footer
