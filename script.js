// "use strict";

let btnes = document.querySelectorAll(".keyboard__btn");
let backSpaceBtn = document.querySelector(".keyboard__btn--backspace");
let tabBtn = document.querySelector(".keyboard__btn--tab");
let slashBtn = document.querySelector(".keyboard__btn--slash");
let delBtn = document.querySelectorAll(".keyboard__btn--del");
let capsLockBtn = document.querySelectorAll(".keyboard__btn--capslock");
let enterBtn = document.querySelector(".keyboard__btn--enter");
let shiftLeftBtn = document.querySelectorAll(".btn__shift--left");
let shiftRightBtn = document.querySelectorAll(".btn__shift--right");
let ctrlLeftBtn = document.querySelectorAll(".btn__ctrl--left");
let ctrlRightBtn = document.querySelectorAll(".btn__ctrl--right");
let winBtn = document.querySelectorAll(".keyboard__btn--win");
let altLeftBtn = document.querySelectorAll(".btn__alt--left");
let altRightBtn = document.querySelectorAll(".btn__alt--right");
let spaceBtn = document.querySelectorAll(".keyboard__btn--space");
let arrowUpBtn = document.querySelectorAll(".btn__arrow--up");
let arrowDownBtn = document.querySelectorAll(".btn__arrow--down");
let arrowLeftBtn = document.querySelectorAll(".btn__arrow--left");
let arrowRightBtn = document.querySelectorAll(".btn__arrow--right");
let body = document.querySelector("body");
let form = document.querySelector(".text");
let input = document.querySelector(".text__inner");
let keyboard = document.querySelector(".keyboard");

let flag = false;
window.addEventListener("keydown", (e) => {
  if (e.code == "ShiftLeft") {
    flag = true;
  }
  if (e.code == "AltLeft" && flag) {
    flag = false;
    keyboard.classList.toggle("_switch-language");
  }
});

for (let i = 0; i < btnes.length; i++) {
  btnes[i].setAttribute("btnname", btnes[i].innerHTML);
  btnes[i].setAttribute("lowerCaseName", btnes[i].innerHTML.toLowerCase());
}

window.addEventListener("keydown", (e) => {
  for (let i = 0; i < btnes.length; i++) {
    if (
      e.key == btnes[i].getAttribute("btnname") ||
      e.key == btnes[i].getAttribute("lowerCaseName")
    ) {
      btnes[i].classList.add("_active");
    }
    if (e.code == "Space") {
      for (let i = 0; i < spaceBtn.length; i++) {
        spaceBtn[i].classList.add("_active");
      }
    }
    if (e.code == "ShiftLeft") {
      for (let i = 0; i < shiftLeftBtn.length; i++) {
        shiftLeftBtn[i].classList.add("_active");
        shiftRightBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ShiftRight") {
      for (let i = 0; i < shiftRightBtn.length; i++) {
        shiftRightBtn[i].classList.add("_active");
        shiftLeftBtn[i].classList.remove("_active");
      }
    }

    if (e.code == "CapsLock") {
      for (let i = 0; i < capsLockBtn.length; i++) {
        capsLockBtn[i].classList.add("_active");
      }
    }
    if (e.code == "AltLeft") {
      for (let i = 0; i < altLeftBtn.length; i++) {
        altLeftBtn[i].classList.add("_active");
        altRightBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "AltRight") {
      for (let i = 0; i < altRightBtn.length; i++) {
        altRightBtn[i].classList.add("_active");
        altLeftBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ControlLeft") {
      for (let i = 0; i < ctrlLeftBtn.length; i++) {
        ctrlLeftBtn[i].classList.add("_active");
        ctrlRightBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ControlRight") {
      for (let i = 0; i < ctrlRightBtn.length; i++) {
        ctrlRightBtn[i].classList.add("_active");
        ctrlLeftBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "MetaLeft") {
      for (let i = 0; i < winBtn.length; i++) {
        winBtn[i].classList.add("_active");
      }
    }
    if (e.code == "Delete") {
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].classList.add("_active");
      }
    }
    if (e.code == "ArrowUp") {
      for (let i = 0; i < arrowUpBtn.length; i++) {
        arrowUpBtn[i].classList.add("_active");
      }
    }
    if (e.code == "ArrowDown") {
      for (let i = 0; i < arrowDownBtn.length; i++) {
        arrowDownBtn[i].classList.add("_active");
      }
    }
    if (e.code == "ArrowLeft") {
      for (let i = 0; i < arrowLeftBtn.length; i++) {
        arrowLeftBtn[i].classList.add("_active");
      }
    }
    if (e.code == "ArrowRight") {
      for (let i = 0; i < arrowRightBtn.length; i++) {
        arrowRightBtn[i].classList.add("_active");
      }
    }
  }
});

window.addEventListener("keyup", (e) => {
  for (let i = 0; i < btnes.length; i++) {
    if (
      e.key == btnes[i].getAttribute("btnname") ||
      e.key == btnes[i].getAttribute("lowerCaseName")
    ) {
      btnes[i].classList.remove("_active");
      btnes[i].classList.add("_remove");
    }
    if (e.code == "Space") {
      for (let i = 0; i < spaceBtn.length; i++) {
        spaceBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "CapsLock") {
      for (let i = 0; i < capsLockBtn.length; i++) {
        capsLockBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ShiftLeft") {
      for (let i = 0; i < shiftLeftBtn.length; i++) {
        shiftRightBtn[i].classList.remove("_active");
        shiftRightBtn[i].classList.remove("_remove");
      }
    }
    if (e.code == "ShiftRight") {
      for (let i = 0; i < shiftRightBtn.length; i++) {
        shiftLeftBtn[i].classList.remove("_active");
        shiftLeftBtn[i].classList.remove("_remove");
      }
    }
    if (e.code == "AltLeft") {
      for (let i = 0; i < altLeftBtn.length; i++) {
        altRightBtn[i].classList.remove("_active");
        altRightBtn[i].classList.remove("_remove");
      }
    }
    if (e.code == "AltRight") {
      for (let i = 0; i < altRightBtn.length; i++) {
        altLeftBtn[i].classList.remove("_active");
        altLeftBtn[i].classList.remove("_remove");
      }
    }
    if (e.code == "MetaLeft") {
      for (let i = 0; i < winBtn.length; i++) {
        winBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "Delete") {
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ArrowUp") {
      for (let i = 0; i < arrowUpBtn.length; i++) {
        arrowUpBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ArrowDown") {
      for (let i = 0; i < arrowDownBtn.length; i++) {
        arrowDownBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ArrowLeft") {
      for (let i = 0; i < arrowLeftBtn.length; i++) {
        arrowLeftBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ArrowRight") {
      for (let i = 0; i < arrowRightBtn.length; i++) {
        arrowRightBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ControlLeft") {
      for (let i = 0; i < ctrlLeftBtn.length; i++) {
        ctrlLeftBtn[i].classList.remove("_active");
      }
    }
    if (e.code == "ControlRight") {
      for (let i = 0; i < ctrlRightBtn.length; i++) {
        ctrlRightBtn[i].classList.remove("_active");
      }
    }
    setTimeout(() => {
      btnes[i].classList.remove("_remove");
    });
  }
});
