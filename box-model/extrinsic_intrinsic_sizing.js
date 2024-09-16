const intrinsicSwitch = document.querySelector("#intrinsic-switch");
const awesome = document.querySelector('[data-element="awesome"]');

// Set sizing attribute based on switch
intrinsicSwitch.addEventListener("change", () => {
  awesome.setAttribute(
    "data-sizing",
    intrinsicSwitch.checked ? "intrinsic" : "extrinsic"
  );
});
