import Vue, { VueConstructor } from 'vue';

import Hello from './components/Hello.vue';

declare global {
	interface Window {
		Vue: typeof Vue;
	}
}

function install(vue: typeof Vue) {
	vue.component('hello', Hello);
}

const HelloPlugin = {
	install
};

if ((typeof window !== 'undefined') && window.Vue) {
	Vue.use(HelloPlugin);
}

export default HelloPlugin;
