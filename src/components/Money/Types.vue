<template>
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'" @click="switchType('-')">
        支出
      </li>
      <li :class="value === '+' && 'selected'" @click="switchType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;

  switchType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknow");
    }
    this.$emit("update:value", type);
  }
}
</script>

<style lang="scss" scoped>
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    position: relative;
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>