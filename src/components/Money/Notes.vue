<template>
  <div>
    <label class="notes">
      <span class="notes-text">备注</span>
      <input v-model="value" type="text" placeholder="在这里输入备注" />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";

  @Watch("value")
  onValueChange(value: string, oldValue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background-color: #f5f5f5;
  padding-left: 16px;
  display: block;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .notes-text {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>