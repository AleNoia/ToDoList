<template>
  <div id="app">
    <main>
      <Home />
    </main>
    <Navbar />
    <AddNoteForm />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Navbar'
  import Home from '@/views/Home/Home'
  import AddNoteForm from '@/components/AddNoteForm/AddNoteForm'
  import Footer from '@/components/Footer/Footer'
  export default {
    components: {
      Navbar,
      Home,
      AddNoteForm,
      Footer
    }
  }
</script>

<style src="./_App.scss" lang="scss" />