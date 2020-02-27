import Toast from "./Toast";
const obj = {}

 obj.install = function (Vue) {
  //console.log('执行了install函数',vue);
   //1、创建组件构造器
  const toastContrustor = Vue.extend(Toast)
   //2、new一个组件对象
   const toast = new toastContrustor()
   //3、将组件对象挂载到某一个元素上
   toast.$mount(document.createElement('div'))
   //4、toast.$el就是对应的div
   document.body.appendChild(toast.$el)
   //5、将组件添加到vue原型上
   Vue.prototype.$toast = toast
 }
export  default  obj