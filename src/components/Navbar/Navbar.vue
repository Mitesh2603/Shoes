<template>
  <nav class="nav">
    <ul class="nav-ul">
      <link rel="icon" type="image/svg+xml" href="../assets/Shoes.png" />
      <router-link class="nav-li" to="/Home">
        <a class="nav--link" href="#">Home</a>
      </router-link>
      <router-link class="nav-li" to="/Men">
        <a class="nav--link">Men</a>
      </router-link>
      <router-link class="nav-li" to="/Women">
        <a class="nav--link">Women</a>
      </router-link>
      <router-link class="nav-li" to="/Kids">
        <a class="nav--link">Kids</a>
      </router-link>
      <router-link class="nav-li" to="/Customize">
        <a class="nav--link">Customize</a>
      </router-link>
      <router-link class="nav-li" to="/Favourites">
        <a class="nav--link">Favourites</a>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.nav-ul {
  overflow: hidden;
  position: fixed;
  left: 0%;
  top: 0px;
  flex: 1;
  list-style: none;
  display: flex;
  width: 100%;
  background-color: #333;
  margin: 0;
}
.nav-li:not(:last-child) {
  margin-right: 1rem;
}
.nav--link {
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;

  text-transform: uppercase;
  font-weight: 700;
  color: var(--white-color);
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
  position: relative;
}
.nav--link:hover {
  letter-spacing: 1px;
}

.nav--link::before,
.nav--link::after {
  visibility: hidden;
  content: "";
  margin: 0 auto;
  display: block;
  border: 1px solid var(--white-color);
  transition: width 0.5s ease-in-out;
  position: absolute;
  width: 0;
}
.nav--link::before {
  right: 0;
  left: 0;
  top: 0;
}
.nav--link::after {
  right: 0;
  left: 0;
  bottom: 0;
}
.nav--link:hover:before,
.nav--link:hover:after {
  visibility: visible;
  width: 80%;
}
</style>
