<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  height: 40px;
  padding: 0 16px;
  background-color: #767676;
  color: white;
  border-radius: 4px;
  border: none;
}
</style>