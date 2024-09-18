import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Route () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='route'>
      <Text>Hello world!</Text>
    </View>
  )
}
