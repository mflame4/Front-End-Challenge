<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
    <div class="wrapper">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/a">A</RouterLink>
              <RouterLink to="/b">B</RouterLink>
              <RouterLink to="/c">C</RouterLink>
              <RouterLink to="/d">D</RouterLink>
              <RouterLink to="/e">E</RouterLink>
              <RouterLink to="/f">F</RouterLink>
              <RouterLink to="/g">G</RouterLink>
              <RouterLink to="/h">H</RouterLink>
              <RouterLink to="/i">I</RouterLink>
              <RouterLink to="/j">J</RouterLink>
              <RouterLink to="/k">K</RouterLink>
              <RouterLink to="/l">L</RouterLink>
              <RouterLink to="/m">M</RouterLink>
              <RouterLink to="/n">N</RouterLink>
              <RouterLink to="/o">O</RouterLink>
              <RouterLink to="/p">P</RouterLink>
              <RouterLink to="/q">Q</RouterLink>
              <RouterLink to="/r">R</RouterLink>
              <RouterLink to="/s">S</RouterLink>
              <RouterLink to="/t">T</RouterLink>
              <RouterLink to="/u">U</RouterLink>
              <RouterLink to="/v">V</RouterLink>
              <RouterLink to="/w">W</RouterLink>
              <RouterLink to="/x">X</RouterLink>
              <RouterLink to="/y">Y</RouterLink>
              <RouterLink to="/z">Z</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped src="@/assets/main.css"></style>