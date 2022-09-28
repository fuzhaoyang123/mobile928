<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000"  @change="onChange_fn" route>
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/fenxiao">分销</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/mucart">购物</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    const active:any = ref(0)
    let router = useRouter()
    let onChange_fn:(index?:number|string)=>void=function (index?:number|string){
      console.log(index)
      active.value = index
      // switch(index){
      //   case 0:router.push("/")
      //   case 1:router.push("/fenxiao");break
      //   case 2:router.push("/mucart");break
      //   case 3:router.push("/mine");break
      // }
    } 

</script>

<style lang="scss" scoped>

</style>