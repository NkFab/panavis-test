<template>
  <div>
    <button
      :type="type"
      @click="onClick"
      :disabled="disable"
    ><span class="btn-text">{{name}}</span></button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    onClick: Function,
    type: String,
    disable: Boolean
  },
  created () {
    this.$emit('onClick')
  }
}
</script>

<style scoped>
button {
  width: 225px;
  height: 40px;
  background: #8e3c4e;
  border-radius: 5px;
  margin: 5px 0;
  border: none;
}

button:hover {
  background: #5d0d26;
}

button:disabled,
button[disabled] {
  background: #c4c4c4;
  color: #555555;
}

.btn-text {
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
}
</style>
