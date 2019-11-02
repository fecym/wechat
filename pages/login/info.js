// pages/login/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    userinfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 登录获取用户信息
   */
  getUsername(e) {
    console.log(e.detail.value)
    this.setData({
      username: e.detail.value
    })

  },
  getPassword(e) {
   this.setData({
     password: e.detail.value
   })
  },
  getInfo() {
    const _this = this 
    wx.request({
      url: 'http://192.168.199.150:8080/api/login',
      method: 'post',
      data: {
        username: _this.data.username,
        password: _this.data.password
      },
      success(result) {
        console.log(result)
        _this.setData({
          userinfo: result.data.data
        })
      }
      
    })
  },
  login: function () {
    console.log(1)
    console.log(this.data.username)
    this.getInfo()
  },

})