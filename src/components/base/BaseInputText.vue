<template>
  <div class="base-input">
    <div class="base-input__form-group">


      <textarea
        v-if="textInputType === 'textarea'"
        class="input"
        :class="{textarea: textInputType === 'textarea'}"
     
        :id="'base_inp_txt_'+textName"
        v-model.trim="formKey"
        @focus="resetInputClass()"
        @blur="validateInput(textName)"
        ref="bitInputRef"
        rows="5"
      >
      </textarea>

      <input
        v-else
        class="input"
        type="text"
        :id="'base_inp_txt_'+textName"
        v-model.trim="formKey"
        @focus="resetInputClass()"
        @blur="validateInput(textName)"
        ref="bitInputRef"


        @input="filterInput"
      />





      <label class="label"
      :class="{textarea: textInputType === 'textarea'}" :for="'base_inp_txt_'+textName">{{ textLabel }}</label>
      <svg
        ref="bitSvgRef"
        class="icon"
        :class="{textarea: textInputType === 'textarea'}" 
        role="button"
        @click="clearInput(textName)"
      >
        <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
      </svg>
    </div>
    <span class="base-input__message">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseInputText",
  emits: ['on-input-blur'],
  props: {
    textName: { // reference ng buong BaseInput
      type: String,
      required: true,
    },

    textLabel: { // label
      type: String,
      required: true,
    },

    // values can only be:
    // text, nunber, textarea
    textInputType: {
      type: String,
      default: 'text',
      required: false,
    },

    textRequired: {
      type: Boolean,
      default: true,
      required: false,
    }


  },
  data() {
    return {
      formKey: "", // v-model
      error: "",
    };
  },

  mounted() {},

  methods: {
    // remove all non digits from v-model
    filterInput(){
      if(this.textInputType === 'number') {
        this.formKey = this.formKey.replace(/\D/g, '');
      }
    },

    // remove inputs including the design of error / validation also message
    clearInput(key) {
      // reset the formkey to default
      this.formKey = "";
      this.resetInputClass();
      this.checkRefs();

      console.log(key)

      this.$emit('on-input-blur', {key, value: this.formKey, error: this.error});
    },

    // remove all validation ui error message
    resetInputClass() {
      let ref = this.$refs.bitInputRef;
   
      // // remove error message
      this.error = "";

      // remove all ui classes that show error and valid designs
      ref.classList.remove("invalid");
      ref.classList.remove("valid");
    },

    // check if user input a text - every on blur validate input
    validateInput(key) {
      let ref = this.$refs.bitInputRef;

      // check if key have value
      if (this.formKey.length > 0) {

        // test input depending to prop: textName
        const isValid = this.testInput(key);

        // if valid
        if (isValid.state) {
          ref.classList.remove("invalid");
          ref.classList.add("valid");
          this.error = "";
        }

        // if not valid, add error message
        else this.invalidateInput(ref, isValid.message);  

        // if field doesnt have any value add error message
      } else 
        if (this.textRequired) {
          this.invalidateInput(ref, "This field is required");
        } 

      // toggle input clear btn or x
      this.checkRefs(key);

      this.$emit('on-input-blur', {key, value: this.formKey, error: this.error});
    },

    // make input text invalid
    invalidateInput(ref, message) {
      ref.classList.remove("valid");
      ref.classList.add("invalid");
      this.error = message;
    },

    // test input data
    testInput(key) {
      let pattern = "";

      if (key === "name" || key === "lname") {
        pattern = /^[A-Za-z]+( [A-Za-z]+)*$/;

        if (pattern.test(this.formKey)) {
          return { state: true, message: "Name is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Ensure that the name does not contain symbols or numbers",
          };
        }
      }

      // // commented
      if (key === "email") {
        pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (pattern.test(this.formKey)) {
          return { state: true, message: "Email is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. The email address you've entered is not valid",
          };
        }
      }

      if (key === "contact") {
        pattern = /^(\d{10,11})$/;

        if (pattern.test(this.formKey)) {
          return { state: true, message: "contact is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please provide a contact number with 10 to 11 digits",
          };
        }
      }

      if (key === "min" || key === "max") {

        pattern = /^(\d{1,6})$/;

        if (pattern.test(this.formKey)) 
          return { state: true, message: "contact is valid" };   
         
        else {
          return {
            state: false,
            message:
            "Please enter a numeric value with a maximum of 6 digits",
          };
        }
      }

      if (key === "subject") {
        pattern = /^[\s\S]{10,45}$/;

        if (pattern.test(this.formKey)) {
          return { state: true, message: "subject is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please enter between 10 and 45 characters",
          };
        }
      }



      if (key === "subject") {
        pattern = /^[\s\S]{10,45}$/;

        if (pattern.test(this.formKey)) {
          return { state: true, message: "subject is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please enter between 10 and 45 characters",
          };
        }
      }

      if (key === "body") {
        pattern = /^[\s\S]{20,250}$/;

        if (pattern.test(this.formKey)) {
          return { state: true, message: "body is valid" };
        } else {
          return {
            state: false,
            message:
              "Invalid input. Please enter between 20 and 250 characters",
          };
        }
      }

    },

    // add or remove clear btn base on form.key
    checkRefs() {
      // reference the input
      let ref = this.$refs.bitInputRef;

      // reference the clear icon btn
      let refIcon = this.$refs.bitSvgRef;

      // show or hide clear btn in input element
      if (
        (ref.classList.contains("valid") && this.formKey.length > 0) ||
        (ref.classList.contains("invalid") && this.formKey.length > 0)
      ) {
        refIcon.classList.add("visible");
      } else {
        refIcon.classList.remove("visible");
      }
    },

  },


};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
.base-input {
  margin: 4px 0;
  .label {
    font-size: 1.4rem;
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
    @include error-message;
  }
}
</style>
