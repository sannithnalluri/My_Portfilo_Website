import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer class="bg-gray-800 text-gray-200 py-8">
  <div class="container mx-auto px-6 md:px-12">
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
    
      <nav class="mb-4 md:mb-0">
        <ul class="flex space-x-6">
          <li>
            <a href="#home" class="hover:text-purple-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" class="hover:text-purple-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#skills" class="hover:text-purple-400 transition duration-300">Skills</a>
          </li>
          <li>
            <a href="#projects" class="hover:text-purple-400 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-purple-400 transition duration-300">Contact</a>
          </li>

         
        </ul>
      </nav>

      <div class="flex space-x-4 mb-4 md:mb-0">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.48.68.89-.53 1.57-1.37 1.9-2.38-.83.49-1.74.84-2.71 1.03-.78-.83-1.89-1.35-3.12-1.35-2.36 0-4.28 1.92-4.28 4.28 0 .34.03.68.1 1.01-3.56-.18-6.72-1.89-8.83-4.48-.37.63-.58 1.36-.58 2.13 0 1.47.75 2.77 1.89 3.53-.7-.02-1.36-.21-1.95-.52v.05c0 2.05 1.46 3.77 3.4 4.16-.35.1-.72.15-1.09.15-.26 0-.51-.02-.76-.07.51 1.6 2 2.76 3.75 2.79-1.38 1.08-3.12 1.72-5.02 1.72-.33 0-.66-.02-.99-.06 1.83 1.17 4 1.85 6.33 1.85 7.6 0 11.77-6.31 11.77-11.77 0-.18-.01-.35-.02-.53.81-.58 1.5-1.3 2.05-2.12z"/></svg>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.451h-3.742v-5.743c0-1.368-.027-3.137-1.95-3.137-1.952 0-2.248 1.526-2.248 3.10v5.787H10.2V8.509h3.598v1.69h.052c.5-.946 1.717-1.936 3.527-1.936 3.76 0 4.458 2.481 4.458 5.702v6.187h.036zM5.637 7.586c-1.214 0-2.197-.981-2.197-2.186 0-1.217.983-2.197 2.197-2.197 1.207 0 2.19.98 2.19 2.197s-.983 2.186-2.19 2.186zm-1.871 12.865H7.51V8.509H3.766v11.942zM22.225 2H1.774C.794 2 0 2.794 0 3.774v16.453C0 21.206.794 22 1.774 22H22.23c.98 0 1.774-.794 1.774-1.774V3.774c0-.98-.794-1.774-1.774-1.774z"/></svg>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.306 3.438 9.79 8.207 11.388.6.111.827-.261.827-.579v-2.187c-3.338.727-4.045-1.611-4.045-1.611-.546-1.369-1.332-1.732-1.332-1.732-1.089-.745.083-.73.083-.73 1.206.086 1.838 1.236 1.838 1.236 1.071 1.835 2.809 1.306 3.493.999.107-.776.418-1.306.761-1.606-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.468-2.382 1.236-3.223-.123-.303-.536-1.525.117-3.175 0 0 1.013-.323 3.317 1.232.96-.267 1.992-.401 3.016-.406 1.024.005 2.055.139 3.016.406 2.304-1.556 3.317-1.232 3.317-1.232.654 1.65.24 2.872.118 3.175.768.841 1.236 1.912 1.236 3.223 0 4.608-2.81 5.629-5.482 5.922.431.372.816 1.102.816 2.22v3.293c0 .322.226.692.834.578C20.565 21.56 24 17.087 24 12 24 5.373 18.627 0 12 0z"/></svg>
        </a>
      </div>
    </div>

    <div class="text-center">
      <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
      <p class="mb-2">Phone: <a href="tel:+1234567890" class="hover:text-purple-400 transition duration-300">+1 (234) 567-890</a></p>
      <p class="mb-2">Email: <a href="mailto:your.email@example.com" class="hover:text-purple-400 transition duration-300">your.email@example.com</a></p>
      <p>Address: 123 Your Street, Your City, Your State, 12345</p>
    </div>
  </div>
</footer>

    </div>
  )
}
