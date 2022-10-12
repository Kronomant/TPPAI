import React from 'react'

import ReferencesCard from 'Components/Presentation/Home/ReferencesCard'
import { referencesData } from 'contexts/Image/Image.data'

import { Flex, Text } from '@chakra-ui/react'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const References: React.FC = () => (
	<Flex
		id="References"
		scrollMargin="160px"
		flexDir="column"
		maxW="1400px"
		alignItems="center"
		mb={24}
	>
		<Text
			fontFamily="Poppins"
			fontSize="5xl"
			fontWeight="semibold"
			color="#0C1E39"
			mb={4}
		>
			Trabalhos relacionados
		</Text>
		<Text
			color="#f25f4c"
			fontFamily="Poppins"
			fontSize="2xl"
			fontWeight="hairline"
			mb={16}
		>
			Referências
		</Text>
		<Swiper navigation modules={[Navigation, Pagination]} className="mySwiper">
			{referencesData.map(item => (
				<SwiperSlide key={item.name}>
					<ReferencesCard
						title={item.name}
						link={item.link}
						image={item.image}
						description={item.description}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	</Flex>
)

export default References
