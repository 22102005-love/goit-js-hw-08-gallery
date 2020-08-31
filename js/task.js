import cards from "./gallery-items.js";

const createCard = (card) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("gallery__iyem");
  const itemLinkRef = document.createElement("a");
  itemLinkRef.classList.add("gallery__link");
  itemLinkRef.src = card.original;
  const itemImgRef = document.createElement("img");
  itemImgRef.classList.add("gallery__image");
  itemImgRef.src = card.preview;
  itemImgRef.setAttribute("data-source", card.original);
  itemImgRef.alt = card.description;
  itemLinkRef.appendChild(itemImgRef);
  itemRef.appendChild(itemLinkRef);
  return itemRef;
};

const galleryCards = cards.map((card) => createCard(card));

const galleryRef = document.querySelector(".js-gallery");
galleryRef.append(...galleryCards);

const modalWindowRef = document.querySelector(".js-lightbox");
const modalImgRef = document.querySelector(".lightbox__image");
const modalBtnRef = document.querySelector(".lightbox__button");

galleryRef.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    const largeImgUrl = event.target.dataset.source;
    modalWindowRef.classList.add("is-open");
    modalImgRef.src = largeImgUrl;
  }
});

modalBtnRef.addEventListener("click", (even) => {
  modalWindowRef.classList.remove("is-open");
  modalImgRef.src = "";
});

modalWindowRef.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    modalWindowRef.classList.remove("is-open");
  }
});

window.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (event.code === "Escape") {
    modalWindowRef.classList.remove("is-open");
  }
});
