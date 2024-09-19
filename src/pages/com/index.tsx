import { View, Text,Navigator, Button } from '@tarojs/components'
import Taro,{ useLoad } from '@tarojs/taro'
import './index.scss'


export default function Com () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  function handleNavigate1 () {
    Taro.navigateTo({
      url:'/pages/route/index?id=1&name=wujun&sex=男'
    })
    
  }
  function handleNavigate2 () {
    Taro.redirectTo({
      url:'/pages/route/index'
    })
  }
  function handleNavigate3 () {
    Taro.switchTab({
      url:'/pages/route/index'
    })
  }
  return (
    <> 
    <Navigator url='/pages/route/index?id=100' openType='navigate' >
    <Text>跳转到route页面</Text>
    </Navigator>

    <Navigator url='/pages/route/index?id=200&name=wujun' openType='redirect'>
    <Text>跳转到route页面</Text>
    </Navigator>

    <Navigator url='/pages/route/index' openType='switchTab' >
    <Text>跳转到route页面</Text>
    </Navigator>

    <Button onClick={handleNavigate1} type='primary'>跳转到route页面</Button>
    <Button onClick={handleNavigate2} type='warn'>跳转到route页面</Button>
    <Button onClick={handleNavigate3} type='default'>跳转到route页面</Button>
    </>
   
  )

  
}
