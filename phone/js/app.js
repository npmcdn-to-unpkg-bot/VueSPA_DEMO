//路由器需要一个根组件。
let Menu = Vue.extend({});
// 创建一个路由器实例
let router = new VueRouter();
// 定义路由规则
router.map({
    '/': {
        name:'home',
        component: function(reslove){
            return require(['../components/index.vue'],reslove)
        }
    },
    '/login': {
        component: function(reslove){
            return require(['../components/login.vue'],reslove)
        }
    },   
    '/users/edit': {
        component: function(reslove){
            return require(['../components/users/edit.vue'],reslove)
        }
    },
    '/users/edit/:id': {
        component: function(reslove){
            return require(['../components/users/edit.vue'],reslove)
        }
    },
    '/users': {
        component:  function(reslove){
            return require(['../components/users/list.vue'],reslove)
        }
    }
});


// 现在我们可以启动应用了！
router.start(Menu, '#app');
