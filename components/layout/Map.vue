<template>
	<div class="map">
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 0, 3)"
				:to="c.path"
				:class="[c.type]"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 4, 7)"
				:to="c.path"
				:class="[c.type]"
				:data-index="c.index"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 8, 11)"
				:to="c.path"
				:class="[c.type]"
				:data-index="c.index"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
		<div class="col">
			<NuxtLink
				v-for="c in getEls(chapters.arr, 12, 16)"
				:to="c.path"
				:class="[c.type]"
				:data-index="c.index"
			>
				<!-- <div class="title">{{ c.title }}</div> -->
				<div class="index">{{ c.index }}</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const { mobile } = useScreenSize()

	const props = defineProps({
		medium: Object,
	})

	const { currentRoute } = useRouter()

	function getEls(arr, startIndex, endIndex) {
		return arr.slice(startIndex, endIndex + 1)
	}
</script>

<style lang="postcss" scoped>
	.map {
		display: grid;
		grid-template-columns: repeat(1, 1fr); /* Single column layout */
		width: 25vw;
		padding: var(--space-m); /* Horizontal and vertical padding */
		position: fixed;
		right: 0;
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
		text-align: center; /* Center text alignment */
		background-color: black;

		@media screen and (max-width: 600px) {
			position: static;
			right: 10px;
			z-index: 50;
			width: 100%; /* Full width on smaller screens */
			max-height: initial;
		}

		& > .col {
			display: flex;
			flex-direction: column;
			justify-content: center; /* Center content vertically */
			align-items: center; /* Center content horizontally */
			text-align: center;
			width: 100%; /* Ensure equal width for all columns */
			padding: var(--space-s); /* Add padding for spacing */

			& > a {
				display: flex;
				flex-direction: column;
				justify-content: center; /* Center content vertically */
				align-items: center; /* Center content horizontally */
				text-align: center;
				width: 100%; /* Equal width for links */
				padding: var(--space-s); /* Add padding inside links */
				border: var(--color4) 0px solid;

				&:hover {
					border: var(--color2) 0px solid;
					background-color: white;
					color: black;
				}

				&.router-link-active {
					background-color: var(--color4);
					color: black;
				}

				& > .title {
					text-transform: uppercase;
					font-family: 'Univers';
				}

				& > .index {
					font-family: 'Office-Medium';
					font-size: var(--type-s);
					margin-top: var(--space-m);
				}
			}

			& > .fig,
			& > .chapter,
			& > .buy {
				background-color: #333333;
				flex-grow: 1;
				display: flex;
				justify-content: center; /* Center content vertically */
				align-items: center; /* Center content horizontally */
				width: 100%; /* Ensure equal width */
				padding: var(--space-s); /* Add padding */
			}
		}
	}
</style>

