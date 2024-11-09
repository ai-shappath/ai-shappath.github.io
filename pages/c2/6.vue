<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Random Stuff
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
					Just cool links on AI
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://otoro.net/slimevolley/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://labs.google/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://aidemos.meta.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>				
				<a href='https://experiments.withgoogle.com/home-talk' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://artsexperiments.withgoogle.com/poemportraits' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://artsexperiments.withgoogle.com/nonsense-laboratory/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://artsandculture.google.com/experiment/the-mo-amin-archive/wAEJDXhB5ZAhoA' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://shadowart.withgoogle.com/?lang=en-us#' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				<a href='https://quickdraw.withgoogle.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AWESOME LINK</a><br/><br/>
				</p>

				<!-- <iframe
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
							9) /
						16
					"
					src="https://www.youtube.com/embed/yIt8vgfGyog"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe> -->

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
