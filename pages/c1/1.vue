<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Large Language Model capabilities
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
				<p><br />
					In this section will immerse ourselves into Generative AI Chatbots, also known as Large Language Models(LLMs).
					We will learn through examples, the kind of tasks an LLM is capable of doing, and how you can fit LLMs into workflows and processes in your domain of interest.
					<br /></p>
				
				<p>Playground<br/>
				<a href='https://notebooklm.google/' style='text-decoration: underline;'>NotebookLM</a>: For chatting with books and webpages<br/>
				<a href='https://claude.ai/new' style='text-decoration: underline;'>Claude</a>: For chatting and "translating" one thing into another<br/>
				<a href='https://goblin.tools/' style='text-decoration: underline;'>Goblin Tools</a>: A set of very useful tools<br/>
				<a href='https://build.nvidia.com/nvidia/nemotron-4-mini-hindi-4b-instruct' style='text-decoration: underline;'>Nemotron Hindi</a>: A Language Model taylored for the Hindi Language<br/>
				<a href='https://huggingface.co/l3cube-pune/marathi-gpt-gemma-7b' style='text-decoration: underline;'>Gemma Marathi</a>: A Language Model taylored for the Marathi Language<br/>
				<a href='https://aistudio.google.com/prompts/new_chat' style='text-decoration: underline;'>Google AI Studio</a>: for quick fine tuning<br/>
				<a href='https://gemini.google.com/gems/view' style='text-decoration: underline;'>Google Gemini</a>: Sync accross your Google workspace<br/>
				<a href='https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/' style='text-decoration: underline;'>Multi Agent Systems: Course</a>: Automate Tasks which take in fuzzy inputs<br/>
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
