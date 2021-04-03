<template>
    <router-view />
</template>

<script setup>
import * as echarts from 'echarts'
import { provide } from 'vue'
provide('ec',echarts)//provide
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";

</style>
