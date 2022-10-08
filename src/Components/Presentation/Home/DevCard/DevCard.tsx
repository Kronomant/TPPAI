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
		borderRadius="50px"
		boxShadow="20px 20px 60px #ebebeb,-20px -20px 60px #ffffff"
		padding="24px 32px"
		alignItems="center"
		gap={2}
	>
		<Image borderRadius="200px" src={image} />
		<Text
			fontFamily="Poppins"
			fontSize="2xl"
			fontWeight="semibold"
			color="#0C1E39"
		>
			{name}
		</Text>
		<Flex gap={2} alignItems="center">
			<Icon
				as={AiOutlineGithub}
				cursor="pointer"
				h="32px"
				w="32px"
				onClick={() => window.open(git, '_blank')}
			/>
			<Icon
				as={AiFillLinkedin}
				cursor="pointer"
				h="32px"
				w="32px"
				target="_blank"
				onClick={() => window.open(linkedin, '_blank')}
			/>
		</Flex>
	</Flex>
)

export default DevCard
