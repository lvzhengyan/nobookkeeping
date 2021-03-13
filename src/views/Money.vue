<template>
  <div>
    <Layout classPrefix="layout">
      <Number-pad />
      <Types />
      <Notes />
      <Tags :allTags.sync="tags" />
    </Layout>
  </div>
</template>

<script>
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";

export default {
  name: "Money",
  components: { Tags, NumberPad, Types, Notes },
  data() {
    return {
      tags: ["衣", "食", "住", "行"],
    };
  },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>