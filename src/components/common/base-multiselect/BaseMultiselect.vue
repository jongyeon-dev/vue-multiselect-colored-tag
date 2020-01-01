<template>
  <multiselect
    v-color="isChangeColor"
    v-model="currentValue"
    :options="currentOptions"
    :multiple="true"
    :searchable="true"
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
      update: function (el, binding, vnode) {
        const tagWrapper = document.getElementsByClassName('multiselect__tag')
        let tagsList = vnode.componentOptions.propsData.options
        let enteredTags = vnode.componentOptions.propsData.value

        setTimeout(() => {
          // the Options (Tag List) received
          if (tagsList.length > 0) {
            const tagsListNames = tagsList.map(tag => tag.name)
            const tagWrapperArray = Object.entries(tagWrapper)
            const tagTexts = tagWrapperArray.map(tag => tag[1].innerText)
            let nextColorIndex = 1
            for (let i = 0; i < tagWrapper.length; i++) {
              tagsList.find(tag => {
                // If the name of the tag list and the innerText of the tag entered are the same, the tag list changes to the background.
                if (tagsListNames.includes(tagTexts[i])) {
                  if (tag.name === tagWrapper[i].innerText) {
                    // eslint-disable-next-line no-return-assign
                    return tagWrapper[i].style.background = tag.background
                  }
                } else {
                  // When a new tag is created that is not the same as the name of the Tag List,
                  // it changes in turn from the color of the next index of the highest index of the Tag List.
                  // eslint-disable-next-line no-return-assign
                  enteredTags[i].background = constants.TAGS_RANGE_COLOR[(maxIndex().index + nextColorIndex) % 10]
                  tagWrapper[i].style.background = enteredTags[i].background
                  ++nextColorIndex
                  return enteredTags
                }
              })
            }
          } else { // When there are no options (Tag List) received, they change from the first color to the next.
            let newEnteredTags = []
            for (let i = 0; i < tagWrapper.length; i++) {
              let tag = {
                name: tagWrapper[i].innerText,
                background: constants.TAGS_RANGE_COLOR[(i % 10)]
              }
              tagWrapper[tagWrapper.length - 1].style.backgroundColor = tag.background
              newEnteredTags.push(tag)
            }
            return newEnteredTags
          }

          // Find the highest index in the background of the Options (Tag List) received
          function maxIndex () {
            let newArray = []
            for (let i = 0; i < tagsList.length; i++) {
              const tagsColor = Object.values(constants.TAGS_RANGE_COLOR)
              if (tagsList[i].name !== undefined) {
                const colorIndex = tagsColor.findIndex(color => color === tagsList[i].background)
                let tagInfo = {
                  index: colorIndex
                }
                newArray.push(tagInfo)
              }
            }
            return newArray.reduce(function (previous, current) {
              return previous.index > current.index ? previous : current
            })
          }
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
    },
    isAddTagList: {
      type: Boolean,
      required: false,
      default: false
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
        const tagWrapper = document.getElementsByClassName('multiselect__tag')
        let backgroundColor = ''
        for (let i = 0; i < tagWrapper.length + 1; i++) {
          // eslint-disable-next-line no-return-assign
          backgroundColor = constants.TAGS_RANGE_COLOR[(i % 10)]
        }
        const tag = {
          name: newTag,
          background: backgroundColor
        }
        this.currentValue.push(tag)

        if (this.isAddTagList) {
          this.currentOptions.push(tag)
        }
      }
    }
  }
}

</script>

<style lang="scss">
  @import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";

  .multiselect {
    .multiselect__tags {
      .multiselect__tags-wrap {
        .multiselect__tag {  /* tag */
          span {
            font-size: 12px;
            font-weight: 500;
            color: #ffffff;
          }
          .multiselect__tag-icon {
            line-height: 20px;
            &:after {
              color: #ffffff;
              font-size: 12px;
            }
            &:hover {
              color: inherit;
              background-color: transparent;
            }
          }
        }
      }
      .multiselect__placeholder {
        font-size: 12px;
        margin-bottom: 2px;
      }
    }
    .multiselect__content-wrapper {
      .multiselect__content {
        .multiselect__element {
          .multiselect__option {
            font-size: 14px;
            color: #222;
            font-weight: normal;
            &.multiselect__option--highlight {
              background-color: #f8f9fa;
              &.multiselect__option--highlight:after {
                content: '';
              }
            }
            min-height: auto;
          }
        }
        .multiselect__option--selected {
          background: transparent;
        }
        .multiselect__option--selected:after {
          content: '';
        }
      }
    }
  }
</style>
