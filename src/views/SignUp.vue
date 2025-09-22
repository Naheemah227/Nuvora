
<template>
  <div class="signin-container">
    <div class="signin-card">
      <h2>Create an Account</h2>
      <form>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" v-model="loginInput.username"/>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" v-model="loginInput.email" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password"  v-model="loginInput.password"/>
        </div>

        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password"  v-model="loginInput.confirmPassword"/>
        </div>

        <button type="submit" class="btn"  @click="SubmitForm">Sign Up</button>
        <p class="signin-text">
          Already have an account?
          <a href="/login">Login</a>
        </p>
      </form>
    </div>
  </div>
</template>
  
<script setup>

import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();

const loginInput = reactive({
  username: "",
  email: "",
  password: "",


});

const confirmPassword = ref("");

// 🔹 Email validation regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 🔹 Password strength validation
function isStrongPassword(password) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

function SubmitForm() {
  const newUser = {
    username: loginInput.username.trim(),
    email: loginInput.email.trim(),
    password: loginInput.password.trim(),
  };

  // Validate all fields
  if (!newUser.username || !newUser.email || !newUser.password) {
    alert("All fields are required");
    return;
  }

  // Validate email
  if (!isValidEmail(newUser.email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Validate password strength
  if (!isStrongPassword(newUser.password)) {
    alert(
      "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character"
    );
    return;
  }

  // Check password match
  if (newUser.password !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  // Get existing users
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check for duplicate username
  const isDuplicate = existingUsers.some(
    (user) => user.username === newUser.username
  );

  if (isDuplicate) {
    alert("Username already exists. Please use another name.");
    return;
  }

  // Save new user
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  toast.success(`Welcome, ${newUser.username}! Registration successful.`);

  // Reset form
  loginInput.username = "";
  loginInput.email = "";
  loginInput.password = "";
  confirmPassword.value = "";

  // Navigate to login page (optional)
  router.push("/login");
}




</script>

<style scoped>
/* Background */
.signin-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1b5e20, #2e7d32); /* darker green */
  padding: 20px;
}

/* Card */
.signin-card {
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.signin-card h2 {
  margin-bottom: 20px;
  color: #1b5e20;
}

/* Form */
.form-group {
  text-align: left;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

/* Button */
.btn {
  width: 100%;
  padding: 12px;
  background: #2e7d32; /* darker green */
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
}

.btn:hover {
  background: #1b5e20;
}

/* Extra */
.signin-text {
  margin-top: 15px;
  font-size: 14px;
}

.signin-text a {
  color: #2e7d32;
  font-weight: bold;
  text-decoration: none;
}

.signin-text a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
  .signin-card {
    padding: 25px 20px;
  }

  .signin-card h2 {
    font-size: 22px;
  }
  
}
</style>

