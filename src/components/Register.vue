<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <Form
          @submit="displayContent()"
          :validation-schema="schema"
          v-slot="{ errors }"
        >
          <div class="modal-container">
            <div class="studentInfo">Register</div>
            <div class="firstName">
              <label for="firstName">First Name : </label>
              <Field
                class="form-field"
                type="text"
                placeholder="First Name"
                v-model="firstName"
                name="firstName"
                :class="{ 'is-invalid': errors.firstName }"
              />
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>
            <div class="lastName">
              <label for="lastName">Last Name : </label>
              <Field
                class="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                v-model="lastname"
                :class="{ 'is-invalid': errors.lastName }"
              />
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>
            <div class="number">
              <label for="number">Number : </label>
              <Field
                class="form-field"
                type="number"
                name="number"
                placeholder="Number"
                v-model="number"
                :class="{ 'is-invalid': errors.number }"
              />
              <div class="invalid-feedback">{{ errors.number }}</div>
            </div>
            <div class="email">
              <label for="email">Email : </label>
              <Field
                class="form-field"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                :class="{ 'is-invalid': errors.email }"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="password">
              <label for="password">Password : </label>
              <Field
                class="form-field"
                type="password"
                name="password"
                placeholder="Password"
                v-model="password"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="confirmPassword">
              <label for="confirmPassword">Confirm Password : </label>
              <Field
                class="form-field"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                v-model="confirmPassword"
                :class="{ 'is-invalid': errors.confirmPassword }"
              />
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
            <button class="button">Register</button>
          </div>
        </Form>
      </div>
    </div>
  </Transition>
</template>

<script>
import { store } from "./store.js";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

export default {
  data() {
    const schema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      number: Yup.string()
        .min(10, "Number is less than 10 characters")
        .max(10, "Number is more than 10 characters")
        .required("Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    });
    return {
      schema,
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  components: {
    Form,
    Field,
  },
  methods: {
    displayContent() {
      const NewInformation = {
        firstName: store.state.newData.firstName,
        lastName: store.state.newData.lastName,
        number: store.state.newData.number,
        email: store.state.newData.email,
        passwrod: store.state.newData.password,
        confirmPassword: store.state.newData.confirmPassword,
      };

      this.$emit("displayData", NewInformation);

      this.firstName = "";
      this.lastName = "";
      this.number = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";

      this.$router.push({ path: "/Home" });
    },
  },
  computed: {
    firstName: {
      get() {
        return store.state.newData.firstName;
      },
      set(value) {
        store.commit("setFirstname", value);
      },
    },
    lastname: {
      get() {
        return store.state.newData.lastName;
      },
      set(value) {
        store.commit("setLastname", value);
      },
    },
    number: {
      get() {
        return store.state.newData.number;
      },
      set(value) {
        store.commit("setNumber", value);
      },
    },
    email: {
      get() {
        return store.state.newData.email;
      },
      set(value) {
        store.commit("setEmail", value);
      },
    },
    password: {
      get() {
        return store.state.newData.password;
      },
      set(value) {
        store.commit("setPassword", value);
      },
    },
    confirmPassword: {
      get() {
        return store.state.newData.confirmPassword;
      },
      set(value) {
        store.commit("setConfirmPassword", value);
      },
    },
  },
};
</script>

<style scoped>
.register {
  text-align: left;
}
div {
  padding: 3px;
}
.invalid-feedback,
.is-invalid {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
  padding-left: 90px;
}
label {
  display: inline-flex;
  flex: 1;
  width: 90px;
}
.form-field.is-invalid {
  border-color: #dc3545;
}
.form-field {
  width: 55%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid #1899d6;
  transition: border 0.3s ease;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 350px;
  margin: 0px auto;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.button {
  appearance: button;
  background-color: #1899d6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 10px;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 40%;
}

.button:after {
  background-clip: padding-box;
  background-color: #1cb0f6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button:main,
.button:focus {
  user-select: auto;
}

.button:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button:disabled {
  cursor: auto;
}

.studentInfo {
  padding: 15px;
  text-align: center;
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
}
</style>
