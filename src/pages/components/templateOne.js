import React, { useState } from 'react';
import styles from './templateOne.less';
import { Button, Menu } from 'antd';

const { SubMenu } = Menu;

const bottomText = ["asdl", "fsaf", "fsafsasff", "fssaf", "fsaf",
  "fsafsasff", "fssaf", "fsaf", "fsafsasff", "fssaf", "fssaf", "fsaf", "fsafsasff", "fssaf"]

  
export default (props) => {
  // show为false 小屏导航关闭
  const [show, setShow] = useState(false);
  const toogle = () => {
    setShow(!show);
  };
  const bubbles = (e) => {
    var ev = e || window.event;
    if (ev && ev.stopPropagation) {
      //非IE浏览器
      ev.stopPropagation();
    } else {
      //IE浏览器(IE11以下)
      ev.cancelBubble = true;
    }
  };
  const onOpenChange = (openKeys) => { };
  const getMenuELement = (menuData) => {
    return (
      <>
        {menuData.map(item => (
          <SubMenu key={item.key} title={item.title} icon={item.icon}>
            {item.children &&
              item.children.map(i => {
                if (i.children) {
                  const tem = (
                    <React.Fragment key={i.key}>
                      {getMenuELement([i])}
                    </React.Fragment>
                  );
                  return tem;
                } else {
                  return <Menu.Item key={i.key}>{i.title}</Menu.Item>;
                }
              })}
          </SubMenu>
        ))}
      </>
    );
  };

  return (
    <div className={styles.box} onClick={() => show && setShow(false)}>
      {/* 侧边导航菜单 start */}
      <div
        className={`${styles.left} ${show ? styles.leftShow : ''}`}
        onClick={bubbles}
      >
        {props.menuData ? (
          props.menuData instanceof Array ? (
            <Menu
              mode="inline"
              onOpenChange={onOpenChange}
              style={{ width: 256 }}
            >
              {getMenuELement(props.menuData)}
            </Menu>
          ) : (
              props.menuData
            )
        ) : null}
      </div>
      {/* 侧边导航菜单 end */}

      {/* 小屏时页面布局 */}
      <div className={`${styles.smScreenRight} ${!show ? styles.rightshow : ''}`}>
        <div style={{ backgroundColor: '#b7a414' }}>
          <Button type="primary" onClick={toogle}>
            toogle
            </Button>
            Page index
          </div>
        <div style={{ width: '100%', overflow: "hidden" }}>
          {props.cententBox ? props.cententBox : null}
        </div>
        {/* 底部 */}
        <BottomBox />
        {/* 底部 */}
      </div>
      {/* 大屏时页面布局 */}
      <div
        className={`${styles.bgScreenRight} ${!show ? styles.rightshow : ''}`}
      >
        {
          props.mainPic ? props.mainPic : null
        }
        <div className={styles.bgContentBox}>
          {props.cententBox ? props.cententBox : null}
        </div>
        {/* 底部 */}
        <BottomBox />
        {/* 底部 */}
      </div>
    </div>
  );
};

const BottomBox = () => {
  return (
    <div className={styles.bgBottomBox}>
      <div className={styles.bottomTop}>
        {
          bottomText.map((i, d) => <div key={d} className={styles.btBoxItem}>{i}</div>)
        }
      </div>
    </div>
  )
}
