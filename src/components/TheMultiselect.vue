<template>
  <div>
    <h1>vue-multiselect-colored-tag</h1>
    <h2>Tags have one's own color</h2>

    <h3>1. When Options exist (It's not added to the tag list.)</h3>
    <base-multiselect
      :value="inputData1.value"
      :options="inputData1.options"
      :is-add-tag="true"
      :is-add-tag-list="true"
      :is-change-color="true"
    />

    <h3>2. When Options do not exist (The tag list is empty and doesn't add to the list.)</h3>
    <p>Each tag has no specified color and is used before sending it to the API.</p>
    <base-multiselect
      :value="inputData2.value"
      :options="inputData2.options"
      :is-add-tag="true"
      :is-add-tag-list="false"
      :is-change-color="true"
    />

    <h3>3. When Options exist (It's not added to the tag list.)</h3>
    <p>Tags delivered from the API have their own color, <br>
      and newly added tags are painted from the next color of the last of the tag list.<br>
      The new tags will have random colors until they are sent to the API.</p>
    <base-multiselect
      :value="inputData3.values"
      :options="inputData3.options"
      :is-add-tag="true"
      :is-add-tag-list="false"
      :is-change-color="true"
    />
  </div>
</template>

<script>
export default {
  name: 'TheMultiselect',
  data () {
    return {
      inputData1: {
        value: [],
        options: []
      },
      inputData2: {
        value: [],
        options: []
      },
      inputData3: {
        value: [],
        options: [
          { name: 'Label A', background: '#FFC9D3' },
          { name: 'Label B', background: '#FF7384' },
          { name: 'Label C', background: '#FFE17F' },
          { name: 'Label D', background: '#FFC34C' },
          { name: 'Label E', background: '#C8ED7E' }
        ]
      }
    }
  }
}
</script>
