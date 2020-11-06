// socket功能
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import store from "../store";

export function connectionSocket() {
  let socket = new SockJS('http://'+config.webSocketUrl+'/bullet');//连接SockJS的endpoint名称为"bullet"
  console.log('socket连接地址：'+'http://'+config.webSocketUrl+'/bullet');
  // 获取STOMP子协议的客户端对象
  let stompClient = Stomp.over(socket);
  // 定义客户端的认证信息,按需求配置
  let headers = {
    Authorization:store.getters.token
  };

  // 拦截输出的一大堆垃圾信息
  stompClient.debug = function (str) {
    $("#debug").append(str + "\n");
  };
  // 向服务器发起websocket连接
  stompClient.connect(headers,() => {
    stompClient.subscribe('/topic/getResponse', (response) => { // 订阅服务端提供的某个topic
      if (response.body) {
        const repObj = JSON.parse(response.body);
        if (repObj.data.webSocketType == 'ISEVehicle') { //监控管理，新版车辆监控
          if (repObj.status == 200) {
            store.dispatch('carMonitorFun', repObj);
          }  else if (repObj.data.webSocketType == 'vehicleAlarm') { //首页，车辆告警数据推送
          if (repObj.status == 200) {
            store.commit('vehicleAlarmMUTA', repObj.data);
          }
        }
      }
    });
    stompClient.subscribe('/user/'+store.getters.userRegionCode+'/queue/getResponse', (response) => { // 订阅服务端提供的某个topic
      if (response.body) {
        const repObj = JSON.parse(response.body);
         if (repObj.data.webSocketType == 'personAlarm') { //首页，人脸预警数据推送
          if (repObj.status == 200) {
            store.commit('personAlarmMUTA', repObj.data);
          }
        }
        else if (repObj.data.webSocketType == 'vehicleAlarm') { //首页，车辆告警数据推送
          if (repObj.status == 200) {
            store.commit('vehicleAlarmMUTA', repObj.data);
          }
        }
      }
    });
    stompClient.subscribe('/user/'+store.getters.token+'/queue/getResponse', (response) => { // 订阅服务端提供的某个topic
      if (response.body) {
        let repObj = JSON.parse(response.body);
        if (repObj.data.webSocketType =='task') { store.commit('monitorStatus', repObj);} //任务列表//当监控到websocket有数据返回的时候，修改monitorStatus使其发生变化即可
        else if (repObj.data.webSocketType == 'networkConfig') { store.commit('monitorStatusMUTA', repObj);}//联网配置
       
      }
    });
  }, (err) => {
    // 连接发生错误时的处理函数
    console.log('失败')
  });
}