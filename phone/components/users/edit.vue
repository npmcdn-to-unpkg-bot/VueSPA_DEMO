<template>
    <div v-show="!isinselect">
        <header class="mui-bar mui-bar-nav">
            <a v-link="'/users'" class=" mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">普通列表</h1>
        </header>
        <div class="mui-content">
            <form id="mainForm" class="mui-input-group">
                <div class="mui-input-row">
                    <label>用户</label>
                    <input type="text" v-model="dataStore.userName" class="mui-input-clear" name="userName" required />
                </div>
                <div class="mui-input-row">
                    <label>邮箱</label>
                    <input type="email" v-model="dataStore.email" name="email" class="mui-input-clear" required />
                </div>
                <div class="mui-input-row">
                    <label class="col-md-2 control-label">手机</label>
                    <input type="tel" v-model="dataStore.phoneNumber" name="phoneNumber" class="mui-input-clear" required />
                </div>
                <div class="mui-input-row">
                    <label>密码</label>

                    <input type="password" v-model="dataStore.passwordHash" class="mui-input-password" />

                </div>
                <div class="mui-input-row">
                    <label>重复密码</label>
                    <input type="password" class="mui-input-password" />
                </div>
                <div class="mui-input-row">
                    <label>选择测试</label>
                    <input type="text"  v-model="selectedval" v-on:click="openselect" required placeholder="请选择" />
                </div>
                <div class="mui-button-row">
                    <button type="submit" class="mui-btn mui-btn-primary"> 保存 </button>
                    <a v-link="{path:'/users'}" class="mui-btn mui-btn-danger"> 取消 </a>
                </div>
            </form>
        </div>
    </div>
  <div v-show="isinselect">
      <my-select :isinselect.sync="isinselect" :selected.sync="selectedval" ></my-select>
  </div>
</template>

<script>
    Vue.component('my-select', require('../shared/select.vue'))
    module.exports = {
        data: {
            dataStore: {},
            isinselect: 0
        },
        ready: function() {
            var self = this;
            //var _id = (this.$route.params.id || '0');
            //this.$http.get('api/users/' + _id, function (rst) {
            //    this.$set('dataStore', rst); 
            //}).error(function (rst, status, request) {
            //    console.log('fail' + status + "," + request);
            //});
            // if (!_id) {

            // }
            // $('#mainForm').formValidation(AppConfig.FV_OPTIONS.DEFAULT).on('success.form.fv', function(e) {
            //     e.preventDefault();
            //     var $form = $(e.target),
            //         fv = $(e.target).data('formValidation'); // FormValidation instance

            //     var $btn = $(e.currentTarget);

            //     self.$http.post('api/users', self.dataStore, function(rst) {
            //         toastr.success("保存成功", "提示", AppConfig.TOASTR_OPTIONS.DEFAULT);
            //     }).error(function(rst, status, request) {
            //         toastr.error('fail' + status + "," + request);
            //     });

            //     return false;
            // });
        },
        methods: {
            openselect: function() {
                this.$set('isinselect', 1);
            }
        }
    }
</script>