/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-04-02 09:14:44
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-02 12:07:46
 */
import ElementPlus from 'element-plus'
// import { createI18n } from 'vue-i18n'
import 'element-plus/lib/theme-chalk/index.css'
// import localeZH from 'element-plus/lib/locale/lang/zh-cn'
// import localeEN from 'element-plus/lib/locale/lang/en'
// import messages from '../utils/i18n'
// console.log(msg)

// const messages = {
//   [localeEN.name]: {
//     el: localeEN.el,
//     i18n: msg.en.i18n,
//   },
//   [localeZH.name]: {
//     el: localeZH.el,
//     i18n: msg.zh.i18n,
//   },
// }

// const i18n = createI18n({
//   locale: localeZH.name,
//   fallbackLocale: localeEN.name,
//   messages,
// })

export default (app) => {
  app.use(ElementPlus)
  // app.use(i18n)
}
