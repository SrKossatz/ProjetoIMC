
//Object literal ( excluído 3 variáveis do modal e incluído no objeto)
export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal .title .close"),


  open () {modal.wrapper.classList.add("open")},
  close () {modal.wrapper.classList.remove("open")}
}

modal.btnClose.onclick = () => {
  //modalWrapper.classList.remove("open")
  modal.close()
}

window.addEventListener("keydown", handleKeyDown)
function handleKeyDown(event){
  if(event.key === "Scape"){
    modal.close()
  }
}