<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Large Language Models Incapabilites
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
					In this chapter we will understand the kinds of tasks a Large Language Model(LLM) cannot do. 
					We will look at examples which elucidate the various ways in which LLMs fail.
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://www.youtube.com/watch?v=gRJgqSbk71o' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AI's challenge of Understanding the world</a>: by Melanie Mitchell<br/><br/>
				<a href='https://www.youtube.com/watch?v=dbheitnurg8' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Demystifying LLMs</a>: by Subbarao Kambhampati<br/><br/>
				<a href='https://wac.colostate.edu/repository/collections/continuing-experiments/january-2024/ai-literacy/variation-in-the-writing-outputs-of-first-year-writing-students-and-generative-ai/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Writing Essays</a>: Variation in the Writing Outputs of First-year Writing Students and Generative AI<br/><br/>
				<a href='https://www.reddit.com/r/SubSimulatorGPT2/top/?t=all' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>When LLMs talk to each other</a>: a subreddit which simulates conversations between LLMs<br/><br/>
				<a href='https://jailbreaking-llms.github.io/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Jailbreak 1</a>: Jailbreaking Black Box Large Language Models in Twenty Queries<br/><br/>
				<a href='https://arxiv.org/pdf/2305.13860' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Jailbreak 2</a>: Jailbreaking ChatGPT via Prompt Engineering: An Empirical Study<br/><br/>
				
				
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
