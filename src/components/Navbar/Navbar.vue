<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">

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
            </div>

            <div class="navbar-item menu-bars-content">
                <button @click="show = !show" class="menu-bars-button button">
                    <i v-if="!show" class="fas fa-bars solo-i"></i>
                    <i v-if="show" class="fas fa-times solo-i jello-horizontal"></i>
                </button>
            </div>

            <section :class="{showMenu: show}" class="menu-mobile opacity-slow">
                <div @click="show = !show" class="background-menu-mobile"></div>
                <div class="content-menu-mobile">
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
                    <a class="navbar-item">
                        <div class="menu-item">
                            <i class="fas fa-user"></i>
                            <h3>About me</h3>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    </nav>

</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style src="./style.scss" lang="scss" scoped />