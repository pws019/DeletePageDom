<template>
  <div>
    <div>
      <Input type="textarea" :rows="4" :disabled="true" v-model="cacheSelector" placeholder="已缓存选择器" style="width: 300px;" />
    </div>
    <div>
      <Input type="textarea" :rows="4" v-model="filterSelector" placeholder="需要删除的选择器"  style="width: 300px" class="mgt10"/>
    </div>
    <div class="mgt10">
      <Button type="primary" @click="confirm" style="width: 140px">生效</Button>
      <Button type="error" @click="reset" style="width: 140px;margin-left: 20px">清除缓存</Button>
    </div>
    <div class="mgt10">
      <Alert v-if="errMsg" type="error">{{errMsg}}</Alert>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Msg from '@/util/msg.js'

export default Vue.extend({
  name: 'HomeContent',
  mounted() {
    Msg.sendMessage({type:'getDeleteSelectorsFromLocalStorage'}, (resp) => {
      const sels = resp.data || [];
      const cur = sels.toString();
      this.filterSelector = cur;
      this.cacheSelector = cur;
    })
  },
  data() {
    return {
      filterSelector: '',
      errMsg:'',
      cacheSelector:'',
    }
  },
  methods:{
    confirm() {
      if(!this.filterSelector) {
        return;
      }
      const selectors = this.filterSelector.replace(/\n/g,',').replace(/，/g,',').split(',');
      // const errs = this.deleteDoms(selectors);

      Msg.sendMessage({type: 'deleteDom', data: selectors}, (resp) => {
        const errs = resp.err;
        if(errs.length > 0) {
          this.errMsg = errs.join('**************************')
        } else {
          this.errMsg = '';
        }
        Msg.sendMessage({type: 'setDeleteSelectorsFromLocalStorage', data: selectors});
        this.filterSelector = selectors.toString();
        this.cacheSelector = selectors.toString();
      })
      return undefined;
    },
    reset(){
      Msg.sendMessage({type:'setDeleteSelectorsFromLocalStorage', data: ''});
      this.filterSelector = '';
      this.cacheSelector = '';
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
