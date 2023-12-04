<template>
  <div class="contact">
    <div class="contact__wrapper">
      <h6
        class="contact__heading"
        v-motion
        :initial="{
          x: -200,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 100,
            mass: 1,
            delay: 700,
          },
        }"
      >
        <span class="contact__subhead">CONTACT US</span>
        <span class="contact__mainhead"
          >Get in Touch for Exceptional Service!</span
        >
        <p class="contact__para">
          Send us a message and we'll get your questions answered as soon as
          possible.
        </p>


      </h6>
      <div class="contact__container">
        <div
          class="contact__form-wrapper"
          v-motion
          :initial="{
            y: 200,
            opacity: 0,
          }"
          :enter="{
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 100,
              mass: 1,
              delay: 700,
            },
          }"
        >
          <form action="#" @submit.prevent="submitForm" class="contact__form" ref="form">
            <h3 class="contact__form-head" >We love to hear from you</h3>
            <p class="contact__form-para">Please be advised that the details you provided here are not to be disclosed publicly.</p>

            <!-- fname -->
            <BaseInputText 
              text-name="name"
              text-label="first name"
              @on-input-blur="handleInputBlur"
              ref="bitname"
            />

            <!-- lname -->
            <BaseInputText 
              text-name="lname"
              text-label="last name"
              @on-input-blur="handleInputBlur"
              ref="bitlname"
            />

            <!-- email -->
            <BaseInputText 
              text-name="email"
              text-label="email address"
              @on-input-blur="handleInputBlur"
              ref="bitemail"
            />

            <!-- contact -->
            <BaseInputText 
              text-name="contact"
              text-label="contact number"
              @on-input-blur="handleInputBlur"
              ref="bitcontact"
              text-input-type="number"
            />

            <!-- subject -->
            <BaseInputText 
              text-name="subject"
              text-label="purpose of email"
              @on-input-blur="handleInputBlur"
              ref="bitsubject"
            />

            <!-- email body -->
            <BaseInputText 
              text-name="body"
              text-label="tell me something"
              @on-input-blur="handleInputBlur"
              ref="bitbody"
              text-input-type="textarea"
            />
         
            <BaseButton
              btn-text="Submit"
              :btn-outline="true"
              :btn-outline-dark="true"
            />
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="faq">
    <div class="faq__wrapper">
      <ul
        class="faq__lists"
        v-motion
        :initial="{
          x: -200,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 100,
            mass: 1,
            delay: 700,
          },
        }"
      >
        <li class="faq__list">

          <div class="faq__icon-box">
            <svg class="faq__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-mail"
              ></use>
            </svg>
          </div>

          <div class="faq__list-wrap">
            <span class="faq__title">Chat to us</span>
            <p class="faq__body">
              Our friendly team is here to help.
              <br>
              <strong>meatshoppe.OFCL@gmail.com</strong>
            </p>
          </div>


        </li>

        <li class="faq__list">
          <div class="faq__icon-box">
            <svg class="faq__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-map-pin"
              ></use>
            </svg>
          </div>

          <div class="faq__list-wrap">
            <span class="faq__title">Visit us</span>
            <p class="faq__body">
              Come say hello at our main store.
              <br>
              <strong>Brgy. Conchu, Trece Martires City, Cavite</strong>
            </p>
          </div>
        </li>

        <li class="faq__list">

          <div class="faq__icon-box">
            <svg class="faq__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-phone"
              ></use>
            </svg>
          </div>

          <div class="faq__list-wrap">
            <span class="faq__title">Call us</span>
            <p class="faq__body">
              Mon-Sat from 8am to 8pm.
              <br>
              <strong>+63 915 543 6882</strong>
            </p>
          </div>
        </li>

        <div class="faq__socials">
          <span class="faq__title faq__title--sm">Follow us</span>
          <ul class="social__lists">
            <li class="social__list">
              <a class="social__link" href="#">
                <svg class="footer__icon">
                  <use
                    xlink:href="../../assets/icons/sprite.svg#icon-facebook"
                  ></use>
                </svg>
              </a>
            </li>

            <li class="social__list">
              <a class="social__link" href="#">
                <svg class="footer__icon">
                  <use
                    xlink:href="../../assets/icons/sprite.svg#icon-instagram"
                  ></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>

  <BaseToast ref="toast"></BaseToast>
</template>

<script>
import emailjs from 'emailjs-com';
import BaseToast from "../base/BaseToast.vue";

export default {
  name: "MeatshoppeContactPage",
  data() {
    return {
      form: {
        name: "",
        lname: "",
        email: "",
        contact: "",
        subject: "",
        body: "",
      },

      errors: {
        name: "",
        lname: "",
        email: "",
        contact: "",
        subject: "",
        body: "",
      },

      inputText: '',
    };
  },

  mounted() {},

  methods: {
    handleInputBlur(object){
      const {key, value, error} = object;
      this.form[key] = value;
      this.errors[key] = error;

    },

    submitForm() {
      let canSubmit = true;

      for (const key in this.form) {
        if (!!!this.form[key] || !!this.errors[key]) {
          canSubmit = false;
          break;
        }
      }

      if (canSubmit) {
        // Perform your form submission action here
        const form = this.$refs.form;
        emailjs.sendForm('service_myhdjor', 'template_aqn0ju3', form, 'h3c8Ellzwt0eddauB')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.$refs.toast.showToast("Success! Your message has been sent – we'll be in touch shortly.");
            // clear form

            this.$refs.bitname.clearInput('name')
            this.$refs.bitlname.clearInput('lname')
            this.$refs.bitemail.clearInput('email')
            this.$refs.bitcontact.clearInput('contact')
            this.$refs.bitsubject.clearInput('subject')
            this.$refs.bitbody.clearInput('body')


          }, (error) => {
            console.error(error)
            this.$refs.toast.showToast("We're sorry, but it seems there was an issue. Please try again, and if the problem persists, feel free to contact our support team.");
        });

   
        

      } else {
        for (const key in this.form) {
          // run the event from all of base input text base on ref
          // run validate input base on key
          this.$refs['bit'+key].validateInput(key);
        }
        this.$refs.toast.showToast("Form data is not valid. Please complete the form.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.contact {
  padding: 11rem 2rem 8rem 2rem;
  background-color: $light-low;
  // padding: 2rem;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;
    // border: 1px solid red;

    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 8rem;

    // between 1084 px and 1024 px
    @media only screen and (min-width: 64em) and (max-width: 67.75em) {
      gap: 2rem;
    }

    //  852 = 53.25 px below
    @media only screen and (max-width: 53.25em) {
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }

    //  715 = 44.6875 px below
    @media only screen and (max-width: 44.6875em) {
      grid-template-columns: 1fr;
    }
  }

  &__heading {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__subhead {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: $main;
  }

  &__mainhead {
    font-size: 4.8rem;
    line-height: 1;
    letter-spacing: -2px;
    color: $black;
  }

  &__para {
    font-size: 1.6rem;
    font-weight: 400;
    color: $black-tint;
  }

  &__container {
    position: relative;

    //  715 = 44.6875 px below
    @media only screen and (max-width: 44.6875em) {
      position: static;
    }
  }

  &__form-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    box-shadow: $shadow;
    background-color: $light-high;
    // border: solid thin $dark-low;
    padding: 2rem;

    //  715 = 44.6875 px below
    @media only screen and (max-width: 44.6875em) {
      position: static;
    }
  }

  &__form {
    display: grid;
    grid-template-columns: 1fr;
    // gap: 1rem;
  }

  &__form-head {
    font-size: 2.4rem;
    color: $black;
  }
  &__form-para {
    font-size: 1.6rem;
    line-height: 1;
    margin-bottom: 1rem;
    color: $black-tint;
  }
}

.faq {
  background-color: $light-mid;
  // min-height: 40rem;
  padding: 8rem 2rem;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;
    // border: 1px solid red;

    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 8rem;

    //  852 = 53.25 px below
    @media only screen and (max-width: 53.25em) {
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }

    //  715 = 44.6875 px below
    @media only screen and (max-width: 44.6875em) {
      grid-template-columns: 1fr;
    }
  }

  &__lists {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  &__list {
    list-style: none;

    display: flex;
    gap: 1rem;
  }

  &__icon-box {
    align-self: start;

    // padding: 1rem;
    border: 2px solid $white;

    display: flex;
    align-items: center;
    justify-content: center;

    
    transform: translateY(-20%);

  
  }

  &__icon {
    height: 4.1rem;
    width: 4.1rem;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      animation: bounce .5s ease;
      fill: $main;
    }
  }

  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    color: $black;

    &--sm {
      font-size: 1.6rem;
    }
  }
  &__body {
    font-size: 1.6rem;
    color: $black-tint;
  }

  &__socials {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 6rem;

    .social__lists {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .social__list {
      list-style: none;

      &:hover .footer__icon{
        fill: $main;
      }
    }
    .social__link {
      text-decoration: none;
    }
    .footer__icon {
      height: 2.4rem;
      width: 2.4rem;

      transition: fill .3s ease;
    }
  }
}

.base-input {
  .label {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    // background-color: $light-high;
    position: absolute;
    // width: auto;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: text;

    transition: all 0.4s ease-in-out;

    &.textarea {
      top: 2rem;
      // transform: translateY(100%);
    }
  }

  &__form-group {
    width: 100%;
    position: relative;
    // background-color: red;

    // default input
    .input {
      // background-color: $light-high;
      padding: 0.8rem 3.4rem 0.8rem 1rem;
      border-radius: 0;
      font-size: 1.4rem;
      font-family: inherit;
      font-weight: inherit;
      color: inherit;
      width: 100%;
      transition: border ease 0.4s;
      outline: none;
      // border: solid thin $dark-low;
      border: 2px solid $dark-low;

      &:focus {
        outline: none;

        & ~ .label {
          background-color: $light-high;
          font-size: 1rem;
          top: 0;
        }
      }

      // when input is valid
      &.valid {
        & ~ .label {
          background-color: $light-high;
          font-size: 1rem;
          top: 0;
        }
      }

      // when input is invalid
      &.invalid {
        // border: solid thin $main;
        border: 2px solid $main;
        & ~ .label {
          background-color: $light-high;
          color: $main;
          font-size: 1rem;
          top: 0;
        }
        & ~ .icon {
          fill: $main;
        }
      }

      &.textarea {
        resize: vertical;
      }
    }

    // X btn
    .icon {
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      fill: $black-tint;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      visibility: hidden;
      opacity: 0;
      // pointer-events: none; // auto

      &.visible {
        visibility: visible;
        opacity: 1;
      }

      &.textarea {
        top: 2rem;
        right: 2rem;
        // transform: translateY(100%);
      }
    }
  }

  &__message {
    font-size: 1.4rem;
    font-weight: inherit;
    color: $main;
  }
}


@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
</style>
