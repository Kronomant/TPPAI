import React from 'react'

import { Flex, Icon, Image, Text, Button } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

const ReferencesCard: React.FC<{
	link: string
	title: string
	image: string
	description: string
}> = ({ link, title, description, image }) => (
	<Flex margin="24px 64px" w="100%" gap={16}>
		<Image
			borderRadius="8px"
			boxShadow=" rgba(100, 100, 111, 0.1) 0px 7px 29px 0px"
			w="25%"
			src={image}
		/>
		<Flex w="60%" flexDir="column" gap={8}>
			<Text fontSize="xl" fontWeight="semibold">
				{title}
			</Text>
			<Text fontSize="md" padding={'24px 0px'} textAlign="left" color="#828282">
				{description}
			</Text>

			<Button
				_hover={{ background: '#f25f4c' }}
				w="150px"
				h="50px"
				borderRadius="8px"
				rightIcon={
					<Icon as={AiOutlineSend} height="24px" w="24px" color="white" />
				}
				bgColor="orange.400"
				color="white"
				onClick={() => window.open(link, '_blank')}
			>
				Acessar
			</Button>
		</Flex>
	</Flex>
)

export default ReferencesCard
