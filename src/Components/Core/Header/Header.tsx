import React from 'react'

import { HStack, Text, Image, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Header = () => {
	const route = useRouter()

	const handleScroll = (ref: string) => {
		const elementToview = document.getElementById(ref)
		elementToview
			? elementToview.scrollIntoView({ behavior: 'smooth', block: 'start' })
			: route.push(`/#${ref}`)
	}

	return (
		<HStack
			position="sticky"
			zIndex={3}
			top="0"
			p="20px 32px"
			justifyContent="space-between"
			color={'white'}
			backgroundColor="#0f0e17"
		>
			<Flex alignItems="center" gap="12px">
				<Image w="24px" height="24px" src="/favorite.png" />
				<Text fontSize="2xl" fontFamily="Poppins" fontWeight="semibold">
					TI VI
				</Text>
			</Flex>

			<HStack spacing={20} justifyContent="space-between">
				<Text
					_hover={{ color: 'var(--chakra-colors-pink-400)' }}
					fontFamily="Poppins"
					cursor="pointer"
					onClick={() => handleScroll('Home')}
				>
					Home
				</Text>
				<Text
					_hover={{ color: 'var(--chakra-colors-pink-400)' }}
					fontFamily="Poppins"
					cursor="pointer"
					onClick={() => handleScroll('Devs')}
				>
					Sobre nós
				</Text>
				<Text
					_hover={{ color: 'var(--chakra-colors-pink-400)' }}
					fontFamily="Poppins"
					cursor="pointer"
					onClick={() => handleScroll('Dataset')}
				>
					Base de Dados
				</Text>
				<Text
					_hover={{ color: 'var(--chakra-colors-pink-400)' }}
					fontFamily="Poppins"
					cursor="pointer"
					onClick={() => handleScroll('References')}
				>
					Trabalhos relacionados
				</Text>
			</HStack>
		</HStack>
	)
}

export default Header
