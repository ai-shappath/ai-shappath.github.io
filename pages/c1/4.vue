<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Efficiency and Cost
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
				<p>
				<br />
					While Large Language Models demostrate amazing capabilities, deploying them in a production environment is tricky - we need to think about energy consumption, data privacy, training cost and reliability. 
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://github.com/NexaAI/Awesome-LLMs-on-device?tab=readme-ov-file' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Awesome LLMs on Device</a>: A Must-Read Comprehensive Hub by Nexa AI<br/><br/>				
				</p>
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
