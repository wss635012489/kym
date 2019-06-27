<template>
    <div class="text-center" style="padding:50px 0">
        <h2 v-if="error.statusCode === 404">您要找的东西不存在或者发送错误</h2>
    </div>
</template>
<script>
export default {
  props: ['error'],
}
</script>