<style>
    .title {
        margin: 20px 15px 7px;
        color: #6d6d72;
        font-size: 15px;
    }
</style>
<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a v-link="'/'" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">普通列表</h1>
        </header>
        <div class="mui-content">
            <div class="title">
                card（圆角列表）
            </div>
            <div class="mui-card" style="margin-bottom: 35px;">
                <ul class="mui-table-view">
                    <li v-for="item in [1,2,3]" class="mui-table-view-cell" >
                        <a href="#!/users/edit/{{item}}" class="mui-navigate-right">
                            item {{item}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: {
            pagelist: [1, 2]
        },
        ready: function() {
            //alert(0);
        },
        methods: {
            eidt: function() {

            }
        }
    }
</script>