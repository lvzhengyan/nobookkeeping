<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in allTags"
        :key="tag.id"
        @click="select(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop() readonly allTags: string[] | undefined;
  selectedTags: string[] = [];

  select(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }

  create() {
    // 处理点击取消的情况！！！！
    const name = window.prompt("请输入标签名") as string;
    if (name.trim() === "") {
      window.alert("标签名不能为空");
    } else if (this.allTags) {
      if (this.allTags.indexOf(name) >= 0) {
        window.alert("此标签名重复");
      } else {
        this.$emit("update:allTags", [...this.allTags, name]);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      height: 24px;
      line-height: 24px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 10px;
      background-color: $bg;
      border-radius: (24px/2);

      &.selected {
        background-color: darken($bg, 30%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background-color: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 5px;
    }
  }
}
</style>