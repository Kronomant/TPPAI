import React from 'react'

import { Flex, Text, HStack } from '@chakra-ui/react'
import DevCard from './DevCard'

const Devs: React.FC = () => (
	<Flex
		id="Devs"
		scrollMargin="60px"
		h="100vh"
		margin=" 0px 0px 60px"
		flexDir="column"
		gap={8}
		bgColor="#fffffe"
		alignItems="center"
	>
		<Flex margin={'60px 0'} flexDir="column" alignItems="center">
			<Text
				fontFamily="Poppins"
				fontSize="5xl"
				fontWeight="semibold"
				color="#0f0e17"
				mb={4}
				// textShadow="3px 4px var(--chakra-colors-pink-300)"
			>
				Desenvolvedores
			</Text>
			<Text
				color="#f25f4c"
				fontFamily="Poppins"
				fontSize="lg"
				fontWeight="hairline"
			>
				Sobre nós
			</Text>
		</Flex>
		<HStack spacing={16}>
			<DevCard
				image="/images/bela.jpg"
				name="Isabela Aguilar"
				git="https://github.com/isabelaaaguilar"
				linkedin="https://www.linkedin.com/in/isabela-regina-aguilar/"
			/>
			<DevCard
				image="/images/milard.jpg"
				name="Lucas Milard"
				git="https://github.com/Kronomant"
				linkedin="https://www.linkedin.com/in/lucas-milard-bb3630164/"
			/>
			<DevCard
				image="/images/rossana.jpg"
				name="Rossana Oliveira"
				git="https://github.com/rossanaoliveirasouza"
				linkedin="https://www.linkedin.com/in/rossana-souza-90063b141/"
			/>
		</HStack>
	</Flex>
)

export default Devs
