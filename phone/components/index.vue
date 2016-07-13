<template>
    <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">9宫格默认样式</h1>
    </header>
    <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a v-link="'users'">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">Setting</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">about</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">more</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    module.exports = {
        route: {
            activate: function (transition) {
                console.log('hook-example activated!')
                if (localStorage.getItem("user") == null) {
                    transition.redirect("/login" );
                }else{
                    transition.next();
                }
            },
            deactivate: function (transition) {
                console.log('hook-example deactivated!')
                transition.next()
            }
        },
        data: {},
        ready: function () {
            console.log('in index');
        },
        methods: {
            login: function () {
                console.log(this.$router);
                localStorage.setItem("user", "admin");
                this.$router.go({ path: "/" })
            }
        }
    }
</script>