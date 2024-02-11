const rate = function () {
  const num = document.querySelectorAll(".num");
  num.forEach((n) => {
    n.addEventListener("click", function (e) {
      num.forEach((n) => {
        if (n.classList.contains("num-active")) {
          n.classList.remove("num-active");
        }
      });
      n.classList.add("num-active");
    });
  });
};

const rateRespond = function (e) {
  const submit = document.querySelector(".btn-submit");
  submit.addEventListener("click", function () {
    // rate display off , than you display on //
    const thankYou = document.querySelector(".thank-you");
    thankYou.style.opacity = 1;
  });
  // showing number of rate //
  window.addEventListener("click", function (e) {
    const num = e.target.closest(".num");
    if (!num) return;
    const number = num.innerHTML;
    const html = `
    <p class="rate-text">
          You selected
          <span class="rate">
            ${number}
          </span>
          out of 5
        </p>
    `;
    const rateText = document.querySelector(".rate-text");
    rateText.innerHTML = html;
  });
};

const initial = function () {
  rate();
  rateRespond();
};

initial();
