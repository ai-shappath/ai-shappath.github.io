<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">"Behind the scenes"</div>
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
					This section will give you an intuitive understanding of how Language Models work under the hood.
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://ig.ft.com/generative-ai/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Generative AI exists because of the transformer</a>: by Visual Storytelling Team and Madhumita Murgia, Financial Times<br/><br/>
				<a href='https://projector.tensorflow.org/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Embedding Projector</a>: Interpreting and visualzing word embeddings<br/><br/>
				<a href='https://pair.withgoogle.com/explorables/fill-in-the-blank/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Explorable BERT</a>: What Have Language Models Learned?<br/><br/>
				<a href='https://attentionviz.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AttentionViz Demo</a>: Visualizing Attention Mechanism<br/><br/>
				<a href='https://catherinesyeh.github.io/attn-docs/#view-info' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AttentionViz Website</a>: Key to transformers' success is their characteristic self-attention mechanism, which allows these models to learn rich, contextual relationships between elements of a sequence.<br/><br/>
								
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
	const { mobile } = useScreenSize()

	const { currentRoute } = useRouter()
	const questions = await getQuestions(currentRoute.value.path)

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs, currentRoute.value.path)
	})
</script>
