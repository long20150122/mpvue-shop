import Vue from 'vue'
import App from './App'

//全局处理重复页面跳转详情初始化,和详情跳详情返回的bug
import MyPlugin from './minxins'
Vue.use(MyPlugin)

//引入store
import store from './store/index'
//把store挂载到全局
Vue.prototype.$store = store;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // "pages": ["pages/feedback/main", "pages/order/main", "pages/cart/main", "pages/mappage/main", "pages/collectlist/main", "pages/addressSelect/main", "pages/addaddress/main", "pages/address/main", "^pages/index/main", "pages/search/main", "pages/my/main", "pages/login/main", "pages/category/main", "pages/categorylist/main", "pages/topic/main", "pages/goods/main", "pages/logs/main", "pages/branddetail/main", "pages/brandlist/main", "pages/newgoods/main", "pages/practice/main", "pages/topicdetail/main"],
    // "pages": ["pages/feedback/main", "pages/order/main", "pages/cart/main", "pages/mappage/main", "pages/collectlist/main", "pages/addressSelect/main", "pages/addaddress/main", "pages/address/main", "pages/index/main", "pages/search/main", "pages/my/main", "^pages/login/main", "pages/innerLogin/main","pages/category/main", "pages/categorylist/main", "pages/topic/main", "pages/goods/main", "pages/logs/main", "pages/branddetail/main", "pages/brandlist/main", "pages/newgoods/main", "pages/practice/main", "pages/topicdetail/main"],
    "pages": ["pages/feedback/main", "pages/order/main", "pages/cart/main", "pages/mappage/main", "pages/collectlist/main", "pages/addressSelect/main", "pages/addaddress/main", "pages/address/main", "pages/index/main", "pages/search/main", "pages/my/main", "pages/login/main", "^pages/innerLogin/main","pages/category/main", "pages/categorylist/main", "pages/topic/main", "pages/goods/main", "pages/logs/main", "pages/branddetail/main", "pages/brandlist/main", "pages/newgoods/main", "pages/practice/main", "pages/topicdetail/main"],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "工艺楼梯",
      "navigationBarTextStyle": "black"
    },
    "tabBar": {
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#b4282d",
      "color": "#666",
      "list": [{
          "pagePath": "pages/index/main",
          "iconPath": "static/images/ic_menu_choice_nor.png",
          "selectedIconPath": "static/images/ic_menu_choice_pressed.png",
          // "text": "首页"
          "text": "快速下单"
        },
        // {
        //   "pagePath": "pages/topic/main",
        //   "iconPath": "static/images/ic_menu_topic_nor.png",
        //   "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
        //   "text": "专题"
        // },
        // {
        //   "pagePath": "pages/category/main",
        //   "iconPath": "static/images/ic_menu_sort_nor.png",
        //   "selectedIconPath": "static/images/ic_menu_sort_pressed.png",
        //   "text": "分类"
        // },
        {
          "pagePath": "pages/cart/main",
          "iconPath": "static/images/ic_menu_shoping_nor.png",
          "selectedIconPath": "static/images/ic_menu_shoping_pressed.png",
          // "text": "购物车"
          "text": "我的订单"
        },
        {
          "pagePath": "pages/my/main",
          "iconPath": "static/images/ic_menu_me_nor.png",
          "selectedIconPath": "static/images/ic_menu_me_pressed.png",
          // "text": "我的"
          "text": "信息管理"
        }
      ]
    },
    'usingComponents': {
      'van-field': '/static/vant/field/index',
      
      'van-search': '/static/vant/search/index',
      'van-row': '/static/vant/row/index',
      'van-col': '/static/vant/col/index',
      'van-tab': '/static/vant/tab/index',
      'van-tabs': '/static/vant/tabs/index',
      'van-cell': '/static/vant/cell/index',
      'van-cell-group': '/static/vant/cell-group/index',
      'van-radio': '/static/vant/radio/index',
      'van-radio-group': '/static/vant/radio-group/index',
      'van-button': '/static/vant/button/index',
      'van-card': '/static/vant/card/index',
      'van-popup': '/static/vant/popup/index',
      'van-icon': '/static/vant/icon/index',
      'van-panel': '/static/vant/panel/index',
      'van-action-sheet': '/static/vant/cell-group/index',
      // 'van-switch-cell': '/static/vant/switch-cell/index',
      'van-area': '/static/vant/area/index',
      'van-dialog': '/static/vant/dialog/index'
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于工艺楼梯使用"
      }
    }
  }
}
