import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface IContainerProps {
	children: ReactNode
}

const Container: React.FC<IContainerProps> = ({ children }) => (
	<Flex flexDir="column" w="100%" h="100%" m="0 auto">
		<Header />
		{children}
		<Footer />
	</Flex>
)

export default Container
