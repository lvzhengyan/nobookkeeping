<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          :to="`/labels/edit/${tag.id}`"
          v-for="tag in tags"
          :key="tag.id"
          class="tag"
        >
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="wrapper">
        <Button class="createTag" @click.native="create">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import { TagHelper } from "@/mixins/TagHelper";
import { mixins } from "vue-class-component";

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 24px;
      height: 24px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
  > .createTag {
    height: 40px;
    padding: 0 16px;
    background-color: #767676;
    color: white;
    border-radius: 4px;
    border: none;
  }
}
</style>