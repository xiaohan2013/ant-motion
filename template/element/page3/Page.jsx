import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Button from 'antd/lib/button';
import animType from '../../common/animType';
import './page.less';

class Page3 extends React.Component {
  render() {
    const { img, text, height } = this.props.dataSource;
    const { title, content, button } = text;
    const { type, delay, interval, duration, ease } = this.props.variables;
    const animData = ['one', 'tow'].map((order, i) => {
      const anim = animType[type][order] || animType[type].one;
      anim.animation.delay = i * (interval || 100) + delay;
      anim.animation.ease = ease;
      anim.animation.duration = duration;
      anim.delay = delay;
      anim.ease = ease;
      anim.duration = duration;
      // 间隔只给区块队列动画使用.. queueAnim 用;
      anim.interval = interval;
      anim.animation.type = 'from';
      return anim;
    });
    const _height = height.replace(/[0-9|.]/g, '') ? height : `${height}px`;
    return (
      <OverPack scrollName="page3"
        className={`content ${this.props.className} root`}
        id={this.props.id}
        style={{ height: _height }}
      >
        <QueueAnim {...animData[0]} hideProps={{ child: null }} key="text" className="text">
          {typeof text === 'object' ? [<h2 key="h2">{title}</h2>,
          <p key="p" dangerouslySetInnerHTML={{ __html: content }} ></p>,
          <Button key="button" type="ghost">{button}</Button>] : null}
        </QueueAnim>
        <TweenOne {...animData[1]}
          hideProps={{ reverse: true }}
          key="img"
          className="img"
        >
          <img src={img} width="352" />
        </TweenOne>
      </OverPack>
    );
  }
}

Page3.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Page3.defaultProps = {
  className: 'page3',
  dataSource: {
    height: '380px',
    img: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
    text: {
      title: 'Ant Motion Demo',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      'Image source from the network Demo, please upload pictures to replace.',
      button: 'Learn More',
    },
  },
  variables: {
    type: 'leftRightPoly',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Page3;
