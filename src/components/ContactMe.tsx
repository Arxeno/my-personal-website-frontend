const ContactMe = () => {
  return (
    <div id="contact-me" className="container">
      <h1 className="border-effect head-of-each-section">Contact Me</h1>

      <div id="contact-me-subcontainer">
        <div id="">
          <label>First Name</label>
          <input className="button-effect" />
        </div>

        <div id="">
          <label>Last Name</label>
          <input className="button-effect" />
        </div>

        <div id="">
          <label>Email</label>
          <input className="button-effect" />
        </div>

        <div id="">
          <label>Message</label>
          <textarea className="button-effect" cols={30} rows={10}></textarea>
        </div>

        <button className="button-effect button-yellow">Send Email! 📩</button>
      </div>
    </div>
  );
};

export default ContactMe;
