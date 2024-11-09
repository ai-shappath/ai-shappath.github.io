<template>
	<div class="page">
		<NuxtLink to="/" class="close">CLOSE</NuxtLink>
		<header class="">
			<div class="title">
				<div class="univers -type-l">the basics</div>
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
					In this chapter we will study the core concepts, and common essence of AI, Machine Learning, and Data Science - the Supervised Learning Paradigm, the main sources of error, and the pernicious Alignment Problem.
				<br />
				</p>
				
				<p><br/><br/>
				<a href='https://teachablemachine.withgoogle.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>The Teachable Machine</a>Train a computer to recognize your own images, sounds, & poses.<br/><br/>
				<a href='https://mlu-explain.github.io/train-test-validation/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>The Importance of Data Splitting</a>: By Jared Wilber & Brent Werness<br/><br/>
				<a href='https://labelerrors.com/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Label Errors in ML Test Sets</a>: The student is wrong if the teacher is also wrong<br/><br/>
				<a href='https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=gauss&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=&seed=0.03345&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Neural Network Playground</a>: Train a Neural Network in the web browser<br/><br/>
				<a href='https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>ConvnetJS</a>: by Andrej Karpathy<br/><br/>
				<a href='https://calmcode.io/labs/drawdata' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>DrawData</a>: Quick way to create Toy Data<br/><br/>
				<a href='https://www.desmos.com/calculator/qtqnn0kxnw' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Neural Network on Desmos</a>: how do the weights influence the decision boundary?<br/><br/>
				<a href='https://mlu-explain.github.io/precision-recall/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Precision and Recall</a>: by Jared Wilber<br/><br/><br/><br/></p>

				
				<p>THE ALIGNMENT PROBLEM<br/><br/>
				<a href='https://neil.fraser.name/writing/tank/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Neural Network Follies</a>: by Neil Fraser<br/><br/>
				<a href='https://thegradient.pub/shortcuts-neural-networks-love-to-cheat/' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Neural Networks Love to Cheat</a>: The Gradient Magazine<br/><br/>
				<a href='https://x.com/josephpaulcohen/status/1495851823915495425?t=UH1lvMxQCA9Y6DhnEDOSyg' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>X-ray image exposure can change the output of a neural network</a>: by Joseph Paul Cohen<br/><br/>
				<a href='https://www.youtube.com/watch?v=VpcMNmoABgE&list=PLJOzdkh8T5koRCRC6B-H4m1e-iTWrKbYo&index=5' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Adapting to Novel Data Distributions</a>: by Kate Saenko<br/><br/>
				<a href='https://arxiv.org/abs/1907.07174' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Natural Adversarial Examples</a>: by Hendryks et.al<br/><br/>
				<a href='https://arxiv.org/abs/1811.11553' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Strike (with) a Pose: Neural Networks Are Easily Fooled by Strange Poses of Familiar Objects</a>: by Michael A. Alcorn et.al<br/><br/>			
				<a href='https://arxiv.org/pdf/1702.01304' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Gender-From-Iris or Gender-From-Mascara</a>: by Kuehlkamp et.al<br/><br/>
				<a href='https://arxiv.org/abs/2103.16515' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Quantifying the Scanner-Induced Domain Gap in Mitosis Detection</a>: by Aubreville et.al<br/><br/>
				<a href='https://cispa.saarland/group/fritz/wp-content/blogs.dir/13/files/2020/05/saenko_eccv_2010.pdf' target="_blank" rel="noopener noreferrer" style='text-decoration: underline;'>Adapting Visual Category Models to New Domains</a>: by Saenko etl.al<br/><br/>
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
