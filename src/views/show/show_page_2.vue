<template>
    <div class="show_page_1">
        <el-calendar v-model="value">
        </el-calendar>
  </div>
</template>

<script>

export default {
  name: 'ShowPage2',
  data() {
      return {
        value: new Date()
      }
    }
}
</script>

<style scoped lang="scss">

</style>
