<script>
     import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
     import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
     import FaReact from 'svelte-icons/fa/FaReact.svelte'
     import FaCss3Alt from 'svelte-icons/fa/FaCss3Alt.svelte'
     import FaNodeJs from 'svelte-icons/fa/FaNodeJs.svelte'
</script>

<div class="min-h-screen">
    <div class="bg-[#1e1e1e] p-8 lg:p-16 rounded-lg">
        <h1 class="text-3xl text-gray-300 font-bold mb-2">Caleb Lee</h1>
        <div class="flex text-center mt-8 mb-2">
            <div class="flex w-8 lg:w-8 lg:h-8 mr-10 cursor-pointer hover:text-blue-500 transition duration-150">
                <a target=_blank href="https://www.linkedin.com/in/caleb-lee-92b700239/">
                    <FaLinkedinIn />
                </a>
            </div>
            <div class="flex w-8  lg:w-8 lg:h-8 mr-10 cursor-pointer hover:text-gray-50 transition duration-150">
                <a target=_blank href="https://github.com/a-pillow">
                    <FaGithub />
                </a>
            </div>
        </div>
        <div class="mt-8">
            <button class="rounded-xl bg-red-900 font-bold text-gray-300 hover:bg-red-700 hover:shadow-glow hover:-translate-y-2 hover:text-white transition duration-100">
                <a class="py-4 px-8  inline-block w-100 h-100" href="src/assets/resume.pdf" target="_blank">
                    Download my Resume (PDF)
                </a>
            </button>
        </div>
    </div>
</div>

<div class="min-h-screen pt-8" id="about">
    <div class="bg-[#1e1e1e] p-8 lg:p-16  rounded-lg">
        <div class="text-gray-300 font-bold text-3xl">
            <h1 class>About Me</h1>
        </div>

        <p class="mt-8 text-lg">
            My name is Caleb, and I am a 17 year old highschool student
            living in Naperville, Illinois.
            <br />
            <br />
            Back in fifth grade, I joined a coding club at my elementary school.
            I was introduced to block coding on <a class="text-blue-400 hover:text-blue-200 duration-150" href="https://code.org/" target="_blank">code.org</a> and was immediately hooked.
            I loved using computers, and I naturally fell in love with programming. The moment
            I came home I started watching coding videos on youtube, spending my days
            fiddling with games, websites, and anything I was interested in.
            <br />
            <br />
            Currently, my love for progamming is still alive and I continue to spend 
            my days learning and getting lost into the deep sea of technology. I hope to pursue a Computer Science degree
            in my future and, ultimately, a lifetime of making a difference in the tech industry.
        </p>
    </div>
</div>

<div class="min-h-screen pt-8" id="projects">
    <div class="bg-[#1e1e1e] p-8 lg:p-16  rounded-lg">
        <div class="text-gray-300 font-bold text-3xl mb-8">
            <h1 class>Projects</h1>
        </div>

        <div class="grid grid-cols-1 gap-10">
            <div>
                <div class="w-full bg-hackftw bg-cover rounded-xl mb-4">
                    <div class="w-full h-full backdrop-filter backdrop-blur-sm rounded-xl p-4">
                        <h1 class="text-gray-900 font-bold text-2xl mb-3">
                            <a href="https://github.com/a-pillow/hackftw-2022" target=_blank class="cursor-pointer hover:text-gray-700 transition duration-200">
                                HackFTW 2022
                            </a>
                        </h1>
                        <div class="text-gray-900">
                            <p class="mt-3">This website informs people of the large negative impact people have on 
                                the world through statistics and images before incentivizing activism in
                                 local communities through volunteering and donations.</p>
    
                                </div>
                            </div>
                        </div>
                <div class="flex justify-evenly lg:justify-start lg:gap-x-8">
                    <div class="w-8 h-8 hover:text-green-400 transition duration-150">
                        <FaNodeJs />
                    </div>
                    <div class="w-8 h-8 hover:text-blue-400 transition duration-150">
                        <FaReact />
                    </div>
                    <div class="w-8 h-8 hover:text-blue-800 transition duration-150">
                        <FaCss3Alt />
                    </div>
                </div>
            </div>
            <!-- -->
        </div>
    </div>
</div>