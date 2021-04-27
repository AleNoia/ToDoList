<template>
  <div id="app">
    <navbar />
    <main>
      <home />
    </main>
  </div>
</template>

<script>
  import navbar from './components/Navbar/Navbar'
  import home from './views/Home/Home'
  export default {
    components:{ navbar, home }
  }
</script>

<style src="./App.scss" lang="scss" />
