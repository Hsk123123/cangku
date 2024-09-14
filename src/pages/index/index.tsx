import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  let a = "第一个变量"
  const arr = ['第一个数组', '第二个数组']
  const obj = {
    name: '第一个对象',
    age: 18
  }
  let istrue = true;
  let isNull = null;
  
  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
    
  )
}
