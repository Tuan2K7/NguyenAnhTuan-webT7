const form = document.getElementById("registerForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  formGroup.querySelector(".error-msg").innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isEmpty(value) {
  return value.trim() === "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPhone(value) {
  return /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(value.trim());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Họ tên
  if (isEmpty(fullname.value)) {
    showError(fullname, "Vui lòng nhập họ tên");
    isValid = false;
  } else if (fullname.value.trim().length < 2) {
    showError(fullname, "Họ tên phải có ít nhất 2 ký tự");
    isValid = false;
  } else {
    showSuccess(fullname);
  }

  // Email
  if (isEmpty(email.value)) {
    showError(email, "Vui lòng nhập email");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email không hợp lệ");
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Số điện thoại
  if (isEmpty(phone.value)) {
    showError(phone, "Vui lòng nhập số điện thoại");
    isValid = false;
  } else if (!isValidPhone(phone.value)) {
    showError(phone, "Số điện thoại không hợp lệ");
    isValid = false;
  } else {
    showSuccess(phone);
  }

  // Mật khẩu
  if (isEmpty(password.value)) {
    showError(password, "Vui lòng nhập mật khẩu");
    isValid = false;
  } else if (password.value.length < 6) {
    showError(password, "Mật khẩu phải có ít nhất 6 ký tự");
    isValid = false;
  } else {
    showSuccess(password);
  }

  if (isValid) {
    alert("Đăng ký thành công!");
    form.reset();
    document.querySelectorAll(".form-group").forEach((g) => (g.className = "form-group"));
  }
});
