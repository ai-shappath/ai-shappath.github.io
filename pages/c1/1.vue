<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">
					Large Language Model capabilities
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
					We will learn through examples of imapctful applications of LLMs.
					<span class="super">[1]</span>, and in the next lecture we will look at the flaws
					and I hope that a common through line will emerge. These are the applications I find really exciting.
				</p>

				<p>
					Suvery of how you use chatgpt
				</p>
			</div>
			<div class="refs">
				<ref>
					<div class="index">[1]</div>
					<div class="content">
						Korine, Harmony. “A Crack-Up at the Race Riots.” Drag City, 2013.
					</div>
				</ref>
				<ref>
					<div class="index">[2]</div>
					<div class="content">
						“Amazon.com: A Crack-up at the Race Riots.” Amazon,
						<a href="http://www.amazon.com/Crack-Up-at-Race-Riots/dp/1937112101"
							>www.amazon.com/Crack-Up-at-Race-Riots/dp/1937112101</a
						>. Accessed 24 Feb. 2024.
					</div>
				</ref>
				<ref>
					<div class="index">[3]</div>
					<div class="content">
						Wall, Thomas Carl. “‘Dolce Stil Novo’: Harmony Korine’s Vernacular.”
						CR: The New Centennial Review, vol. 4, no. 1, 2004, pp. 307–21.
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
