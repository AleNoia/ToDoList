<template>
  <div id="app">
    <main>
      <Home />
    </main>
    <Navbar />
    <Modal />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Navbar'
  import Home from '@/views/Home/Home'
  import Modal from '@/components/Modal/Modal'
  import Footer from '@/components/Footer/Footer'
  export default {
    components: {
      Navbar,
      Home,
      Modal,
      Footer
    }
  }
</script>

<style src="./_App.scss" lang="scss" />