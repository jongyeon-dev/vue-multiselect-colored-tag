<template>
  <multiselect
    v-color="isChangeColor"
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
import * as constants from '../../../components/constants/tagsColor'

export default {
  name: 'BaseMultiselect',
  directives: {
    color: {
      update: function () {
        const tag = 'multiselect__tag'
        const tagWrapper = document.getElementsByClassName(tag)
        setTimeout(() => {
          let newTagsList = []
          for (let i = 0; i < tagWrapper.length; i++) {
            let tag = {
              name: tagWrapper[i].innerText,
              background: constants.TAGS_RANGE_COLOR[i + 1]
            }
            tagWrapper[tagWrapper.length - 1].style.backgroundColor = tag.background
            newTagsList.push(tag)
          }
          return newTagsList
        }, 100)
      }
    }
  },
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
    isChangeColor: {
      type: Boolean,
      required: false,
      default: false
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
