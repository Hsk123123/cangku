import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { VIEW} from '@tarojs/runtime'
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
  let isUndefined = undefined;
  function test() {
    console.log('test')
  }
  
  return (
    <>
    <View>{a}</View>
    <View>{arr}</View>
    <View>{obj.name}</View>
    <View>{obj.age}</View>
    <View>{istrue}</View>
    <View>{isNull}</View>
    <View>{isUndefined}</View>
    
     <View className='index'>
      <Text>Hello 第2次推送!</Text>
      <Text>第一个数组</Text>
      <Text>第二个数组</Text>
      <Text>第一个变量</Text>
      <Text>18</Text>
      <Text>张山</Text>
    </View>
    </>
   
    
  )
}
