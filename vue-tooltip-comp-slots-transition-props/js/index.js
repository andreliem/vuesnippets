var Tooltip = Vue.component('tooltip', {
  template: "#tooltipTemplate",
  props: {
    show: {
      type: Boolean,
      required: true
    },
    transition: {
      type: String,
      default: 'bounce',
      required: true
    }
  }
});

var TooltipButton = Vue.component('tooltipbutton', {
  template: '#tooltipButton',
  props: {
    transition: {
      type: String,
      default: 'bounce',
      required: false
    }
  },
  components: {
    Tooltip: Tooltip
  },
  data: function data() {
    return {
      showToolTip: false
    };
  }
});

var App = new Vue({
  el: '#app',
  components: {
    TooltipButton: TooltipButton
  }
});