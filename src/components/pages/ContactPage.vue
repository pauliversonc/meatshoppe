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
      <div class="contact__form">
        <div class="contact__form-wrapper"
        
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
          <el-form
            label-position="top"
            :model="form"
            :rules="rules"
            ref="myForm"
          >
            <el-row :gutter="10">
              <el-col :span="12" :xs="24">
                <el-form-item label="Name" prop="name">
                  <el-input
                    clearable
                    v-model="form.name"
                    placeholder="Input your first name"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12" :xs="24">
                <el-form-item label="Last Name" prop="lname">
                  <el-input
                    clearable
                    v-model="form.lname"
                    placeholder="Input your last name"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="12" :xs="24">
                <el-form-item label="Email" prop="email">
                  <el-input
                    clearable
                    placeholder="Input your email address"
                    v-model="form.email"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12" :xs="24">
                <el-form-item label="Contact Number" prop="contact">
                  <el-input
                    v-model="form.contact"
                    clearable
                    maxlength="11"
                    placeholder="09123456789"
                    show-word-limit
                    type="text"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col>
                <el-form-item label="What is your concern?" prop="subject">
                  <el-select
                    style="width: 100%"
                    v-model="form.subject"
                    placeholder="Select subject"
                  >
                    <el-option
                      v-for="subject in subjects"
                      :key="subject.id"
                      :label="subject.label"
                      :value="subject.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col>
                <el-form-item label="What may i help you?" prop="body">
                  <el-input
                    v-model="form.body"
                    :rows="4"
                    type="textarea"
                    placeholder="Tell me more"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item>
              <el-button type="primary" @click="submitForm(myForm)"
                >Submit</el-button
              >
              <el-button @click="resetForm(myForm)">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>

  <div class="faq">
    <div class="faq__wrapper">
      <ul class="faq__lists"
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
      subjects: [
        {
          id: 1,
          value: "option1",
          label: "Option 1",
        },

        {
          id: 2,
          value: "option2",
          label: "Option 2",
        },
      ],

      form: {
        name: "",
        lname: "",
        email: "",
        contact: "",
        subject: "",
        body: "",
        // Add more form fields as needed
      },
      rules: {
        name: [
          { required: true, message: "Firstname is required", trigger: "blur" },
        ],

        lname: [
          { required: true, message: "Lastname is required", trigger: "blur" },
        ],

        email: [
          { required: true, message: "Email is required", trigger: "blur" },
          { type: "email", message: "Invalid email format", trigger: "blur" },
        ],

        contact: [
          {
            required: true,
            message: "Contact num is required",
            trigger: "blur",
          },
          {
            validator: this.validateNumber,
            trigger: "blur",
          },
        ],

        subject: [
          { required: true, message: "Subject is required", trigger: "change" },
        ],

        body: [
          {
            required: true,
            message: "Message body is required",
            trigger: "blur",
          },
        ],

        // Add validation rules for other fields as needed
      },
    };
  },

  mounted() {},

  methods: {
    validateNumber(_, value, callback) {
      // Define a regular expression pattern for exactly 11 digits.
      var digitsPattern = /^\d{11}$/;

      if (/^[A-Za-z]+$/.test(value)) {
        console.log("Input consists of letters.");
        callback(new Error("Contact num consists of letters"));
      } else if (digitsPattern.test(value)) {
        console.log("Input consists of exactly 11 digits");
        callback(); // Validation passes
      } else {
        callback(new Error("Input is not valid"));
        console.log("Contact num is not valid.");
      }
    },

    submitForm() {
      this.$refs.myForm.validate((valid) => {
        if (valid) {
          console.log("valid");
          // Form is valid, submit the data or perform your action here
        } else {
          console.log("invalid");
          // Form is not valid, display error messages
        }
      });
    },

    resetForm() {
      this.$refs.myForm.resetFields();
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

  &__form {
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
    border-radius: 4px;
    // min-height: 50rem;
    background-color: $light-high;

    padding: 2rem;

    //  715 = 44.6875 px below
    @media only screen and (max-width: 44.6875em) {
      position: static;
    }
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
</style>
