// pages/history-detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.doGetDetail(options.id);
  },

  /**
   * 监听图片点击
   */
  onPicTap: function () {
    const pics = this.data.detail.picUrl;
    const urls = pics.map(item => item.url);
    wx.previewImage({
      urls
    })
  },

  /**
   * 执行获取详情
   */
  doGetDetail: function (id) {
    wx.showLoading({
      title: '加载中',
    });
    wx.cloud.callFunction({
      name: 'historyDetail',
      data: {
        id
      }
    }).then(res => {
      wx.hideLoading();
      const detail = res.result[0]
      console.log(detail);
      this.setData({
        detail
      })
    });
  }
})