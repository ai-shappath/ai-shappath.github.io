<template>
	<header>
		<section class="header-title univers -type-l">
			<br />‌AI SHAPPATH<br />
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
		margin: 0 auto; /* Centers horizontally */
		text-align: center; /* Aligns text content in the center */

		/* For screens larger than 600px */
		@media screen and (min-width: 601px) {
			max-width: 120ch;
			font-size: 70px; /* Reduced font size for larger screens */
			padding: var(--space-m);
		}

		@media screen and (max-width: 600px) {
			padding: var(--space-m);
			max-width: calc(100vw - 2 * var(--space-m));
		}
	}
</style>

