<template>
  <multiselect
    v-model="currentValue"
    :options="currentOptions"
    :multiple="true"
    :searchable="true"
    :max-height="600"
    :taggable="true"
    :close-on-select="false"
    placeholder="Search or add a tag"
    label="name"
    track-by="name"
    @tag="addTag"
  >
    <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
  </multiselect>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'BaseMultiselect',
  components: {
    Multiselect
  },
  props: {
    value: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    options: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    isAddTag: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      currentValue: this.value,
      currentOptions: this.options
    }
  },
  methods: {
    addTag (newTag) {
      if (this.isAddTag) {
        const tag = {
          name: newTag,
          key: newTag
        }
        this.currentValue.push(tag)
        // this.currentOptions.push(tag);
      }
    }
  }
}

</script>

<style lang="scss">
  @import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";

</style>
