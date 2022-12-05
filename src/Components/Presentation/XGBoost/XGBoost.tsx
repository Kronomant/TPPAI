import React from 'react'
import { Flex, HStack, Text } from '@chakra-ui/react'
import ClassifyCard from '../ClassifyCard'
import { TClassification } from 'contexts/Image'

interface IXGBoostProps {
	title: string
	xgboost: TClassification[]
}

const XGBoost = ({ title, xgboost }: IXGBoostProps) => (
	<>
		{xgboost && (
			<Flex
				flexDir="column"
				padding="40px 20px"
				border="2px"
				borderColor="gray.200"
				borderRadius="16px"
			>
				<Text fontSize="3xl" fontWeight="bold">
					{title}
				</Text>
				<HStack>
					{xgboost?.map(item => (
						<ClassifyCard key={item?.prob} data={item} />
					))}
				</HStack>
			</Flex>
		)}
	</>
)

export default XGBoost
