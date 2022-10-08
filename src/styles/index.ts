import { extendTheme, ThemeOverride } from '@chakra-ui/react'

import fonts from './fonts'
import global from './global'

const theme: ThemeOverride = extendTheme({
	styles: {
		global
	},
	fonts
})

export default theme
