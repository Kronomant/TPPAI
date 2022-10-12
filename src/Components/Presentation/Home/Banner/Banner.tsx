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
							fontSize="5xl"
							fontWeight="bold"
							color="#fffffe"
						>
							Classificando <br /> Osteoartrite femorotibial
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
						A osteoartrite (artrose) é uma doença que se caracteriza pelo
						desgaste da cartilagem articular e por alterações ósseas nas
						articulações. O raio X é o principal exame para diagnóstico da
						doença que é classificada pela escala de Kellgren & Lawrence (KL) ,
						de acordo com o seu grau de severidade. O diagnóstico de artrose é
						confirmado para ({`KL > 1`}).
					</Text>
					<Button
						_hover={{ background: '#f25f4c', color: 'white' }}
						w="150px"
						h="50px"
						p={6}
						margin={'60px 0 100px'}
						borderRadius="4px"
						rightIcon={
							<Icon as={AiOutlineSend} height="24px" w="24px" color="white" />
						}
						bgColor="orange.400"
						color="white"
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
							const elementToview = document.getElementById('Dataset')
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
							color="orange.400"
						/>
						<Text fontFamily="Poppins" color="white" fontSize="xl">
							Ver mais
						</Text>
						<Icon
							justifySelf="left"
							as={AiOutlineArrowDown}
							height="24px"
							w="24px"
							color="orange.400"
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
