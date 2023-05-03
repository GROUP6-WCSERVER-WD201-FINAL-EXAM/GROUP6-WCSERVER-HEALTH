<template>
    <div class="program-title">
        <h1>PROGRAMS</h1>

        <ol style="--length: 5" role="list">
	<li style="--i: 1">
		<h3>Love your mind - Mental Health Advocacy</h3>
		<p>This is a mental health advocacy campaign aimed at promoting awareness and destigmatizing mental health issues. It encourages individuals to prioritize their mental health and seek help when needed.</p>
	</li>
	<li style="--i: 2">
		<h3>Mental-health Prevention Program</h3>
		<p>This program aims  to prevent the development of mental health issues. Involves educating individuals about mental health, teaching coping skills, and providing support to individuals who may be at risk.</p>
	</li>
	<li style="--i: 3">
		<h3>Supporting Early Childhood Mental Health</h3>
		<p>This is an initiative that focuses on promoting the mental health of young children. Providing resources and support to parents, caregivers, and educators to help children develop healthy emotional and behavioral patterns.</p>
	</li>
	<li style="--i: 4">
		<h3>Que Madre! Talks Mental Health with Women in Rural California</h3>
		<p>This is a mental health education and support program aimed at women in rural California. It provides a safe space for women to discuss mental health issues and connect with resources and support in their community.</p>
	</li>
</ol>

    </div>
</template>

<script>
  export default {
    name: 'programs',
    data () {
      return {
        title: 'Programs'
      }
    }
  }
  </script>

<style scoped>
 * {
	box-sizing: border-box;
}

.program-title{
    text-align: center;
}

body {
	--h: 212deg;
	--l: 43%;
	--brandColor: hsl(var(--h), 71%, var(--l));
	font-family: Montserrat, sans-serif;
	margin: 0;
	background-color: whitesmoke;
}

p {
	margin: 0;
	line-height: 1.6;
}

ol {
	list-style: none;
	counter-reset: list;
	padding: 0 1rem;
}

li {
	--stop: calc(100% / var(--length) * var(--i));
	--l: 62%;
	--l2: 88%;
	--h: calc((var(--i) - 1) * (180 / var(--length)));
	--c1: hsl(var(--h), 71%, var(--l));
	--c2: hsl(var(--h), 71%, var(--l2));
	
	position: relative;
	counter-increment: list;
	max-width: 45rem;
	margin: 2rem auto;
	padding: 2rem 1rem 1rem;
	box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3);
	border-radius: 0.25rem;
	overflow: hidden;
	background-color: white;
}

li::before {
	content: '';
	display: block;
	width: 100%;
	height: 1rem;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(to right, var(--c1) var(--stop), var(--c2) var(--stop));
}

h3 {
	display: flex;
	align-items: baseline;
	margin: 0 0 1rem;
	color: rgb(70 70 70);
}

h3::before {
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0 0 auto;
	margin-right: 1rem;
	width: 3rem;
	height: 3rem;
	content: counter(list);
	padding: 1rem;
	border-radius: 50%;
	background-color: var(--c1);
	color: white;
}

@media (min-width: 40em) {
	li {
		margin: 3rem auto;
		padding: 3rem 2rem 2rem;
	}
	
	h3 {
		font-size: 2.25rem;
		margin: 0 0 2rem;
	}
	
	h3::before {
		margin-right: 1.5rem;
	}
}


</style>