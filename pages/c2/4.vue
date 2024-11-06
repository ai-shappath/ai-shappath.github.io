<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">About Stussy “Holiday '23”</div>
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
					While Large Language Models demostrate amazing capabilities, deploying them in a production environment is tricky - we need to think about energy consumption, data privacy, training cost and reliability. 
				<br />
				</p>
				
				<p><br/><br/>
				
				<a href='https://applyingml.com/resources/first-rule-of-ml/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>The first rule of Machine Learning</a><br/><br/>
				<a href='https://applyingml.com/resources/ml-production-challenges/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Challenges faces by Machine Learning in Production</a><br/><br/>
				<a href='https://huyenchip.com/machine-learning-systems-design/toc.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Machine Learning System Design</a>: By Chip Huyen<br/><br/>
				<a href='https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Data Distribution Shifts and Monitoring</a>: By Chip Huyen<br/><br/>
				<a href='https://www.easa.europa.eu/en/document-library/general-publications/concepts-design-assurance-neural-networks-codann' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Concepts of Design Assurances for Neural Networks</a><br/><br/>
				<a href='https://pair.withgoogle.com/guidebook/case-studies' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Google Guidebook and Case Studies</a><br/><br/>
				<a href='https://research.google/resources/our-projects/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Google</a><br/><br/>
				<a href='https://applyingml.com/mentors/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Stories & advice from machine learning practitioners</a><br/><br/>
				<a href='https://eugeneyan.com/writing/conf-lessons/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>39 Lessons on Building ML Systems, Scaling, Execution, and More</a><br/><br/>
				<a href='https://github.com/eugeneyan/applied-ml' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Curated papers, articles, and blogs on data science & machine learning in production.</a><br/><br/>
					
				</p>
				<!-- <iframe
					src="https://player.vimeo.com/video/891906551?h=0b25ef0bff"
					:width="
						!mobile
							? !mobile
								? (width / 4) * 3 - 40
								: (width / 4) * 4 - 40
							: (width / 4) * 4 - 40
					"
					:height="
						((!mobile
							? !mobile
								? (width / 4) * 3 - 40
								: (width / 4) * 4 - 40
							: (width / 4) * 4 - 40) *
							3) /
						4
					"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen
				></iframe> -->
				<!-- <figure>
					<img src="/content/c/1/drama.png" alt="" />
					<figcaption>
						From "History of the World: Part 1" (1981), Dir. Mel Brooks
					</figcaption>
				</figure> -->

				<!-- <blockquote>
					<div class="quote">
						Literary and cinematic narratives work in this way. Particular
						words, sentences, shots, scenes which make up a narrative have a
						material existence; other elements which form an imaginary world of
						an author or a particular literary or cinematic style and which
						could have appeared instead exist only virtually. Put differently,
						the database of choices from which narrative is constructed (the
						paradigm) is implicit; while the actual narrative (the syntagm) is
						explicit.
					</div>
					<div class="caption">Lev Manovich</div>
				</blockquote> -->
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
