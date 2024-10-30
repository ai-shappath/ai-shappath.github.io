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
					We will learn through examples of imapctful applications of LLMs.
					<span class="super">[1]</span>, and in the next lecture we will look at the flaws
					and I hope that a common through line will emerge. These are the applications I find really exciting.
				</p>
				<UrlPreviewCard
					url="https://notebooklm.google/"
					title="NotebookLM"
					description=""
				/>
				<p>
					Suvery of how you use chatgpt
				</p>
			</div>
		</main>
		<ElementsNavigation :current="currentRoute.path"></ElementsNavigation>
	</div>
</template>

<script setup>
	import UrlPreviewCard from '../../components/elements/UrlPreviewCard.vue'

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
