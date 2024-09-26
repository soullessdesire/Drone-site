import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Contact = () => {
  return (
    <section className="w-full max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">How to Reach Us</h3>
        <p className="flex items-center space-x-2 text-gray-700">
          <PhoneInTalkIcon />
          <span>(123) 456-7890</span>
        </p>
      </div>

      <form className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
