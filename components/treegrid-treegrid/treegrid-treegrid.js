
//treegrid-treegrid.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //树形表格的数据源
    data: {
      type: Object,
      value: {}
    },
    //表头数据
    headers: {
      type: Array,
      value: []
    },
    // 设置表格的最大显示高度, 溢出可滚动
    maxHeight: { 
      type: String,
      value: 'auto'
    },
    //设置表格的显示宽度
    width: {
      type: Number || String,
      value: '100%'
    },
    // 单元格的宽度
    tdWidth: {
      type: Number,
      value: 35
    },
    // 固定表头 thead达到Header的位置时就应该被fixed了
    offsetTop: {
      type: Number,
      value: 150
    },
    // 是否带有纵向边框
    border: {
      type: Boolean,
      value: false
    }, 
    msg: {
      type: String,
      value: '暂无数据~'
    },
    header_row_class_name: {
      type: String,
      value: "header-row-class-name"
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
    scrolWidth: '100%'
  },

  //数据监听器
  observers: {
    'headers': function (headers) {
      const reducer = (accumulator, currentValue) => {
        return accumulator + Number(currentValue.width)
      };
      const scrolWidth = headers.reduce(reducer, 0)

      this.setData({
        scrolWidth: scrolWidth
      })
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
