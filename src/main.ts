import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import rules from '@vee-validate/rules';
// Make the validat aggressive to show case validators
configure({
    validateOnInput: true
});

Object.keys(rules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});

createApp(App).use(store).use(router).mount('#app')
