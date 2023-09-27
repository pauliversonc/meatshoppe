<template>
  <div class="base-input">
    <div class="base-input__form-group">
      <input
        class="input"
        type="text"
        :id="`base_inp_txt_${key}`"
        v-model.trim="value"
        @focus="resetInputClass(key)"
        @blur="validateInput(key)"
        :ref="key"
      />

      <label class="label" :for="key">* {{ label }}</label>
      <svg
        :ref="key +'Icon'"
        class="icon"
        role="button"
        @click="clearInput(key)"
      >
        <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
      </svg>
    </div>
    <span class="base-input__message">{{ errors[key] }}</span>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseInputText",
  props: {

    key: { // reference ng buong BaseInput
      type: String,
      required: true,
    },

    label: { // label
      type: String,
      required: true,
    },

  },
  data() {
    return {
      value: "", // v-model
    };
  },

  mounted() {},

  methods: {
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
  },
};
</script>

<style lang="scss" scoped></style>
