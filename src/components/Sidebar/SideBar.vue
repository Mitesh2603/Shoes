<template>
  <nav class="nav">
    <ul class="nav-ul">
      <link rel="icon" type="image/svg+xml" href="../assets/Shoes.png" />
      <p class="nav--link">Brands</p>
      <router-link class="nav-li" to="/Skechers">
        <a class="nav--link">Skechers</a>
      </router-link>
      <router-link class="nav-li" to="/Nike">
        <a class="nav--link">Nike</a>
      </router-link>
      <router-link class="nav-li" to="/puma">
        <a class="nav--link">Puma</a>
      </router-link>
      <router-link class="nav-li" to="/Reebok">
        <a class="nav--link">Reebok</a>
      </router-link>
      <router-link class="nav-li" to="/Adidas">
        <a class="nav--link">Adidas</a>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.nav-ul {
  overflow: hidden;
  position: fixed;
  left: 0px;
  top: 5%;
  flex: 1;
  list-style: none;
  width: 10%;
  height: 100%;
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
  color: aqua;
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
