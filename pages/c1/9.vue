<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Leading Researchers and Educators
				</div>
				<div class="questions">
					<div v-for="(q, i) in questions" class="question">
						{{ q }}
					</div>
				</div>
			</div>
			<LayoutMap></LayoutMap>
		</header>
		<main>
			<div class="content">
				<p>Andrej Karpathy</p>
				<p>Machine Learning Street Talk</p>
				<p>Petar Veličković</p>
				<p>Subbarao Kambhampati</p>
				<p>Melanie Mitchell</p>
				<p>Gary Marcus</p>
				<p>Yann LeCun</p>
				<p>Chip Huyen</p>
				<p>Eugene Yan</p>
				<p>Timnit Gebru</p>
				<p></p>
				<p></p>
				

			</div>
		</main>
		<ElementsNavigation :current="currentRoute.path"></ElementsNavigation>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'default',
	})

	const { width } = useWindowSize()

	const { currentRoute } = useRouter()
	const questions = await getQuestions(currentRoute.value.path)

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs, currentRoute.value.path)
	})
</script>
