const btnSupport = document.getElementById('btnSupport');
const btnTournament = document.getElementById('btnTournament');
const support = document.getElementById('support');
const tournament = document.getElementById('tournament');

btnSupport.addEventListener('click', () => {
  support.scrollIntoView({ block: "start", behavior: "smooth" })
})

btnTournament.addEventListener('click', () => {
  tournament.scrollIntoView({ block: "start", behavior: "smooth" })
})


const Marquee = (selector, speed) => {
  const parentSelector = document.querySelectorAll(selector);
  for (let i = 0; i < parentSelector.length; i++) {
    const clone = parentSelector[i].innerHTML;
    const firstElement = parentSelector[i].children[0];
    let j = 0;
    parentSelector[i].insertAdjacentHTML('beforeend', clone);
    parentSelector[i].insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${j}px`;
      if (j > firstElement.clientWidth) {
        j = 0;
      }
      j = j + speed;
    }, 0);
  }
}


const stagesSwitcher = document.querySelector(`.stages__switcher`);
const stagesArrowLeft = stagesSwitcher.querySelector(`.stages__arrow--left`);
const stagesArrowRight = stagesSwitcher.querySelector(`.stages__arrow--right`);
const stagesSwitcherDots = stagesSwitcher.querySelectorAll(`.stages__switcher-dot`);

const stagesSlider = document.querySelector(`.stages__slider`);
const stagesSlides = stagesSlider.querySelectorAll(`.stages__block`);
const stagesLen = stagesSlides.length;
const stageWidth = stagesSlides[0].offsetWidth;


let stagesPage = 1;

stagesArrowLeft.setAttribute(`disabled`, ``);

stagesArrowLeft.addEventListener(`click`, () => {
  if (stagesPage <= 2) {
    stagesArrowLeft.setAttribute(`disabled`, ``);
  } else {
    stagesArrowRight.removeAttribute(`disabled`, ``);
  }

  for (let i = 0; i < stagesSwitcherDots.length; i++) {
    stagesSwitcherDots[i].setAttribute(`disabled`, ``);
  }

  stagesPage = stagesPage - 1;
  stagesSwitcherDots[stagesPage - 1].removeAttribute(`disabled`, ``);
  stagesSlider.style.left = `-${(stagesPage - 1) * (stageWidth + 25)}px`;

})

stagesArrowRight.addEventListener(`click`, () => {
  if (stagesPage >= stagesLen - 1) {
    stagesArrowRight.setAttribute(`disabled`, ``);
  } else {
    stagesArrowLeft.removeAttribute(`disabled`, ``);
  }
  
  for (let i = 0; i < stagesSwitcherDots.length; i++) {
    stagesSwitcherDots[i].setAttribute(`disabled`, ``);
  }

  stagesPage = stagesPage + 1;
  stagesSwitcherDots[stagesPage - 1].removeAttribute(`disabled`, ``);
  stagesSlider.style.left = `-${(stagesPage - 1) * (stageWidth + 25)}px`;
})




const participantsSwitcher = document.querySelector(`.participants__switcher`);
const partArrowLeft = participantsSwitcher.querySelector(`.participants__arrow--left`);
const partArrowRight = participantsSwitcher.querySelector(`.participants__arrow--right`);
const partPages = participantsSwitcher.querySelector(`.participants__pages`);
let partPage = 1;

const partSlider = document.querySelector(`.participants__slider`);
const partSlides = partSlider.querySelectorAll(`.participants__element`);
const partLen = partSlides.length;
const partWidth = partSlides[0].offsetWidth;

let clone = partSlides[partLen - 1].outerHTML;
partSlider.insertAdjacentHTML('afterbegin', clone);
partSlider.style.left = `-${partWidth}px`;
partSlider.style.transition = `0s ease-in-out`;
partSlides[partLen - 1].remove();

partArrowLeft.addEventListener(`click`, () => {
  clearInterval(participantsSlider);
  if (partPage <= 1) {
    partPage = partLen + 1;
  }

  partPage = partPage - 1;
  partPages.textContent = partPage + ` / 6`;
  partSlider.style.left = `0px`;
  partSlider.style.transition = `0.2s ease-in-out`;
  let partSlides = partSlider.querySelectorAll(`.participants__element`);
  partArrowLeft.setAttribute(`disabled`, ``);

  setTimeout(() => {
    let clone = partSlides[partLen - 1].outerHTML;
    partSlider.insertAdjacentHTML('afterbegin', clone);
    partSlides[partLen - 1].remove();
    partSlider.style.left = `-${partWidth}px`;
    partSlider.style.transition = `0s ease-in-out`;
    partArrowLeft.removeAttribute(`disabled`, ``);
  }, 200)
})

partArrowRight.addEventListener(`click`, () => {
  clearInterval(participantsSlider);
  if (partPage >= partLen) {
    partPage = 0;
  }

  partPage = partPage + 1;
  partPages.textContent = partPage + ` / 6`;
  partSlider.style.left = `-${2 * partWidth}px`;
  partSlider.style.transition = `0.2s ease-in-out`;
  let partSlides = partSlider.querySelectorAll(`.participants__element`);
  let clone = partSlides[0].outerHTML;
  partSlider.insertAdjacentHTML('beforeend', clone);
  partArrowRight.setAttribute(`disabled`, ``);

  setTimeout(() => {
    partSlides[0].remove();
    partSlider.style.left = `-${partWidth}px`;
    partSlider.style.transition = `0s ease-in-out`;
    partArrowRight.removeAttribute(`disabled`, ``);
  }, 200)
})

const participantsSlider = setInterval(() => {
  if (partPage >= partLen) {
    partPage = 0;
  }

  partPage = partPage + 1;
  partPages.textContent = partPage + ` / 6`;
  partSlider.style.left = `-${2 * partWidth}px`;
  partSlider.style.transition = `0.2s ease-in-out`;
  let partSlides = partSlider.querySelectorAll(`.participants__element`);
  let clone = partSlides[0].outerHTML;
  partSlider.insertAdjacentHTML('beforeend', clone);

  setTimeout(() => {
    partSlides[0].remove();
    partSlider.style.left = `-${partWidth}px`;
    partSlider.style.transition = `0s ease-in-out`;
  }, 200)

}, 4000);



window.addEventListener('load', Marquee('.ticker', 0.5));