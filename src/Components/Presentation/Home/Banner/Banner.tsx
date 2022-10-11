import React from 'react'

import { Flex, Text, Icon, Button, Image } from '@chakra-ui/react'
import { AiOutlineSend, AiOutlineArrowDown } from 'react-icons/ai'
import { BiMouse } from 'react-icons/bi'
import { useRouter } from 'next/router'

const Banner: React.FC = () => {
	const router = useRouter()

	return (
		<Flex w="100%" bgColor="#0f0e17">
			<Flex
				margin="0px auto"
				alignItems="center"
				h="100vh"
				maxW="1400px"
				bgColor={'#0f0e17'}
				gap={8}
			>
				<Flex flexDir="column" w="50%" gap={4}>
					<Flex flexDir="column" gap={4}>
						<Text
							fontFamily="Poppins"
							fontSize="6xl"
							fontWeight="semibold"
							color="#fffffe"
							// textShadow="3px 4px var(--chakra-colors-pink-400)"
						>
							Classificando <br />
							Raio x de joelhos
						</Text>
						<Text
							color="orange.400"
							fontFamily="Poppins"
							fontSize="2xl"
							fontWeight="semibold"
						>
							Processamento e análise de imagens
						</Text>
					</Flex>

					<Text
						fontFamily="Poppins"
						fontSize="lg"
						color="gray.400"
						fontWeight="light"
					>
						Esse trabalho tem como objetivo desenvolver uma solução eficiente
						para classificar imagens de uma base de dados e identificá-las como
						estrelas ou galáxias aplicando os conhecimentos das disciplinas de
						computação distribuída, processamento e análise de imagens e
						computação paralela
					</Text>
					<Button
						_hover={{ background: '#194077', color: 'pink.300' }}
						w="100px"
						h="50px"
						margin={'60px 0 100px'}
						borderRadius="12px"
						rightIcon={
							<Icon
								as={AiOutlineSend}
								height="24px"
								w="24px"
								color="pink.400"
							/>
						}
						bgColor="#0C1E39"
						color="pink.400"
						onClick={() => {
							router.push('/classificator')
						}}
					>
						Start
					</Button>
					<Flex
						alignItems="center"
						gap={2}
						cursor="pointer"
						onClick={() => {
							const elementToview = document.getElementById('Devs')
							elementToview.scrollIntoView({
								behavior: 'smooth',
								block: 'start'
							})
						}}
					>
						<Icon
							justifySelf="left"
							as={BiMouse}
							height="32px"
							w="32px"
							color="pink.400"
						/>
						<Text fontFamily="Poppins" color="#0C1E39" fontSize="xl">
							Ver mais
						</Text>
						<Icon
							justifySelf="left"
							as={AiOutlineArrowDown}
							height="24px"
							w="24px"
							color="pink.400"
						/>
					</Flex>
				</Flex>
				<Flex justifyContent="center" w="50%" alignItems="baseline">
					<Image w="90%" src="/images/cover.svg" />
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Banner
