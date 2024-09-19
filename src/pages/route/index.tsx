import { View, Text, Button, } from '@tarojs/components'
import Taro,{ useLoad } from '@tarojs/taro'
import './index.scss'

export default function Route () {
  useLoad((options) => {
    console.log('options', options)
    console.log('id', options.id)
    console.log('id', options.sex)
  })
  console.log(Taro.ENV_TYPE);

  //获取当前环境
  console.log(Taro.getEnv());

  //不同环境打印不同内容
  const env = Taro.getEnv();
  if (env =="WEB"){
    console.log('当前环境是WEB')
  }else if (env =="WEAPP"){
    console.log('当前环境是WEAPP')
  }


  function handleClickMassage () {
    Taro.showToast({
      title: '消息弹框',
      icon:"loading",
      duration: 2000,
      mask: true,
      
      success(res) {
        console.log('弹出成功')
      }
    })
  }
  function handleClickModel () {
    Taro.showModal({
      title:"这是一个对话框",
      content:"这里面是内容",
      success(result) {
          console.log(result);
          if(result.confirm){
            console.log('点了确定');
          
          }else if(result.cancel){
            console.log('点了取消')
          }
      },
    })
  }
  function handleClickLoading () {
    Taro.showLoading()
  }
  function handleClickSheet () {
    let list = ["aa","bb","cc"]
    Taro.showActionSheet({
      itemList:list,
      success(result) {
          console.log(result);
          console.log(list[result.tapIndex])
      },
    })
  }
  function handleClickTitle () {
    Taro.setNavigationBarTitle({
      title:"路由页面"
    })
  }
  function handleClickColor () {
    Taro.setNavigationBarColor({
      frontColor:"#ffffff",
      backgroundColor:"#ff0000",
      animation:{
        duration:500,
        timingFunc:"easeIn"
      }
    })
  }

  return (
  <View className='route'>
    <Button onClick={handleClickMassage}>消息弹框</Button>
    <Button onClick={handleClickModel}>对话框</Button>
    <Button onClick={handleClickLoading}>加载中</Button>
    <Button onClick={handleClickSheet}>操作菜单</Button>
    <Button onClick={handleClickTitle}>设置标题</Button>
    <Button onClick={handleClickColor}>设置标题颜色</Button>
  </View>

  )
}
