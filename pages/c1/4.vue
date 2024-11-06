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
				<a href='https://applied-llms.org/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>What</a> we learnt from 1 year of building LLMs<br/><br/>				
				<a href='https://eugeneyan.com/writing/llm-patterns/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Patterns</a> for Building LLM-based Systems & Products<br/><br/>				
				<a href='https://arxiv.org/abs/2409.06857' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>What is the Role of Small Models in the LLM Era: A Survey</a><br/><br/>				
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
