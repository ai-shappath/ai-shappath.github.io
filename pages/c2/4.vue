<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">Practical Guidelines</div>
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
				This compilation of resources provides an in-depth look at essential concepts and practical difficulties encountered by machine learning professionals. It highlights typical challenges during production deployment and outlines best practices for creating scalable and reliable ML systems.
				<br />
				</p>
				
				<p><br/><br/>
				
				<a href='https://applyingml.com/resources/first-rule-of-ml/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>The first rule of Machine Learning</a>: by Eugene Yan<br/><br/>
				<a href='https://thegradientpub.substack.com/p/varun-ganapathi-akasa-ai-and-healthcare#details' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AI in healthcare</a>: by Varun Ganapathi<br/><br/>
				<a href='https://applyingml.com/resources/ml-production-challenges/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Challenges faces by Machine Learning in Production</a>: by Eugene Yan<br/><br/>
				<a href='https://huyenchip.com/machine-learning-systems-design/toc.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Machine Learning System Design</a>: By Chip Huyen<br/><br/>
				<a href='https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Data Distribution Shifts and Monitoring</a>: By Chip Huyen<br/><br/>
				<a href='https://www.easa.europa.eu/sites/default/files/dfu/EASA-DDLN-Concepts-of-Design-Assurance-for-Neural-Networks-CoDANN.pdf' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Concepts of Design Assurances for Neural Networks</a>: By European Union Aviation Safety Agency<br/><br/>
				<a href='https://applyingml.com/mentors/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Stories & advice</a>: from machine learning practitioners<br/><br/>
				<a href='https://eugeneyan.com/writing/conf-lessons/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>39 Lessons on Building ML Systems, Scaling, Execution, and More</a>: by Eugene Yan<br/><br/>
				<a href='https://github.com/eugeneyan/applied-ml' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Curated papers, articles, and blogs on data science & machine learning in production</a>: by Eugene Yan<br/><br/>
					
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
