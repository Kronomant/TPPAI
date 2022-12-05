import React, { useCallback } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import {
	EClassificationLabel,
	EClassificationType,
	TClassification
} from 'contexts/Image'

interface IClassifyCard {
	data: TClassification
}

const ClassifyCard = ({ data }: IClassifyCard) => {
	const handleType = useCallback((type: EClassificationType) => {
		switch (type) {
			case EClassificationType.BINARY:
				return 'Classificação Binária'
			case EClassificationType.DEGREES:
				return 'Classificação por Grau'
			default:
				return ''
		}
	}, [])

	const handleLabelColor = useCallback((label: EClassificationLabel) => {
		switch (label) {
			case EClassificationLabel.ARTHROSIS:
				return 'red.500'
			case EClassificationLabel.NO_ARTHROSIS:
				return 'green.500'
			case EClassificationLabel.GRADE_0:
				return 'green.500'
			case EClassificationLabel.GRADE_1:
				return 'yellow.400'
			case EClassificationLabel.GRADE_2:
				return 'orange.400'
			case EClassificationLabel.GRADE_3:
				return 'orange.500'
			case EClassificationLabel.GRADE_4:
				return 'red.500'
			default:
				return ''
		}
	}, [])

	return (
		<Flex bgColor="#0f0e17" flexDir="column" p="30px 15px" borderRadius={'8px'}>
			<Text mb={4} fontSize="2xl" color={'white'}>
				{data?.model || handleType(data?.type)}
			</Text>

			<Flex mb={2} gap={2} alignItems="center" color={'white'}>
				<Text borderRadius="2px" p={1} bgColor={handleLabelColor(data?.label)}>
					{data?.label}
				</Text>
				<Text>{data?.prob}%</Text>
			</Flex>
			<Text fontSize="sm" color="gray.300">
				Tempo de Execução: {data?.time}s
			</Text>
		</Flex>
	)
}

export default ClassifyCard
