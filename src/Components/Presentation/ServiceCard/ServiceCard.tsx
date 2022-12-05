import { Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'

interface IServiceCard {
	title: string
	content: React.ReactNode
}

const ServiceCard = ({ title, content }: IServiceCard) => (
	<Flex
		w="80%"
		rounded="2xl"
		justifyContent="center"
		flexDir="column"
		border="2px"
		borderColor="gray.300"
		padding="40px 20px"
	>
		<Text fontSize="3xl" fontWeight="semibold" mb={4}>
			{title}
		</Text>
		{content}
	</Flex>
)

export default ServiceCard
