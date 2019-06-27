<template>
    <div>
        <div class="container" id="seat">
            <div class="color-9 pad-bt-20" style="padding-bottom:30px">
                您当前的位置：首页>{{curSeatName}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        curSeatName:{
            type:String
        }
    },
}
</script>

