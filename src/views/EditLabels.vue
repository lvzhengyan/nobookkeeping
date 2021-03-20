<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goback" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <Notes
        :value="tag.name"
        @update:value="updateTag"
        updateTag
        field-name="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click.native="remove">删除按钮</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/Money/Input.vue";
import Button from "@/components/Button.vue";

@Component({
  components: { Notes: Notes, Button: Button },
})
export default class EditLabels extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    // $route 获取路由相关信息
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((item) => item.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      // $router 路由器，做转发
      this.$router.replace("/404");
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (tagListModel.remove(this.tag.id)) {
        this.$router.back();
      }
    }
  }

  goback() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}

.form-wrapper {
  background-color: white;
  margin-top: 10px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>