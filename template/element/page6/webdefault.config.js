export default {
  name: 'page6',
  version: '0.0.1',
  data: {
    template: require('raw-js!./Page'),
    dataSource: [
      {
        key: 'height',
        name: '区块高度',
        value: '320px',
      },
      {
        key: 'bgImg',
        name: '背景图片',
        value: 'https://os.alipayobjects.com/rmsportal/cvoQWlUZsvZlWsB.jpg',
      },
      {
        key: 'block1',
        name: '图片区块1',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'block2',
        name: '图片区块2',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'block3',
        name: '图片区块3',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'block4',
        name: '图片区块4',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
    ],
    variables: [
      {
        key: 'type',
        name: '样式',
        value: 'bottomPosition',
      },
      {
        key: 'ease',
        name: '缓动',
        value: 'easeOutQuart',
      },
      {
        key: 'duration',
        name: '时长',
        value: 450,
      },
      {
        key: 'interval',
        name: '间隔',
        value: 100,
      },
      {
        key: 'delay',
        name: '延迟',
        value: 0,
      },
    ],
  },
};
