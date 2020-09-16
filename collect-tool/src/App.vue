<template>
  <div id="app">
    <timeline :data="[['test1', '2001-00-01', '2002-00-01'],
                      ['test2', '2002-00-01', '2003-00-01'],
                      ['test3', '2003-00-01', '2004-00-01']]">
    </timeline>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

