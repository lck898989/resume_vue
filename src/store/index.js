import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);
const state = {
    name : 'lck'
}
const store = new Vuex.Store({
    state,
    getters, //获取数据并渲染
    actions, //数据的异步操作
    mutations, //处理数据的唯一途径，state的改变或赋值只能在这里
})
export default store; //这页面入口文件进行注册