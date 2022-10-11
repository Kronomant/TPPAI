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
		borderRadius="16px"
		backgroundColor="#0f0e17"
		padding="24px 32px"
		alignItems="center"
		gap={2}
	>
		<Image borderRadius="200px" src={image} />
		<Text fontFamily="Poppins" fontSize="2xl" color="gray.300">
			{name}
		</Text>
		<Flex gap={2} alignItems="center">
			<Icon
				as={AiOutlineGithub}
				cursor="pointer"
				color="gray.400"
				h="32px"
				w="32px"
				onClick={() => window.open(git, '_blank')}
			/>
			<Icon
				as={AiFillLinkedin}
				cursor="pointer"
				color="gray.400"
				h="32px"
				w="32px"
				target="_blank"
				onClick={() => window.open(linkedin, '_blank')}
			/>
		</Flex>
	</Flex>
)

export default DevCard
