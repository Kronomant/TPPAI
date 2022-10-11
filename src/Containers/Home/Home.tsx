import React from 'react'

import { Flex } from '@chakra-ui/react'
import Container from 'Components/Core/Container'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Banner from 'Components/Presentation/Home/Banner'
import Devs from 'Components/Presentation/Home/Devs'
import DataSet from 'Components/Presentation/Home/DataSet'
import References from 'Components/Presentation/Home/References'

const Home: React.FC = () => {
	return (
		<Container>
			<Flex
				id="Home"
				scrollMargin="160px"
				w="100%"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				gap={24}
			>
				<Banner />
				<DataSet />
				<Devs />
				<References />
			</Flex>
		</Container>
	)
}
export default Home
