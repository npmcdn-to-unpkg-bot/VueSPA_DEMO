let index = require('../components/index.vue');
let users = require('../components/users/list.vue');
let users_edit = require('../components/users/edit.vue');
let login = require('../components/login.vue');
let foo = require('../components/foo.vue');
let bar = require('../components/bar.vue');



//路由器需要一个根组件。
let Menu = Vue.extend({});
// 创建一个路由器实例
let router = new VueRouter();
// 定义路由规则
router.map({
    '/': {
        component: index
    },
    '/login': {
        component: login
    },
    '/foo': {
        component: foo
    },
    '/bar': {
        component: bar
    },
    '/users/edit': {
        component: users_edit
    },
    '/users/edit/:id': {
        component: users_edit
    },
    '/users': {
        component: users
    }
});


// 现在我们可以启动应用了！
router.start(Menu, '#app');
