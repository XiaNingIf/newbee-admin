import { createApp } from 'vue'
import { ElButton, ElContainer, ElAside, ElHeader, ElMain, ElFooter, ElMenu, ElSubmenu, ElMenuItemGroup, ElMenuItem, ElForm, ElFormItem, ElInput, ElPopover, ElTag, ElCard, ElTable, ElTableColumn, ElPagination, ElDialog, ElPopconfirm, ElUpload, ElLoading, ElSelect, ElOption, ElRadioGroup, ElRadio, ElCascader, ElCheckbox, ElInputNumber } from 'element-plus'
import App from './App.vue'
import router from '@/router'

import '~/theme/index.css'

const app = createApp(App)

app.use(router)

app.use(ElButton)
    .use(ElContainer)
    .use(ElAside)
    .use(ElHeader)
    .use(ElMain)
    .use(ElFooter)
    .use(ElMenu)
    .use(ElSubmenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElPopover)
    .use(ElTag)
    .use(ElCard)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElPagination)
    .use(ElDialog)
    .use(ElPopconfirm)
    .use(ElUpload)
    .use(ElLoading)
    .use(ElSelect)
    .use(ElOption)
    .use(ElRadioGroup)
    .use(ElRadio)
    .use(ElCascader)
    .use(ElCheckbox)
    .use(ElInputNumber)

app.config.globalProperties.$filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            // 当 url 以 http 开头时候，我们返回原路径
            return url
        } else {
            // 否则，我们给路径添加 host，如下
            url = `http://localhost:28019${url}`
            return url
        }
    }
}

app.config.globalProperties.goTop = function () {
    const main = document.querySelector('.main')
    main.scrollTop = 0
}

app.mount('#app')
