<template>
	<div id="hello">
		{{ text }}
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

export default Vue.extend({
	name: 'Hello',
	data() {
		return {
			text: 'Hello, World!'
		};
	}
});
</script>


<style>
#hello {
	color: red;
}
</style>
