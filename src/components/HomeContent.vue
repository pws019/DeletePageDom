<template>
  <div>
    <div>
      <Input v-model="filterSelector"  style="width: 300px" />
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
    const selectors = (localStorage.getItem("clearPageSelectors")||'').split('+++');
    // const errs = this.deleteDoms(selectors);
    // if(errs.length > 0) {
    //   this.errMsg = errs.join('**************************')
    // }
    // this.deleteDoms(selectors);
    this.sendDeleteDomMsg(selectors, (resp) => {
      if(resp.err) {
        this.errMsg = resp.err;
        return;
      }
    });
  },
  data() {
    return {
      filterSelector: '',
      errMsg:'',
    }
  },
  methods:{
    confirm() {
      if(!this.filterSelector) {
        return;
      }
      const selectors = this.filterSelector.replace(/，/g,',').split(',');
      // const errs = this.deleteDoms(selectors);

      this.sendDeleteDomMsg(selectors, (resp) => {
        const errs = resp.err;
        if(errs.length > 0) {
          this.errMsg = errs.join('**************************')
        } else {
          localStorage.setItem("clearPageSelectors", selectors.join('+++'));
        }
      });

      
      console.log(selectors);
      return undefined;
    },
    reset(){
      return undefined;
    },
    sendDeleteDomMsg(selectors, cb) {
      Msg.sendMessage({type: 'deleteDom', data: selectors}, (resp) => {
        cb && cb(resp);
      });
    },
    // deleteDoms(selectors) {
    //   let errs = [];
    //   selectors.forEach(selector => {
    //     if(!selector) {
    //       return;
    //     }
    //     try{
    //       document.querySelector(selector).forEach((ele) => {
    //         ele.parentNode.removeChild(ele); // 删除自己
    //       })
    //     } catch(err) {
    //       errs.push(err);
    //     }
    //   });
    //   return errs;
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mgt10{
  margin-top: 10px;;
}
</style>
