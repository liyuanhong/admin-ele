<template>
    <div class="my-header">
        <i :class="elIconSFold" style="font-size:26px;float:left;margin-top:15px;margin-left:10px;" @click="siderClk"></i>
    </div>
</template>

<script>
import { globalBus } from '../main';

export default {
  name: 'MyAside',
  data() {
      return {
          siderStatus: true,
          elIconSFold: "el-icon-s-fold"
      }
  },
  methods : {
      siderClk(){
          if(this.siderStatus == true){
              globalBus.$emit('siderOpen');
              this.siderStatus = false;
              this.elIconSFold = "el-icon-s-unfold"
          }else if(this.siderStatus == false){
              globalBus.$emit('siderClose');
              this.siderStatus = true;
              this.elIconSFold = "el-icon-s-fold"
          }
      }
  }
}
</script>

<style scoped lang="scss">

</style>
