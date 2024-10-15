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
					We will study ways in which humans are different than LLMs, and how we can work together.
				</p>
				<figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure>
				<p>
					No Data, No intelligent LLMs. It might crack the Law exam, but will it crack Odissha Public Service Exam? Or analyse Mimamsa literature?
				</p>
				<p>
					Math.
				</p>
				<p>
					Can LLMs fix your tire,make a meal, light fire, make a hut, filter water, stitch clothes, decide which mushroom to eat?
				</p>
				<blockquote>
					<div class="quote">
						Literary and cinematic narratives work in the same way [as natural
						language]. Particular words, sentences, shots, scenes which make up
						a narrative have a material existence; other elements which form an
						imaginary world of an author or a particular literary or cinematic
						style and which could have appeared instead exist only virtually.
						Put differently, the database of choices from which narrative is
						constructed (the paradigm) is implicit; while the actual narrative
						(the syntagm) is explicit.
					</div>
					<div class="caption">Lev Manovich</div>
				</blockquote>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Barthes, Roland. "Elements of Semiology." Hill and Wang a Division
						of Farrar Straus and Giroux, 1977.
					</div>
				</ref>
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
