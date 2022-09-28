<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/images/img_02.png" alt="">
      </div>
    </div>
    <div>
      <h3>{{mount}}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {home_http} from "@/api/httpHome"
  import {ref} from "vue"
  let mount = ref("hello seec")
  // home_http().then((res: any)=>console.log("22",res))

  async function gethome() {
    let {data} = await home_http()
    console.log(data)
  }
  gethome()
</script >
<style lang="scss">
  .home{
    .nav{
      .pic{
        width: 750px;
        height: 296px;
        background-color: aqua;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>

