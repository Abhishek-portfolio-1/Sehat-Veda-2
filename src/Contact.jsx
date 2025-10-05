import Footer from "./Footer";

function Contact(){
    return(
        <>
        <div className="p-10">
            <section class="bg-white py-12">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-bold mb-4">📞 Contact Us</h2>
    <p class="mb-8 text-gray-600">Have questions about Sehat Veda? We’re here to help!</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-sm">

     
      <div class="bg-green-50 p-4 rounded-lg shadow hover:shadow-md transition">
        <h3 class="font-semibold text-green-700 mb-2">WhatsApp</h3>
        <p>Click below to chat with our team on WhatsApp.</p>
        <a href="https://wa.me/917065254566" target="_blank" class="inline-block mt-2 text-green-600 font-semibold hover:underline">
          👉 Message on WhatsApp
        </a>
      </div>

     
      <div class="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition">
        <h3 class="font-semibold text-blue-700 mb-2">Call Us</h3>
        <p>Available Mon–Sat, 10am to 6pm</p>
        <p class="mt-2 font-bold">📞 +91-7065254566</p>
      </div>

      
      <div class="bg-yellow-50 p-4 rounded-lg shadow hover:shadow-md transition">
        <h3 class="font-semibold text-yellow-700 mb-2">Email</h3>
        <p>Have feedback or business inquiries?</p>
        <p class="mt-2 font-bold">📩 sehatvedastore@gmail.com</p>
      </div>

    </div>

    
    <div class="mt-12 text-left">
      <h3 class="text-xl font-bold mb-4">📬 Or Send Us a Message</h3>
      <form class="grid gap-4 md:grid-cols-2">
        <input type="text" placeholder="Your Name" class="border p-2 rounded-md" required />
        <input type="email" placeholder="Your Email" class="border p-2 rounded-md" required />
        <textarea placeholder="Your Message" class="border p-2 rounded-md md:col-span-2" rows="4" required></textarea>
        <button type="submit" class="bg-[#03441f] text-white py-2 px-4 rounded-md md:col-span-2 hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>

        </div>
        <div className=""><Footer/></div>
        </>
    )
}
export default Contact;