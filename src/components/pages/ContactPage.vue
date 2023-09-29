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
          <form action="#" @submit.prevent="submitForm" class="contact__form">


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
         
 
            <!-- <div class="base-input">
              <div class="base-input__form-group">
                <input
                  class="input"
                  type="text"
                  id="name"
                  v-model.trim="form.name"
                  @focus="resetInputClass('name')"
                  @blur="validateInput('name')"
                  ref="name"
                />

                <label class="label" for="name">* Firstname</label>
                <svg
                  ref="nameIcon"
                  class="icon"
                  role="button"
                  @click="clearInput('name')"
                >
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
              <span class="base-input__message">{{ errors.name }}</span>
            </div>

            <div class="base-input">
              <div class="base-input__form-group">
                <input
                  class="input"
                  type="text"
                  id="lname"
                  v-model.trim="form.lname"
                  @focus="resetInputClass('lname')"
                  @blur="validateInput('lname')"
                  ref="lname"
                />

                <label class="label" for="lname">* Lastname</label>
                <svg
                  ref="lnameIcon"
                  class="icon"
                  role="button"
                  @click="clearInput('lname')"
                >
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
              <span class="base-input__message">{{ errors.lname }}</span>
            </div>


            <div class="base-input">
              <div class="base-input__form-group">
                <input
                  class="input"
                  type="text"
                  id="email"
                  v-model.trim="form.email"
                  @focus="resetInputClass('email')"
                  @blur="validateInput('email')"
                  ref="email"
                />

                <label class="label" for="email">* Email Address</label>
                <svg
                  ref="emailIcon"
                  class="icon"
                  role="button"
                  @click="clearInput('email')"
                >
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
              <span class="base-input__message">{{ errors.email }}</span>
            </div>

            <div class="base-input">
              <div class="base-input__form-group">
                <input
                  class="input"
                  type="text"
                  id="contact"
                  v-model.trim="form.contact"
                  @focus="resetInputClass('contact')"
                  @blur="validateInput('contact')"
                  ref="contact"
                />

                <label class="label" for="contact">* Contact Number</label>
                <svg
                  ref="contactIcon"
                  class="icon"
                  role="button"
                  @click="clearInput('contact')"
                >
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
              <span class="base-input__message">{{ errors.contact }}</span>
            </div>

            <div class="base-input">
              <div class="base-input__form-group">
                <input
                  class="input"
                  type="text"
                  id="subject"
                  v-model.trim="form.subject"
                  @focus="resetInputClass('subject')"
                  @blur="validateInput('subject')"
                  ref="subject"
                />

                <label class="label" for="subject">* Purpose of email</label>
                <svg
                  ref="subjectIcon"
                  class="icon"
                  role="button"
                  @click="clearInput('subject')"
                >
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
              <span class="base-input__message">{{ errors.subject }}</span>
            </div>

            <div class="base-input">
              <div class="base-input__form-group">
                <textarea
                  class="input textarea"
                  type="text"
                  id="body"
                  v-model.trim="form.body"
                  @focus="resetInputClass('body')"
                  @blur="validateInput('body')"
                  ref="body"
                  rows="5"
                >
                </textarea>

                <label class="label textarea" for="body"
                  >* Tell me something</label
                >
                <svg
                  ref="bodyIcon"
                  class="icon textarea"
                  role="button"
                  @click="clearInput('body')"
                >
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
              <span class="base-input__message">{{ errors.body }}</span>
            </div> -->

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
          <span class="faq__title">General Inquiries</span>
          <p class="faq__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            numquam totam! Ducimus!
          </p>
        </li>

        <li class="faq__list">
          <span class="faq__title">General Inquiries</span>
          <p class="faq__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            numquam totam! Ducimus!
          </p>
        </li>

        <li class="faq__list">
          <span class="faq__title">General Inquiries</span>
          <p class="faq__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            numquam totam! Ducimus!
          </p>
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
</template>

<script>
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

    filterInput() {
      this.inputText = this.inputText.replace(/\D/g, ''); // Remove non-digits
    },

    handleInputBlur(object){
      // console.log(a)
      const {key, value, error} = object;
      console.log(key)
      console.log(value)
      console.log(error)
      this.form[key] = value;
      this.errors[key] = error;

    },

    clearInput(key) {
      this.form[key] = "";
      this.resetInputClass(key);
      this.checkRefs(key);
    },

    resetInputClass(key) {
      let ref = this.$refs[key];
      // check if refs/array is multiple or not
      if (Array.isArray(ref)) ref = ref[0];

      // remove error message
      this.errors[key] = "";

      // this will reset the only one refs
      ref.classList.remove("invalid");
      ref.classList.remove("valid");
    },

    validateInput(key) {
      let ref = this.$refs[key];
      // check if refs/array is multiple or not
      if (Array.isArray(ref)) ref = ref[0];

      // check if key have value
      if (this.form[key].length > 0) {
        // test input
        const isValid = this.testInput(key);

        // if valid
        if (isValid.state) {
          ref.classList.remove("invalid");
          ref.classList.add("valid");
          this.errors[key] = "";
        }

        // if not valid, add error message
        else this.invalidateInput(key, ref, isValid.message);

        // if field doesnt have any value add error message
      } else this.invalidateInput(key, ref, "This field is required");

      // toggle input clear btn or x
      this.checkRefs(key);
    },

    invalidateInput(key, ref, message) {
      ref.classList.remove("valid");
      ref.classList.add("invalid");
      this.errors[key] = message;
    },

    testInput(key) {
      let pattern = "";

      if (key === "name" || key === "lname") {
        pattern = /^[A-Za-z]+( [A-Za-z]+)*$/;

        if (pattern.test(this.form[key])) {
          return { state: true, message: "Name is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Ensure that the name does not contain symbols or numbers.",
          };
        }
      }

      if (key === "email") {
        pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (pattern.test(this.form[key])) {
          return { state: true, message: "Email is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. The email address you've entered is not valid.",
          };
        }
      }

      if (key === "contact") {
        pattern = /^(\d{10,11})$/;

        if (pattern.test(this.form[key])) {
          return { state: true, message: "contact is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please provide a contact number with 10 to 11 digits.",
          };
        }
      }

      if (key === "subject") {
        pattern = /^[\s\S]{10,45}$/;

        if (pattern.test(this.form[key])) {
          return { state: true, message: "subject is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please enter between 10 and 45 characters.",
          };
        }
      }

      if (key === "body") {
        pattern = /^[\s\S]{20,250}$/;

        if (pattern.test(this.form[key])) {
          return { state: true, message: "body is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please enter between 20 and 250 characters.",
          };
        }
      }
    },

    // add or remove clear btn base on form.key
    checkRefs(key) {
      let ref = this.$refs[key];
      let refIcon = this.$refs[key + "Icon"];
      // check if refs/array is multiple or not
      if (Array.isArray(ref)) ref = ref[0];
      if (Array.isArray(refIcon)) refIcon = refIcon[0];

      if (
        (ref.classList.contains("valid") && this.form[key].length > 0) ||
        (ref.classList.contains("invalid") && this.form[key].length > 0)
      ) {
        refIcon.classList.add("visible");
      } else {
        refIcon.classList.remove("visible");
      }
    },

    submitForm() {
      let canSubmit = true;

      for (const key in this.form) {
        // console.log(!!!this.form[key] || !!this.errors[key])
        if (!!!this.form[key] || !!this.errors[key]) {
          canSubmit = false;
          break;
        }
      }

      if (canSubmit) {
        // Perform your form submission action here
        console.log("Form submitted!");
      } else {
        for (const key in this.form) {
          // run the event from all of base input text base on ref
          // run validate input base on key
          this.$refs['bit'+key].validateInput(key);
        }
        console.log("Form data is not valid. Please fix errors.");
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
  }

  &__para {
    font-size: 1.6rem;
    font-weight: 400;
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
    gap: 1rem;
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
    }
    .social__link {
      text-decoration: none;
    }
    .footer__icon {
      height: 2.4rem;
      width: 2.4rem;
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
</style>
