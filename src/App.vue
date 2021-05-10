<template>
  <div id="app">
    <main>
      <Home />
    </main>
    <Navbar />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Navbar'
  import Home from '@/views/Home/Home'
  import Footer from '@/components/Footer/Footer'
  export default {
    components: {
      Navbar,
      Home,
      Footer
    }
  }
</script>

<style src="./_App.scss" lang="scss" />