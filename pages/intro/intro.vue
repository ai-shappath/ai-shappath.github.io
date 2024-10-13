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
					what is the vision?
					Unlock information. Highest quality of teaching in Regional Languages.
					We should start collecting data for ourselves. 
					We will teach you how to use your domain expertise to do so.
					Moravecs Paradox.
					Website Inspired by: 
				</p>
				<p>
					who is this course for?
					For all domain experts.
				</p>
				<p>
					About teacher
					About me
					Videos and Reviews
					My Website
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
