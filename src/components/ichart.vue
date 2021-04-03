<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-04-03 11:04:07
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-03 12:33:41
-->
<template>
  <div class="ichart_outer">
    <div class="ichart" ref="chartEle"></div>
  </div>
</template>

<script setup>
import { defineProps, inject, nextTick, onMounted, onUpdated, ref } from "vue";

let props = defineProps({
  option: Object,
});

let chartEle = ref(null);
let echarts = inject("ec"); //引入
onMounted(() => {
  //需要获取到element,所以是onMounted的Hook

  let myChart = echarts.init(chartEle.value);
  // 绘制图表
  myChart.setOption(props.option);
  myChart.on("rendered", function () {//渲染结束后自适应
    myChart.resize();
  });

  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
});
onUpdated(() => {
  let myChart = echarts.init(chartEle.value);
  // 绘制图表
  myChart.setOption(props.option);
});
</script>

<style>
.ichart_outer {
  position: relative;
  width: 100%;
  /* height: 100%; */
  height: 300px;
}
.ichart {
  position: relative;
  width: 100%;
  height: 100%;
  /* height: 300px; */
}
</style>