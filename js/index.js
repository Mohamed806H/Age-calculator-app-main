const DayLabel = document.querySelector(".day-label");
const DayInput = document.querySelector("#Day-Input");
const MonthLabel = document.querySelector(".month-label");
const MonthInput = document.querySelector("#Month-Input");
const YearLabel = document.querySelector(".year-label");
const YearInput = document.querySelector("#Year-Input");
const SubmitBtn = document.querySelector("#submit-btn");
const YearSpan = document.querySelector(".span-year");
const MonthSpan = document.querySelector(".span-month");
const DaySpan = document.querySelector(".span-day");
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "var(--clr-LightRed)";
      parent.querySelector(".error").innerText = "this field is required.";
      document.querySelector(".div-month").style.margin = "-113px 0 0 251px";
      document.querySelector(".div-year").style.margin = "-114px 0 0 444px";
      validator = false;
    } else if (MonthInput.value > 12) {
      MonthInput.style.borderColor = "var(--clr-LightRed)";
      MonthInput.parentElement.querySelector(".error").innerText =
        "must be valid month.";
      document.querySelector(".div-month").style.margin = "-113px 0 0 251px";
      document.querySelector(".div-year").style.margin = "-114px 0 0 444px";
      validator = false;
    } else if (DayInput.value > 31) {
      DayInput.style.borderColor = "var(--clr-LightRed)";
      DayInput.parentElement.querySelector(".error").innerText =
        "must be valid day.";
      document.querySelector(".div-month").style.margin = "-113px 0 0 251px";
      document.querySelector(".div-year").style.margin = "-114px 0 0 444px";
      validator = false;
    } else if (YearInput.value > 2022) {
      YearInput.style.borderColor = "var(--clr-LightRed";
      YearInput.parentElement.querySelector(".error").innerText =
        "must be in the past";
      document.querySelector(".div-month").style.margin = "-113px 0 0 251px";
      document.querySelector(".div-year").style.margin = "-114px 0 0 444px";
      validator = false;
    } else {
      i.style.borderColor = "var(--clr-OffBlack)";
      parent.querySelector(".error").innerText = "";
      document.querySelector(".div-month").style.margin = "-94px 0 0 251px";
      document.querySelector(".div-year").style.margin = "-93px 0 0 444px";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (DayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (MonthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - DayInput.value;
    const m = month - MonthInput.value;
    const y = year - YearInput.value;

    DaySpan.innerHTML = d;
    MonthSpan.innerHTML = m;
    YearSpan.innerHTML = y;
  }
}

SubmitBtn.addEventListener("click", handleSubmit);
