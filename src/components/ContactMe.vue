<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <form name="contact" netlify class="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 space-y-6"
            method="POST">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                <p class="text-gray-600">We'd love to hear from you</p>
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Name</label>
                <input type="text" name="name" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none"
                    placeholder="John Doe" />
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Email</label>
                <input type="email" name="email" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none"
                    placeholder="john@example.com" />
            </div>

            <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Message</label>
                <textarea name="message" rows="5" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none resize-none"
                    placeholder="Your message here..."></textarea>
            </div>

            <button type="submit"
                class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
                Send Message
            </button>
        </form>
    </div>
</template>