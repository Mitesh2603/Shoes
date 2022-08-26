<template>
  <Sidebar />
  <Navbar />
</template>

<script>
import Navbar from "./Navbar/Navbar.vue";
import Sidebar from "./Sidebar/SideBar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
