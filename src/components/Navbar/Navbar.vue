<template>
    <nav class="navbar px-3 p-1" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <h1><i class="fas fa-clipboard-check mr-3"></i>toDoList</h1>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">  
                <a class="navbar-item">
                    <h3><i class="fas fa-home mr-3"></i>Home</h3>
                </a>

                <a class="navbar-item">
                    <h3><i class="fas fa-scroll mr-3"></i>Documentation</h3>
                </a>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a>
                        <h3>More<i class="fas fa-caret-down ml-3"></i></h3>
                    </a>
                    <div class="navbar-dropdown is-right scale-in-top">
                        <a class="navbar-item py-2">
                            <h3>About</h3>
                        </a>
                        <a class="navbar-item py-2">
                            <h3>Jobs</h3>
                        </a>
                        <a class="navbar-item py-2">
                            <h3>Contact</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style src="./style.scss" lang="scss" scoped />