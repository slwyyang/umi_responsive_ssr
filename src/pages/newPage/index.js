import React, { useEffect, useState } from 'react';
import TemplateOne from '../components/templateOne';
import { connect } from 'umi';
import styles from "./index.less"
import { menuData } from "./constant"


const CententBox = (props) => {
  const { data } = props
  return (
    <>
      <div
        style={{
          width: '50%',
          height: '460px',
          backgroundColor: 'pink',
          float: 'left',
        }}
        //onClick={() => props.history.push('/')}
      >
        sadsssadss
        </div>
      <div
        style={{
          width: '50%',
          height: '460px',
          backgroundColor: '#40c1bb',
          float: 'left',
        }}
      >
        sadsssadss
        </div>
      <div
        style={{
          width: '50%',
          height: '460px',
          backgroundColor: 'green',
          float: 'left',
        }}
      >
        sadsssadss&nbsp;asfasf
        </div>
      <div>
        {data.map((i, d) => (
          <div key={d}>{i}</div>
        ))}
      </div>
    </>
  )
}
const MainPic = () =>{
  return(
    <div className={styles.mainPic}>
        bigimgbo
      </div>
  )
}
const NewPage = (props) => {
  const { data } = props
  
  return (
    <div className={styles.newPage}>
      <div className={styles.topBar}>
        ✈️Free Worldwide Shipping For Orders over $40.00 ✈️ $40
      </div>
      
      <TemplateOne 
        menuData={menuData} 
        mainPic={<MainPic/>}
        cententBox={<CententBox {...props}/>}
      />
    </div>
  );
};
NewPage.getInitialProps = async ({ store, isServer }) => {
  if (!isServer) {
    return;
  }
  await store.dispatch({ type: 'newPage/getData' });
  const { newPage } = store.getState();
  console.log(newPage, '=======>newPageatastt');
  return { newPage };
}
export default connect(({ newPage }) => ({ data: newPage.data }))(NewPage);
