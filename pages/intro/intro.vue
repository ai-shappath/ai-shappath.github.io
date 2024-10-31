<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header>
			<div class="title">
				<div class="univers -type-l">ABOUT COURSE</div>
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
					The vision of this course is to teach you, the domain expert, what Artificial Intelligence(AI) can and cannot do.
					You will learn fundamental AI concepts, the necessary vocabulary, and a structured way of thinking to translate your domain expertise into feasible AI solutions.
					<br />
					<br />
					To take this course you will need a computer with internet access, time, dedication, and the will to apply AI to a specific domain of your interest. No prior knowledge about AI, complicated math or programming knowlege is required. Our priority is to unlock information of the highest quality in a simple, concise and jargonless manner.
				</p>
				<!-- <figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure> -->
				<p>The design of this website has been inspired by <a href="https://kabk.github.io/go-theses-24-bartek-pierscinski/" style="text-decoration: underline;">this</a> website.</p>
			</div>
		</main>
		<ElementsNavigation :current="currentRoute.path"></ElementsNavigation>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'default',
	})

	const { data: chapters } = await useAsyncData('chapters', () =>
		queryContent('/chapters').findOne()
	)

	const { currentRoute } = useRouter()
	const questions = await getQuestions(currentRoute.value.path)

	console.log(questions)

	onMounted(() => {
		const paragraphs = document.querySelectorAll('p')
		countParagraphs(paragraphs, currentRoute.value.path)
	})
</script>
