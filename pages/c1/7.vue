<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Beyond Language: Image, Video, Music
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
					In this chapter we will wander on the “latent spaces” of images, videos, music. Latent spaces let us discover new creative possibilities by exploring smooth transitions between existing images, sounds, and videos - essentially mapping and wandering the neighborhoods around known examples.
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://projector.tensorflow.org/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Embedding Projector</a>: Interpreting and visualizing word embeddings<br/><br/>
				<a href='https://n8python.github.io/mnistLatentSpace/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>MNIST Latent Spaces</a>: Exploring the space of images of numbers<br/><br/>
				<a href='https://bryanlohjy.gitlab.io/spacesheet/index.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>SpaceSheet</a>: Exploring the space of faces, fonts and more<br/><br/>
				<a href='https://www.whichfaceisreal.com/index.php' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Which Face is real?</a>: Click on the person who is real<br/><br/>
				<a href='https://www.uibot.app/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>UIbot</a>: Exploring UI space<br/><br/>
				<a href='https://x.com/prathyvsh/status/1852215239850225943' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Prathyvsh</a>: Cool X.com thread<br/><br/>
				<a href='https://madebyoll.in/posts/dino_diffusion/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>DinoDiffusion</a>: Intro to Diffusion Models<br/><br/>
				<a href='https://huggingface.co/spaces/jbilcke-hf/FacePoke' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>FacePoke</a>: A real-time head transformation app<br/><br/>
				<a href='https://tinybots.net/artbot' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Artbot</a>: Generate Images using Stable Diffusion<br/><br/>
				<a href='https://pinokio.computer/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Pinokio</a>: One-Click installer of AI tools<br/><br/>
				<a href='https://www.pictobrush.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Pic2Brush</a>: Paint _using_ Photos<br/><br/>
				<a href='https://hueplot.ardov.me/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>HuePlot</a>: A tool to visually explore the world of color spaces and gamuts.<br/><br/>
				<a href='https://aitestkitchen.withgoogle.com/tools/music-fx' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>MusicFx</a>: a generative music creation tool<br/><br/>
				<a href='https://audioldm.github.io/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>AudioLDM</a>: Text to sound effects<br/><br/>
				<a href='https://codepen.io/teropa/full/rdoPbG/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Latent Loops</a>: a Generative Music experiment<br/><br/>
				<a href='https://sites.research.google/tonetransfer' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Tone Transfer</a>: Go from one sound to another<br/><br/>
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
