
const app = getApp()
const onfire = require("../../utils/onfire1.0.6.js");
Page({
  data: {
    tableHeader: [
      {
        prop: 'deviceAddress',
        width: 400,
        label: '通讯地址',
        color: '#55c355'
      },
      {
        prop: 'deviceType',
        width: 300,
        label: '设备类型'
      },
      {
        prop: 'deviceStatus',
        width: 150,
        label: '设备状态',
      },
      {
        prop: 'deviceToken',
        width: 400,
        label: '资产编号'
      },
      {
        prop: 'routName',
        width: 300,
        label: '线路名称'
      },
      {
        prop: 'lineloss',
        width: 150,
        label: '线损率'
      }
    ],
    border: true,
    outBorder: true,
    maxHeight:"90vh",
    row: {
      "id": 1,
      "level": 1,
      "deviceAddress": '52010001',
      "deviceType": "移动式监测仪",
      "deviceStatus": '在线',
      "deviceToken": '52010001',
      "routName": '线路一号',
      "lineloss": '21.02%',
      "nodes": [
        {
          "id": 2,
          "level": 2,
          "deviceAddress": '52010001',
          "deviceType": "移动式监测仪",
          "deviceStatus": '在线',
          "deviceToken": '52010001',
          "routName": '线路一号',
          "lineloss": '21.02%',
          "nodes": [
            {
              "id": 3,
              "level": 3,
              "deviceAddress": '52010001',
              "deviceType": "移动式监测仪",
              "deviceStatus": '在线',
              "deviceToken": '52010001',
              "routName": '这是一个很长名字的线路',
              "lineloss": '21.02%',
              "nodes": []
            }
          ]
        },
        {
          "id": 4,
          "level": 2,
          "deviceAddress": '52010001',
          "deviceType": "移动式监测仪",
          "deviceStatus": '在线',
          "deviceToken": '52010001',
          "routName": '线路一号',
          "lineloss": '21.02%',
          "nodes": []
        }
      ]
    },
    row_class_name: "tr",
    cell_class_name: ""
  },
  //事件处理函数
  onLoad: function () {
  },
  onShow: function(){
    onfire.un("onClickRow");
    onfire.on("onClickRow",function(data){
      console.log(data);
    });
  }
})

