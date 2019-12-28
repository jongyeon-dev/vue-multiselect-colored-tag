<template>
  <base-multiselect
    :value="value"
    :options="options"
    :is-add-tag="true"
  />
</template>

<script>
export default {
  name: 'TheMultiselect',
  data () {
    return {
      value: [],
      options: [
        { name: 'Label A' },
        { name: 'Label B' },
        { name: 'Label C' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
