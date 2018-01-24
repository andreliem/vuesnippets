var DropDown = Vue.component("dropdown", {
  template: "#dropdown",
  data: function data() {
    return {
      showDropDown: true,
      links: [{
        name: "Account"
      }, {
        name: "Profile"
      }, {
        name: "Logout"
      }]
    };
  }
});

var App = new Vue({
  el: "#app",
  components: {
    DropDown: DropDown
  }
});