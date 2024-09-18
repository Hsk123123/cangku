export default defineAppConfig({
  pages: [
  'pages/index/index', "pages/com/index", "pages/route/index"],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
    {
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "assets/tabbar/zujian_an.png",
      selectedIconPath: "assets/tabbar/shouye_liang.png"
    },
    {
      pagePath: "pages/com/index",
      text: "组件",
      iconPath: "assets/tabbar/zujian_an.png",
      selectedIconPath: "assets/tabbar/zujian_liang.png"
    }],
    color: '#7A7E83',
    selectedColor: '#3cc51f'

  }
});