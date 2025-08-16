<script setup>
import { defineProps } from 'vue'
import CountUp from './CountUp.vue' // Adjust path if needed

const props = defineProps({
  endVal: {
    type: [Number, String],
    required: true,
    default: 0
  },
  duration: {
    type: Number,
    default: 2.5
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  separator: {
    type: String,
    default: ','
  },
  decimalPlaces: {
    type: Number,
    default: 0
  }
})

const options = {
  prefix: props.prefix,
  suffix: props.suffix,
  separator: props.separator
}
</script>

<template>
  <CountUp
    :end-val="endVal"
    :duration="duration"
    :decimal-places="decimalPlaces"
    :options="options"
  />
</template>
