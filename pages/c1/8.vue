<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Beyond Language: Natural Sciences
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
					Transformer based generative models - when asked to do a specific task - generate answers which are in the right direction, 
					but their output cannot be assumed to be correct all the time. 
					The output needs to be verified by human supervisors, or external evaluators (eg: python compiler).
					Once verified, the outputs which we know are correct, can be added back to the generative models training data - which improves the generations further. 
					This iterative loop of learning, along with heavy use of domain specific knowledge and additional improvements, is used in fundamental research such as Protein Design, Material Science, and Math among others.

				<br />
				</p>
<!-- 				
				<p><br/><br/>
				<a href='https://github.com/NexaAI/Awesome-LLMs-on-device?tab=readme-ov-file' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Awesome LLMs on Device</a>: A Must-Read Comprehensive Hub by Nexa AI<br/><br/>				
				</p> -->
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
