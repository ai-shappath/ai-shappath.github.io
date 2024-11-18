<template>
	<header>
		<section class="header-title univers -type-l">
			<br/>
			AI काय करु शकता? काय नाही करु शकत?
			<br/>‌<br/>‌आपल्या क्षेत्रात Artificial Intelligence (AI) चा वापर करायला सोप्या शब्दात शिका.
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
		/* For screens larger than 600px */
        @media screen and (min-width: 601px) {
			max-width: 120ch;
            font-size: 70px; /* reduced font size for larger screens */
			padding: var(--space-m);
        }
		@media screen and (max-width: 600px) {
			padding: var(--space-m);
			max-width: calc(100vw - 2 * var(--space-m));
		}
	}
</style>
