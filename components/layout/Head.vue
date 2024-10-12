<template>
	<header>
		<section class="header-title univers -type-l">
			An Intro to Modern AI : for Chefs, Medical Professionals, Primatologists, Police, Fishermen, High Schoolers, Chemists, Radio Hosts, Business Analysts, Marine Archaeologists, Lawyers, Artists, and all other Domain Experts
		</section>
	</header>
</template>

<script setup>
	const props = defineProps({
		medium: Object,
	})
</script>

<style lang="postcss" scoped>
	.header-title {
		max-width: 30ch;
		color: var(--color4);
		user-select: none;
		text-wrap: balance;
		@media screen and (max-width: 600px) {
			padding: var(--space-m);
			max-width: calc(100vw - 2 * var(--space-m));
		}
	}
</style>
