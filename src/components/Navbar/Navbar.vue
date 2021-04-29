<template>
    <nav class="navbar px-7" role="navigation" aria-label="main navigation">
        <div class="navbar-brand mr-5">
            <a href="">
                <div class="is-flex">
                    <i class="fas fa-clipboard-check mr-1"></i>
                    <h1>toDoList</h1>
                </div>
            </a>
        </div>

        <div class="navbar-content">
            <div class="navbar-menu">
                <a class="navbar-item">
                    <div class="menu-item">
                        <i class="fas fa-home"></i>
                        <h3>Home</h3>
                    </div>
                </a>

                <a class="navbar-item">
                    <div class="menu-item">
                        <i class="fas fa-scroll"></i>
                        <h3>Documentation</h3>
                    </div>
                </a>
            </div>

            <div class="navbar-end">
                <a class="navbar-item">
                    <div class="menu-item">
                        <i class="fas fa-user"></i>
                        <h3>About me</h3>
                    </div>
                </a>

                <!-- <div class="navbar-item">
                    <button class=" menu-bars button"><i class="fas fa-bars solo-i"></i></button>
                </div>

                <div class="menu-mobile">
                    <a class="navbar-item">
                        <div class="menu-item">
                            <i class="fas fa-home"></i>
                            <h3>Home</h3>
                        </div>
                    </a>

                    <a class="navbar-item">
                        <div class="menu-item">
                            <i class="fas fa-scroll"></i>
                            <h3>Documentation</h3>
                        </div>
                    </a>
                </div> -->

            </div>
        </div>
    </nav>

</template>

<script>
    export default {

    }
</script>

<style src="./style.scss" lang="scss" scoped />