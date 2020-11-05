import { post } from "../apiConfig/axios"
const getPageData = () => {
  return post("/users/newPage", {})
}
export default {
  namespace: 'newPage',
  state: {
    data: []
  },

  effects: {
    *getData({ payload }, { call, put }) {
      const data = yield call(getPageData, { anum: payload }) 
      console.log(data, 'ressss');
      yield put({
        type: "setData",
        payload: {
          data: data, 
        },
      })
    },
  },

  reducers: {
    setData(state, { payload }) {
      state.data = payload.data;
    },
  },
};
