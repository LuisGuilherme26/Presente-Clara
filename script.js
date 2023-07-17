const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yes_btn = document.querySelector(".yes-btn");
const no_btn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = no_btn.getBoundingClientRect();

no_btn.addEventListener('mouseover', ()=>{
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    no_btn.style.left = i + 'px';
    no_btn.style.top = j + 'px';
})