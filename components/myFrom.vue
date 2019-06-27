<template>
    <div class="box">
        <div>
            <div class="text-center">
                <div class="font-18 color-huang blod">加盟热线</div>
                <div class="mt-5">开源猫科创教育教培联盟，为您创业助力</div>
                <form class="mt-15">
                    <div id="distpicker">
                        <div class="form-group">
                            <label class="sr-only" for="province7">Province</label>
                            <select class="form-control" id="province7" v-model="province"></select>
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="city7">City</label>
                            <select class="form-control" id="city7" v-model="city"></select>
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="name">姓名</label>
                            <input type="text" class="form-control" id="name" placeholder="姓名*" v-model="userName">
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="phone">电话</label>
                            <input type="number" class="form-control" id="phone" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="电话*" v-model="telPhone">
                        </div>
                        <button type="button" class="btn btn-warning btn-block color-bai font-16 mt-20" :disabled="disabled" @click="submit">提交</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {saveCooperativePartne} from '../assets/js/api.js'
export default {
    data(){
        return {
            province:'',
            city:'',
            userName:'',
            telPhone:'',
            disabled:false
        }
    },
    mounted(){
        $('#distpicker').distpicker({
            autoSelect: false
        });
    },
    methods:{
        submit(){
            if(!this.province || !this.city || !this.userName || !this.telPhone){
                this.$toast.top('请完善相关信息');
                return
            }
            if(!this.checkPhone(this.telPhone)){
                this.$toast.top('手机号码有误，请重新填写');
                return
            }
            var postData = {
                provinceName:this.province,
                cityName:this.city,
                userName:this.userName,
                telPhone:this.telPhone
            }
            this.disabled = true;
            //console.log(postData)
            saveCooperativePartne(postData).then(res => {
                console.log(res);
                if(res.data.statusCode == 200){
                    this.$toast.top('提交成功');
                    this.disabled = false;
                    this.province = this.city = this.userName = this.telPhone = '';
                }else {
                    this.$toast.top(res.data.message);
                }
            })
        },
        checkPhone(phone){ 
            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                return false; 
            }
            return true
        }
    }
}
</script>

<style lang="less" scoped>
    .box {
        >div {
            background: url(~assets/img/jmrx.png);
            background-size: 100%;
            padding: 6% 8%;
            >div {
                width: 35%;
                min-width: 250px;
                background-color: #fff;
                border-radius: 6px;
                padding: 25px 15px
            }
        }
    }
    @media (max-width:800px) {
        .box {
            >div {
                padding: 6% 6%;
                >div {
                    width: 100%
                }
            }
        }
    }
</style>

