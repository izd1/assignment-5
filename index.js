

document.getElementById("signin-btn").addEventListener("click", function () {
    const user = document.getElementById("user");
    const password = document.getElementById("password");

    if (user.value !== 'admin' || password.value !== 'admin123') {
        document.getElementById('error').classList.remove('hidden');
        return;
    }
    window.location.assign('./home.html');

});

document.querySelectorAll('.space-remove').forEach((e) => {
    e.addEventListener("input", function () {
        this.value = this.value.replace(/\s/g, "");
    });
});