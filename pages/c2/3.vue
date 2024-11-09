<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">Domain Specific Case Studies</div>
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
				Before the recent revolution in machine learning and deep learning, AI systems made predictions using if/else statements, thresholds, and hand-crafted
 kernels– which were explicitly crafted using the domain knowledge of domain
 experts.<br />
 Modern AI systems, on the other hand, make predictions by affinely transforming the input data multiple times with non-linearities in between– where
 the “weights” are learnt from the data (and are not explicitly set using domain
 knowledge). Such AI systems are good at tasks which the older systems are not
 good at, but they are also over-parameterized, making it difficult to interpret
 their decision making. It is also difficult to get a certificate of guarantee on their
 performance.
 There are, however, various ways in which we can make use of domain knowledge in order to make the modern AI systems more robust and production ready, namely in:<br /><br /><br />
 1. Deciding what to automate, and what data to collect to ensure a high
 mutual information between the features and the labels<br /><br />
 2. Synthetic data generation and data augmentation<br /><br />
 3. Deciding how to represent the data (e.g., grey scale images are represented
 as 2D matrices, colored images as 3D matrices, social media users as nodes
 of a graph etc)<br /><br />
 4. Deciding how to clean the data (e.g., making images grey scale if what we
 are trying to predict is invariant to color)<br /><br />
 5. Delecting a neural network architecture which respects the symmetries of
 the data<br /><br />
 6. Delecting a loss function<br /><br />
 7. Choosing an evaluation metric <br /><br />
 8. Designing how the AI will be deployed (e.g., should we keep the camera fixed? how can we catch and prevent edge-cases?)<br />
</p><br/><br/>


<p>CASE STUDIES</p><br/><br/>
<p>
<a href='https://pair.withgoogle.com/guidebook/case-studies' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Guidebook and Case Studies</a>: by Google<br/><br/>
<a href='https://sander.ai/2015/03/17/plankton.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Classifying plankton with deep neural networks</a>: by Sander Dieleman<br/><br/>
<a href='https://trekhleb.dev/machine-learning-experiments/#/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Machine Learning Experiments</a>: by Oleksii Trekhleb<br/><br/>
<a href='https://ml5js.org/community/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>ml5.js community</a>: working in and around machine learning in thoughtful ways<br/><br/>
</p>
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
