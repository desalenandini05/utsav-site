'use client';
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200 p-6 text-center text-gray-800">

<h1 className="text-5xl font-extrabold text-orange-700 my-6">
  🪔 Utsav - Ganpati Decoration & Pooja Services 🐘
</h1>

      <section className="my-6">
        <p className="text-lg max-w-xl mx-auto">
          Celebrate Ganpati Utsav with beauty and devotion! We provide home decorations, daily fresh flowers, and customized pooja samagri — all delivered to your doorstep for 10 days!
        </p>
      </section>

      <section className="my-8">
      <h2 className="text-3xl font-bold text-orange-600 mb-2">🎁 Our Packages</h2>

        <ul className="list-disc text-left max-w-xl mx-auto pl-5">
          <li>🌸 Daily Fresh Flower Delivery (10 Days)</li>
          <li>🧺 Customized Pooja Samagri Kit (optional)</li>
          <li>🏠 Home Decoration Setup</li>
          <li>📦 Special Combo Deals</li>
        </ul>
      </section>

      <section className="my-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-2">🛒 Place Your Order</h2>

      <form
  onSubmit={(e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;

    // WhatsApp notification
    const message = `🎉 *New Ganpati Order Received!* 🎉\n\n👤 Name: ${name}\n🏡 Address: ${address}\n📱 Phone: ${phone}\n📦 Service: ${service}`;
    const whatsappURL = `https://wa.me/91YOURNUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Email backup (Formspree)
    const form = document.createElement("form");
    form.action = "https://formspree.io/f/YOUR-FORM-ID"; // Replace with your real Formspree endpoint
    form.method = "POST";

    const inputs = [
      { name: "Name", value: name },
      { name: "Address", value: address },
      { name: "Phone", value: phone },
      { name: "Service", value: service },
    ];

    inputs.forEach((field) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }}
  className="max-w-md mx-auto bg-white shadow-md rounded-xl p-4 space-y-3"
>
  <input name="name" type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
  <input name="address" type="text" placeholder="Address" className="w-full p-2 border rounded" required />
  <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
  <select name="service" className="w-full p-2 border rounded" required>
    <option value="">Select Service</option>
    <option>Only Flowers</option>
    <option>Only Samagri</option>
    <option>Full Package</option>
    <option>Only Decoration</option>
  </select>
  <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 hover:scale-105 transition-transform duration-200">
    Submit Order
  </button>
</form>

      </section>

      <footer className="mt-12 text-sm text-gray-600">
        📞 Contact us: 9673911816 | 📍 Pune, Maharashtra
      </footer>
    </main>
  );
}
