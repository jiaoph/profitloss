import axios from "axios";
import qs from "qs";
import { Message, Loading } from "element-ui";


const Axios = axios.create({
  baseURL: "http://192.168.1.65:8080",
  // baseURL: "http://192.168.1.76",
  // baseURL: "http://192.168.1.76",
  timeout: 5000,
  responseType: "json",
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  }
});

let loadingInstance = null;

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token;
    // }

    loadingInstance = Loading.service({
      text: '正在加载...'
    });

    return config;
  },
  error => {
    console.log(error)
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: "error"
    });
    loadingInstance.close()
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  res => {
    // console.log(res)
    loadingInstance.close()
    if (res.status != 200) {
      alert(res.statusText);
      return Promise.reject(res);
    }
    return res;
  },
  error => {
    loadingInstance.close()
    Message.error({
      message: '加载失败',
      type: "error"
    })
    
    // 返回 response 里的错误信息
    // let errorInfo =  error.data.error ? error.data.error.message : error.data;
    return Promise.reject(error);
  }
);


export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};