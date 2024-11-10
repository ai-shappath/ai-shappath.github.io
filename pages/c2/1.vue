<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					the ethics
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
					“Learning from data” inherently means taking decisions based on stereotypes, and such decision-making is what perpetuates the stereotypes further.
					In this chapter we look at examples of how this plays out in the domains of chess, Nobel Prizes, reservation, and law enforcement. 
					We will also study the Moravec paradox, and understand the risks associated with DeepFakes, Voice Clones, Bots, Social Media Bubbles and Dataset Biases.
				<br />
				</p>	
				<p><br/><br/>
				<a href='https://www.survivalofthebestfit.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Survival of the Best Fit</a> is an educational game about hiring bias in AI<br/><br/>
				<a href='https://controlling-bias.github.io/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Controlling Bias</a> in Artificial Intelligence<br/><br/>	
				<a href='https://news.ycombinator.com/item?id=28233077' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>An Interesting Discussion</a> on Y Combinator Forum<br/><br/>
				<a href='https://notebooklm.google/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>NotebookLM</a>: For chatting with books and webpages<br/><br/>
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
