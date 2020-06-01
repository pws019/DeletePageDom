<template>
  <div>
    <div>
      <Input v-model="filterSelector"  style="width: 300px" />
    </div>
    <div class="mgt10">
      <Button type="primary" @click="confirm" style="width: 140px">生效</Button>
      <Button type="error" @click="reset" style="width: 140px;margin-left: 20px">清除缓存</Button>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeContent',
  data() {
    return {
      filterSelector: '',
    }
  },
  methods:{
    confirm() {
      return undefined;
    },
    reset(){
      return undefined;
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mgt10{
  margin-top: 10px;;
}
</style>
