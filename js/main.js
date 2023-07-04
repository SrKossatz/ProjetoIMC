import { modal } from "./modal.js"
import { alertError } from "./alert.js"
import {notANumber, calculateIMC} from "./utils.js"



const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const input = document.querySelector("input")



form.onsubmit = function (event){
  event.preventDefault()
  const weight = inputWeight.value  
  const height = inputHeight.value


  const showAlertError = notANumber(weight) || notANumber(height)
  if(showAlertError){
    alertError.open()
    return;
  }

  alertError.close()
  

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`
  modal.message.innerText = message

  //modalWrapper.classList.add("open")
  modal.open()
}

//Evento para fechar o erro sempre que digitar no input
inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()



