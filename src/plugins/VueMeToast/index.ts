// import type  App from 'vue'
// // toastTimer:存储toast定时器id; toastVM:存储toast vm; showLoad:存储loading显示状态; loadNode:存储loading节点元素;
// const [toastTimer, toastVM, showLoad, loadNode] = [false, null, false, null]
// debugger

// interface ToastOpt {
//   defaultType?: string;
//   type: string;
//   duration: number;
//   wordWrap: boolean;
//   width: string;
//   [propName: string]: any;
// }

// export default {
//   install (Vue:App
// , options: ToastOpt): void {
//     // 默认配置
//     const opt: ToastOpt = {
//       type: 'bottom', // 默认显示位置
//       duration: 2500, // 持续时间
//       wordWrap: false,
//       width: 'auto'
//     }
//     // for (const property in options) {
//     //   opt[property] = options[property] // 使用 options 的配置
//     // }
//     Vue.prototype.$toast = (tips: string, type: string) => {
//       if (type) {
//         opt.defaultType = type // 如果有传type，位置则设为该type
//       }
//       if (document.getElementsByClassName('vue-toast').length) {
//         // 如果toast还在，则不再执行
//         return
//       }
//       const ToastTpl = Vue.extend({
//         template:
//           '<div class="vue-toast toast-' +
//           opt.defaultType +
//           '">' +
//           tips +
//           '</div>'
//       })
//       const tpl = new ToastTpl().$mount().$el
//       document.body.appendChild(tpl)
//       setTimeout(function () {
//         document.body.removeChild(tpl)
//       }, opt.duration)
//     }
//     ;['bottom', 'center', 'top'].forEach(type => {
//       Vue.prototype.$toast[type] = (tips: string) => {
//         return Vue.prototype.$toast(tips, type)
//       }
//     })
//   }
// }
