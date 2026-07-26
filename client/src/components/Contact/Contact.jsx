import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
}

export default Contact;