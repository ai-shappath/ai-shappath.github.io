<template>
	<main>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 0, 3)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 4, 7)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 8, 11)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 12, 16)"
				:to="c.path"
				:class="[c.type]"
			>
				<div class="title">{{ c.title }}</div>
			</NuxtLink>
		</div>
	</main>
</template>

<script setup>
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const { mobile } = useScreenSize()

	const props = defineProps({
		medium: Object,
	})

	function getEls(arr, startIndex, endIndex) {
		return arr.slice(startIndex, endIndex + 1)
	}
</script>

<style lang="postcss" scoped>
	main {
		display: grid;
		grid-template-columns: repeat(1, 1fr); /* Single column layout */
		height: 60vh;
		width: 100%; /* Fit the full width of the screen */
		padding: var(--space-m); /* Add padding for spacing */
		align-items: center; /* Center vertically */
		text-align: center; /* Center text alignment */

		@media screen and (max-width: 640px) {
			grid-template-columns: repeat(1, 1fr);
		}

		& > .col {
			display: flex;
			flex-direction: column;
			justify-content: center; /* Center content vertically */
			text-align: center;
			width: 100%; /* Fit the full width */
			padding: var(--space-s); /* Add padding for spacing */
			

			& > a {
				display: flex;
				flex-direction: column;
				justify-content: center; /* Center content vertically */
				text-align: center;
				width: 100%; /* Fit the full width */
				padding: var(--space-s); /* Add padding inside links */
				border: var(--color4) 0px solid;

				& > .title {
					text-transform: uppercase;
					font-family: 'Univers';
					text-wrap: pretty;
				}

				& > .index {
					font-family: 'Office-Medium';
					font-size: var(--type-xs);
					margin-top: var(--space-m);
					color: var(--color2);
					line-height: 110%;
					text-transform: uppercase;

					& > .question {
						opacity: 0;
					}
				}

				&:hover {
					border: var(--color2) 0px solid;

					& > .index {
						& > .question {
							opacity: 1;
						}
					}
				}

				@media screen and (max-width: 640px) {
					& > .index {
						& > .question {
							color: var(--color4);
							opacity: 1;
						}
					}
				}
			}

			& > .fig,
			& > .chapter,
			& > .buy {
				flex-grow: 4;
				display: flex;
				justify-content: center; /* Center content vertically */
				align-items: center; /* Center content horizontally */
				width: 100%; /* Fit the full width */
				padding: var(--space-s); /* Add padding */
			}
		}
	}
</style>

