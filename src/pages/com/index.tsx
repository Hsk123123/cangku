import { View, Text,Navigator } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Com () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='com'>
      <Text>Hello world!</Text>
    </View>
  )

  {
   
    <Navigator url='/pages/route/index' openType='navigate' >
    <Text>跳转到route页面</Text>
    </Navigator>

    <Navigator url='/pages/route/index' openType='redirect' >
    <Text>跳转到route页面</Text>
    </Navigator>

    <Navigator url='/pages/route/index' openType='switchTab' >
    <Text>跳转到route页面</Text>
    </Navigator>
  
   

  }
  
}
