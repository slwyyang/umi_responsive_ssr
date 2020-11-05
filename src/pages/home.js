import React from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet } from 'umi';
import { Button } from 'antd';

const Home = (props) => {
  const { title, data } = props;
  console.log('renderd', title, data);
  const changeLangs = () => {
    const lang = getLocale();
    console.log('changeLangs', lang);
    const change = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
    //     // 刷新页面
    // setLocale('zh-TW', true);
    // // 不刷新页面
    setLocale(change, false);
  };
  const intl = useIntl();
  return (
    <div>
      <h1>{title+'asdaf'}</h1>
      {
            data && data.length > 0 &&
            data.map((i,d)=><div key={d}>{i}</div>
            )
          }
      <Helmet>
        <title>{title}</title>
        <div>
          
        </div>
      </Helmet>
      <h2>
        {intl.formatMessage({
          id: 'umi',
        })}
      </h2>
      <Button onClick={changeLangs}>home</Button>
    </div>
  );
};
Home.getInitialProps = async ({ store, isServer, history, match, route }) => {
   console.log(store,'store');
  if (!isServer) {
    return;
  }
  // const res = post('/users/create',{})
  // console.log(res);
  await store.dispatch({ type: 'test/fetchNum' });
  const { test } = store.getState();
  console.log(test,'atastt');
  return { test };
};

export default connect(({ test }) => ({ title: test.title,data: test.data }))(Home);
