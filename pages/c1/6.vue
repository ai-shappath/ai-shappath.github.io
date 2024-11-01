<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Finetuning
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
				A team of finetuned Small Language Models who talk to each other is the future. In the chapter, we will finetune a Small Language Model to do a specific task.
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://huggingface.co/facebook/MobileLLM-125M' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>MobileLLM</a>by Meta<br/><br/>
				<a href='https://huggingface.co/chronbmm/sanskrit-byt5-ocr-postcorrection' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Spelling Correction for Sanskrit</a>: Finetuning ByT5-Sanskrit<br/><br/>
				<a href='https://colab.research.google.com/drive/1ivha2ezpVSq_QCv3d3fMeVC12tz1CEYe?usp=sharing' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>llama3.1 finetuning</a> tutorial by OctoAI<br/><br/>
				<a href='https://github.com/GoogleCloudPlatform/vertex-ai-samples/tree/main/notebooks/community/model_garden' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Model Garden</a> by VertexAI community<br/><br/>		
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
