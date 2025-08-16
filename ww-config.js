export default {
  name: 'CountUpCounter',
  tag: 'count-up-counter',
  props: [
    {
      name: 'endVal',
      type: 'number',
      defaultValue: 0,
      description: 'Target number to count up to'
    },
    {
      name: 'duration',
      type: 'number',
      defaultValue: 2.5,
      description: 'Duration of the animation in seconds'
    },
    {
      name: 'prefix',
      type: 'string',
      defaultValue: '',
      description: 'Text to prepend before the number'
    },
    {
      name: 'suffix',
      type: 'string',
      defaultValue: '',
      description: 'Text to append after the number'
    },
    {
      name: 'separator',
      type: 'string',
      defaultValue: ',',
      description: 'Thousands separator character'
    },
    {
      name: 'decimalPlaces',
      type: 'number',
      defaultValue: 0,
      description: 'Number of decimal places'
    }
  ]
}
