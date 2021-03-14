<template>
  <Layout> 编辑标签 </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class EditLabels extends Vue {
  created() {
    // $route 获取路由相关信息
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((item) => item.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      // $router 路由器，做转发
      this.$router.replace("/404");
    }
  }
}
</script>

<style scoped>
</style>