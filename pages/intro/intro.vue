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
					what is the vision?<br />
					Unlock information. Highest quality of teaching in Regional Languages.<br />
					We should start collecting data for ourselves. <br />
					We will teach you how to use your domain expertise to do so.<br />
					Moravecs Paradox.<br />
					Website Inspired by: <br />
					https://kabk.github.io/go-theses-24-bartek-pierscinski/
				</p>
				
				<!-- include quotes
				do not make it exciting for the experts, make it exciting for the beginners too!
				curiosity and excitingness of the topic
				random cool detours
				it's not about me. it about the message to be conveyed. -->

				<p>
					who is this course for?
					For all domain experts.
				</p>
				<p>
					for QA - join Discord?
				</p>
				<p>
					About teacher<br />
					Videos and Reviews<br />
					My Website<br />
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Manovich, Lev. “Database as a Symbolic Form.” The Language of New
						Media, The MIT Press, Cambridge, Massachusetts, 2001.
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
