import '../css/emailform.css';

export default function EmailForm() {


      return (
        <form method="POST" data-netlify="true" name="contact" className='contact-form'>
            <input
            type="hidden"
            name="form-name"
            value="contact"
            />
            <div className='contact-row-wrapper'>
              <input
              className='name-input'
              name="name"
              type="text"
              placeholder="Name"
              required
              />
              <input
              className='date-input'
              name="date"
              type="text"
              placeholder="Date"
              required
              />
            </div>
            <div className='contact-row-wrapper'>
              <input
              className='email-input'
              name="email"
              type="text"
              placeholder="Email"
              required
              />
              <input
              className='time-input'
              name="time"
              type="text"
              placeholder="Time"
              required
              />
            </div>
            <textarea
            className='message-input'
            name="message"
            placeholder="What can we do for you?"
            required
            ></textarea>
            <div className='button-wrapper'>
              <button className='button' type="submit">Submit</button>
            </div>
        </form>
      );
}
