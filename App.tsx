import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { Stack, TamaguiProvider, Text, Theme } from 'tamagui'
import config from './tamagui.config'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()


export default function App() {

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <Stack f={1} ai="center" jc="center">
          <Text>test</Text>
        </Stack>
      </Theme>
    </TamaguiProvider>
  )

}
