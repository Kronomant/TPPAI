import React from 'react'
import InputImage from '../InputImage'
import { Flex, HStack, Text } from '@chakra-ui/react'
import FormData from 'form-data'
import { TClassification, TCNN } from 'contexts/Image'
import ClassifyCard from '../ClassifyCard'

interface IResNetProps {
	cnn: TCNN
}

const ResNet = ({ cnn }: IResNetProps) => {
	const form = new FormData()
	return (
		<Flex w={'100%'} flexDir="column" alignItems="center">
			<InputImage form={form} />
			{cnn && (
				<Flex
					w={'100%'}
					flexDir="column"
					padding="40px 20px"
					border="2px"
					borderColor="gray.200"
					borderRadius="16px"
				>
					<Text fontSize="3xl" fontWeight="bold">
						ResNet
					</Text>
					<Flex w={'100%'} my={4} gap={8} flexDir="column">
						<Text fontSize="2xl" color={'orange.400'}>
							Classificação Binária
						</Text>
						<HStack>
							{cnn?.binary?.map((item: TClassification) => (
								<ClassifyCard key={item?.prob} data={item} />
							))}
						</HStack>
					</Flex>
					<Flex w={'100%'} my={4} gap={8} flexDir="column">
						<Text fontSize="2xl" color={'orange.400'}>
							Classificação por Grau
						</Text>
						<HStack>
							{cnn?.degrees?.map((item: TClassification) => (
								<ClassifyCard key={item?.prob} data={item} />
							))}
						</HStack>
					</Flex>
				</Flex>
			)}
		</Flex>
	)
}

export default ResNet
