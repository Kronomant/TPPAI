export const referencesData = [
	{
		name: 'Fully automatic knee osteoarthritis severity grading using deep neural networks with a novel ordinal loss',
		description:
			'Knee osteoarthritis (OA) is one major cause of activity limitation and physical disability in older adults. Early detection and intervention can help slow down the OA degeneration. Physicians grading based on visual inspection is subjective, varied across interpreters, and highly relied on their experience. In this paper, we successively apply two deep convolutional neural networks (CNN) to automatically measure the knee OA severity, as assessed by the Kellgren-Lawrence (KL) grading system. Firstly, considering the size of knee joints distributed in X-ray images with small variability, we detect knee joints using a customized one-stage YOLOv2 network. Secondly, we fine-tune the most popular CNN models, including variants of ResNet, VGG, and DenseNet as well as InceptionV3, to classify the detected knee joint images with a novel adjustable ordinal loss. To be specific, motivated by the ordinal nature of the knee KL grading task, we assign higher penalty to misclassification with larger distance between the predicted KL grade and the real KL grade. The baseline X-ray images from the Osteoarthritis Initiative (OAI) dataset are used for evaluation. ',
		link: 'https://pubmed.ncbi.nlm.nih.gov/31238184/',
		image: '/images/article.png'
	}
]
