import React from 'react'

import { Flex, Icon, Image, Text, Button } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

const ReferencesCard: React.FC<{
	link: string
	title: string
	description: string
}> = ({ link, title, description }) => (
	<Flex margin="24px 64px" w="100%" gap={16} height="400px">
		<Image
			borderRadius="8px"
			boxShadow=" rgba(100, 100, 111, 0.1) 0px 7px 29px 0px"
			w="25%"
			src="/images/references.png"
		/>
		<Flex w="60%" flexDir="column" gap={8}>
			<Text fontSize="xl" fontWeight="semibold">
				{title}
			</Text>
			<Text fontSize="md" padding={'24px 0px'} textAlign="left" color="#828282">
				{description}
			</Text>

			<Button
				_hover={{ background: '#194077', color: 'pink.300' }}
				w="150px"
				h="50px"
				borderRadius="12px"
				rightIcon={
					<Icon as={AiOutlineSend} height="24px" w="24px" color="pink.400" />
				}
				bgColor="#0C1E39"
				color="pink.400"
				onClick={() => window.open(link, '_blank')}
			>
				Acessar
			</Button>
		</Flex>
	</Flex>
)

export default ReferencesCard
