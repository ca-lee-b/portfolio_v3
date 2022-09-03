<script>
	$: width = 0;
</script>

<svelte:window bind:outerWidth={width} />

{#if width > 1024}
	<nav class="fixed top-1/4 left-40 text-xl scroll-smooth">
		<ul class="relative w-36 text-center -skew-y-[15deg] bg-[#191919]">
			<li
				class="w-full after:content-[''] after:-z-20 hover:tracking-widest hover:bg-red-900 after:absolute after:-top-10 after:left-0 after:w-full after:h-10 after:bg-[#141414] after:origin-bottom after:skew-x-[45deg] before:content-[''] before:absolute before:top-0 before:-left-10 before:-z-10  before:h-full before:bg-[#141414] before:origin-right before:skew-y-[45deg] before:w-10 transition duration-100 my-8 py-3 cursor-pointer hover:text-[#afafaf]"
			>
				<a class="p-4 w-full h-full" href="/">Home</a>
			</li>
			<li
				class="w-full after:content-[''] after:-z-20 hover:tracking-widest hover:bg-red-900 after:absolute after:-top-10 after:left-0 after:w-full after:h-10 after:bg-[#141414] after:origin-bottom after:skew-x-[45deg] before:content-[''] before:absolute before:top-0 before:-left-10 before:-z-10  before:h-full before:bg-[#141414] before:origin-right before:skew-y-[45deg] before:w-10 transition duration-100 my-8 py-3 cursor-pointer hover:text-[#afafaf]"
			>
				<a class="p-4 w-full h-full" href="#about">About</a>
			</li>
			<li
				class="w-full after:content-[''] after:-z-20 hover:tracking-widest hover:bg-red-900 after:absolute after:-top-10 after:left-0 after:w-full after:h-10 after:bg-[#141414] after:origin-bottom after:skew-x-[45deg] before:content-[''] before:absolute before:top-0 before:-left-10 before:-z-10  before:h-full before:bg-[#141414] before:origin-right before:skew-y-[45deg] before:w-10 transition duration-100 my-8 py-3 cursor-pointer hover:text-[#afafaf]"
			>
				<a class="p-4 w-full h-full" href="#projects">Projects</a>
			</li>
		</ul>
	</nav>
{:else}
	<nav class="fixed backdrop-blur-md m-0 top-0 left-0 w-full">
		<ul class="flex py-6 ml-6 px-4 text-lg">
			<li class="mr-4 ">
				<a class="inline-block w-full h-full hover:text-gray-300 transition duration-150" href="/"
					>Home</a
				>
			</li>
			<li class="mr-4 ">
				<a
					class="inline-block w-full h-full hover:text-gray-300 transition duration-150"
					href="#about">About</a
				>
			</li>
			<li class="mr-4 ">
				<a
					class="inline-block w-full h-full hover:text-gray-300 transition duration-150"
					href="#projects">Projects</a
				>
			</li>
		</ul>
	</nav>
{/if}
