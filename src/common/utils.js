//防抖函数
export  function  debounce(fun,time){
    let timer = null
    if(timer)
      clearTimeout(timer)
    timer = setTimeout(() => {
      return function (...args) {
        fun.apply(this,args)
      }
    },time)
}