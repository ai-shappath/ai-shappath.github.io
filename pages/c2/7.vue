<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<!-- <div class="title">
				<div class="univers -type-l">Donate</div>
				<div class="questions">
					<div v-for="(q, i) in questions" :key="i" class="question">
						{{ q }}
					</div>
				</div>
			</div> -->
			<LayoutMap></LayoutMap>
		</header>
		<main>
			<div class="content">
				<!-- Razorpay Button added here -->
				<div class="razorpay-button-container">
					<RazorpayButton paymentButtonId="pl_PdR7vVUibQ65az" />
				</div>
			</div>
			<div class="refs"></div>
			
		</main>
		<!-- <ElementsNavigation :current="currentRoute.path"></ElementsNavigation> -->
	</div>
</template>

<script setup>

import RazorpayButton from '../../components/elements/RazorpayButton.vue'

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

<style scoped>
.razorpay-button-container {
	margin-top: 2rem;
	text-align: center;
}

.razorpay-button-container h2 {
	margin-bottom: 1rem;
}
</style>
