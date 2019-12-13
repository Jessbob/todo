import Vue from "vue";
import App from "./App.vue";
//import { MdField } from "vue-material/dist/components";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-light.css";
Vue.use(VueMaterial);

Vue.config.productionTip = false;

/*new Vue(
  {
    data() {
      return {
        pageContainer: {
          backgroundColor: "black",
          padding: "20px"
        }
      };
    },
    render: h => h(App)
  }.$mount("#app")
);*/

new Vue({
  render: h => h(App)
}).$mount("#app");
