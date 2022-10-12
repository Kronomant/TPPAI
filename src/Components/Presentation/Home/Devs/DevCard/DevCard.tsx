import { Flex, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'

import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

interface IDevCardProps {
	image: string
	name: string
	git: string
	linkedin: string
}

const DevCard: React.FC<IDevCardProps> = ({ image, name, git, linkedin }) => (
	<Flex
		flexDir="column"
		w="300px"
		borderRadius="8px"
		border="1px solid"
		borderColor="gray.700"
		backgroundColor="#0f0e17"
		padding="24px 32px"
		alignItems="center"
		gap={2}
	>
		<Image borderRadius="200px" src={image} />
		<Text mt={4} fontFamily="Poppins" fontSize="2xl" color="gray.100">
			{name}
		</Text>
		<Flex gap={2} alignItems="center">
			<Icon
				_hover={{ color: '#f25f4c' }}
				as={AiOutlineGithub}
				cursor="pointer"
				color="gray.200"
				h="32px"
				w="32px"
				onClick={() => window.open(git, '_blank')}
			/>
			<Icon
				_hover={{ color: '#f25f4c' }}
				as={AiFillLinkedin}
				cursor="pointer"
				color="gray.200"
				h="32px"
				w="32px"
				target="_blank"
				onClick={() => window.open(linkedin, '_blank')}
			/>
		</Flex>
	</Flex>
)

export default DevCard
