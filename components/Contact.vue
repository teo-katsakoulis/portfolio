<template>
  <div class="section-container">
    <h2 class="section-title">Contact</h2>
    <h5 v-if="email_sent" class="email-sent"><i class="material-icons">favorite</i> <span>Thank you for your message!</span></h5>
    <h5 v-if="email_failed" class="email-failed"><i class="material-icons">sentiment_dissatisfied</i> Message was not sent, please try again</h5>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group" :class="{ 'not-empty': name !== '' }">
        <input v-model="name" type="text" id="name" name="name" class="form-control" required />
        <label for="name" class="animated-label">Name</label>
      </div>
      <div class="form-group" :class="{ 'not-empty': email !== '' }">
        <input v-model="email" type="email" id="email" name="email" class="form-control" required />
        <label for="email" class="animated-label">Email</label>
      </div>
      <div class="form-group" :class="{ 'not-empty': message !== '' }">
        <textarea v-model="message" id="message" name="message" class="form-control" required></textarea>
        <label for="message" class="animated-label">Message</label>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div class="social-mobile">
      <a href="https://www.linkedin.com/in/theofilos-katsakoulis" target="_blank" class="mobile-social-icons">
        <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="linkedin-icon">
          <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
        </svg>
      </a>
      <a href="https://www.xing.com/profile/Theofilos_Katsakoulis" target="_blank" class="mobile-social-icons">
        <svg aria-hidden="true" data-prefix="fab" data-icon="xing" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-xing fa-w-12">
          <path fill="currentColor" d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"></path>
        </svg>  
      </a>
      <a href="documents/CV.pdf" target="_blank" class="mobile-social-icons">
        <i class="material-icons">picture_as_pdf</i>
      </a>
    </div>
    <div class="copyright">© {{ new Date().getFullYear() }} Theofilos Katsakoulis</div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "Contact",
    data() {
      return {
        name: '',
        email: '',
        message: '',
        endpoint: 'https://formspree.io/f/mnqwqvww',
        email_sent: false,
        email_failed: false
      };
    },
    methods: {
      async submitForm(event) {
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }
        const response = await axios.post(this.endpoint, data);
        if (response.status === 200) {
          this.email_sent = true;
          this.name = '';
          this.email = '';
          this.message = '';
        }
        else {
          this.email_failed = true;
        }
      }
    }
  };
</script>