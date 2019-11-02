// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {
      type: String,
      value: "标题"
    },
    // 弹窗内容
    content: {
      type: String,
      value: "弹窗内容"
    },
    // 取消按钮文字
    cancelText: {
      type: String,
      value: "朕不需要"
    },
    // 确认按钮文字
    confirmText: {
      type: String,
      value: "朕知道了"
    },
    // 获奖的图片
    prizeImg: {
      type: String,
      // value: "../../images/games/gua/刮奖区.png",
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    // prizeImg: '../../images/games/gua/刮奖区.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 隐藏弹窗
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 显示弹窗 -- 在引入该组件中可以获取到该方法
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    }
  }
})
