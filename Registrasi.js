document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-registrasi");

  function isValidName(name) {
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const code = char.charCodeAt(0);
      if (code === 32) continue;          // spasi
      if (code >= 65 && code <= 90) continue;  // A-Z
      if (code >= 97 && code <= 122) continue; // a-z
      return false;
    }
    return true;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaInput = document.getElementById("nama");
    const nama = namaInput.value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const konfirmasi = document.getElementById("konfirmasi").value;
    const genderChecked = document.querySelector('input[name="gender"]:checked');

    const popupNama = document.getElementById("popup-nama");

    clearErrors();
    let valid = true;

    namaInput.addEventListener("input", function () {
      if (namaInput.value.length > 0 && !isValidName(namaInput.value)) {
        popupNama.textContent = "Nama hanya boleh berisi huruf dan spasi.";
        popupNama.style.display = "block";
      } else {
        popupNama.style.display = "none";
      }
    });

    if (!nama) {
      showError("error-nama", "Nama wajib diisi.");
      valid = false;
    } else if (!isValidName(nama)) {
      popupNama.textContent = "Nama hanya boleh berisi huruf dan spasi.";
      popupNama.style.display = "block";
      valid = false;
    } else {
      popupNama.style.display = "none";
    }

    if (!genderChecked) {
      showError("error-gender", "Pilih jenis kelamin.");
      valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      showError("error-email", "Email tidak valid.");
      valid = false;
    }

    if (password.length < 6) {
      showError("error-password", "Password minimal 6 karakter.");
      valid = false;
    }

    if (password !== konfirmasi) {
      showError("error-konfirmasi", "Konfirmasi tidak cocok dengan password.");
      valid = false;
    }

    if (valid) {
      alert("Registrasi berhasil!");
      window.location.href = "homepage.html";
    }
  });

  function showError(id, message) {
    const el = document.getElementById(id);
    if(el) el.textContent = message;
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(e => e.textContent = "");
    const popupNama = document.getElementById("popup-nama");
    if (popupNama) popupNama.style.display = "none";
  }
});
