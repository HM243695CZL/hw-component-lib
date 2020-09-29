<template>
    <div id="app">
        <div class="box" v-if="flag">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="c">1</div>
                    </el-col>
                    <el-col :span="12">
                        <div class="c">2</div>
                    </el-col>
                </el-row>
            </div>
            <hr>
            <div class="container">
                <hw-row :gutter="20">
                    <hw-col :span="12">
                        <div class="c">hhhh</div>
                    </hw-col>
                    <hw-col :span="12">
                        <div class="c">bbbb</div>
                    </hw-col>
                </hw-row>
            </div>
            <h3>type</h3>
            <hw-button>默认按钮</hw-button>
            <hw-button type="primary">主要按钮</hw-button>
            <hw-button type="success">成功按钮</hw-button>
            <hw-button type="info">信息按钮</hw-button>
            <hw-button type="warning">警告按钮</hw-button>
            <hw-button type="danger">危险按钮</hw-button>
            <br>
            <h3>size</h3>
            <hw-button size="big">大按钮</hw-button>
            <hw-button type="primary" size="mid">中等按钮</hw-button>
            <hw-button type="success" size="small">小按钮</hw-button>
            <hw-button type="info" size="mini">迷你按钮</hw-button>
            <br>
            <h3>is-round</h3>
            <hw-button is-round>默认按钮</hw-button>
            <hw-button type="primary" is-round>主要按钮</hw-button>
            <hw-button type="success" is-round>成功按钮</hw-button>
            <hw-button type="info" is-round>信息按钮</hw-button>
            <hw-button type="warning" is-round>警告按钮</hw-button>
            <hw-button type="danger" is-round>危险按钮</hw-button>
            <br>
            <h3>wayra</h3>
            <hw-button wayra="primary">默认按钮</hw-button>
            <hw-button wayra="success">默认按钮</hw-button>
            <hw-button wayra="info">默认按钮</hw-button>
            <hw-button wayra="warning">默认按钮</hw-button>
            <hw-button wayra="danger">默认按钮</hw-button>
            <br>
            <h3>aylen</h3>
            <br>
            <hw-button aylen="primary">默认按钮</hw-button>
            <hw-button aylen="success">默认按钮</hw-button>
            <hw-button aylen="info">默认按钮</hw-button>
            <hw-button aylen="warning">默认按钮</hw-button>
            <hw-button aylen="danger">默认按钮</hw-button>
            <br>
            <h3>rayen</h3>
            <hw-button rayen="primary" data-text="默认按钮">默认按钮</hw-button>
            <hw-button rayen="success" data-text="默认按钮">默认按钮</hw-button>
            <hw-button rayen="info" data-text="默认按钮">默认按钮</hw-button>
            <hw-button rayen="warning" data-text="默认按钮">默认按钮</hw-button>
            <hw-button rayen="danger" data-text="默认按钮">默认按钮</hw-button>
            <br>
        </div>
        <div class="box" v-if="flag">
            <el-container>
                <el-header>Header</el-header>
                <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
            <br>
            <hr>
            <el-container>
                <el-header>Header</el-header>
                <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-container>
                        <el-main>Main</el-main>
                        <el-footer>Footer</el-footer>
                    </el-container>
                </el-container>
            </el-container>
            <br>
            <hr>
            <hw-container>
                <hw-header>hwHeader</hw-header>
                <hw-container>
                    <hw-aside width="200px">hwAside</hw-aside>
                    <hw-main>hwMain</hw-main>
                </hw-container>
            </hw-container>
            <br>
            <hr>
            <hw-container>
                <hw-header>hwHeader</hw-header>
                <hw-container>
                    <hw-aside>hwAside</hw-aside>
                    <hw-container>
                        <hw-main>hwMain</hw-main>
                        <hw-footer>hwFooter</hw-footer>
                    </hw-container>
                </hw-container>
            </hw-container>
        </div>
        <!--<hw-color-picker></hw-color-picker>-->
        <hw-input></hw-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag: false
            }
        },
        methods: {
            text() {
                if (window.getSelection().toString()) {
                    console.log(window.getSelection().toString());
                } else {
                    console.log(222);
                }
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        color: #2c3e50;
        overflow-x: hidden;
    }

    .c {
        width: 100%;
        background: #f00;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    .el-header, .el-footer, .hw-header, .hw-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside, .hw-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        margin-bottom: 0;
    }
    .el-main, .hw-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
