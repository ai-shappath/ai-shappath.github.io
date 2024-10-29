<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">About Teacher</div>
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
				<p><br />Kartik's <a href='https://www.youtube.com/channel/UCq5hj2YogHzxCqqyjou2i8A' style='text-decoration: underline;'>educational videos on AI/ML </a> have been inspired by, and subsequently acknowledged by the distinguished professors and researchers: <a href='https://www.linkedin.com/in/tacocohen/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=nl' style='text-decoration: underline;'>Taco Cohen</a> (Meta AI Research), <a href='https://ebekkers.github.io/' style='text-decoration: underline;'>Erik Bekkers</a> (University of Amsterdam), <a href='https://cs.uwaterloo.ca/~shai/index.html' style='text-decoration: underline;'>Shai Ben-David</a> (University of Toronto), and <a href='https://www.cis.upenn.edu/~alur/' style='text-decoration: underline;'>Rajeev Alur</a> (University of Pennsylvania). He has also been extremely lucky to sail the mentor-ship captained by <a href='https://www.linkedin.com/in/bhasi-nair-579000213/?originalSubdomain=uk' style='text-decoration: underline;'>Bhasi Nair</a> and <a href='https://harris.uchicago.edu/directory/abhilash-mishra' style='text-decoration: underline;'>Abhilash Mishra</a> at <a href='https://www.equitechfutures.com/' style='text-decoration: underline;'>Equitech Futures</a>.<br /><br />
				He is currently teaching AIs to do Natural Language Processing and Vision Tasks at <a href='https://www.flame.edu.in/' style='text-decoration: underline;'>FLAME University</a>  in the domain of Historical Manuscript Digitization.<br /><br />
				His current interests are in exposing non-technical audiences to modern AI tools, making education of the highest quality accessible to all (in multiple languages), and studying Geometric Deep Learning.<br /><br />
				He received his Bachelor's Degree in Mechanical Engineering from the Maharashtra Institute of Technology, Pune in affiliation with Savitribai Phule Pune University.<br /><br />
				Find more information about Kartik at his <a href='https://kartikchincholikar.github.io/' style='text-decoration: underline;'>personal website</a>.</p>
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
