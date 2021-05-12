const onfire = require("../../utils/onfire1.0.6.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {}
    },
    headers: {
      type: Array,
      value: []
    },
    // 是否带有纵向边框
    border: {
      type: Boolean,
      value: false
    },
    row_class_name: {
      type: String,
      value: "row-class-name"
    },
    cell_class_name: {
      type: String,
      value: "cell-class-name"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    open: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //catchtap 阻止冒泡事件 只展开或折叠 不触发行点击事件
    toggle: function(e){
      this.setData({
        open: !this.data.open
      })
    },
    //catchtap 阻止冒泡事件 只展开或折叠 不触发行点击事件
    bubbling: function(){
      return;
    },
    onRowClick(e) {
      onfire.fire("onClickRow",e.currentTarget.dataset.it);
    }
  }
})

