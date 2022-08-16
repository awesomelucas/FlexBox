const flex = document.querySelector(".flexContainer")
const flexProp = document.querySelector("#flex")
const flexDirection = document.querySelector(".flexDirectionContainer")
const flexDirectionProp = document.querySelector("#flexDirection")
const flexWrap = document.querySelector(".flexWrapContainer")
const flexWrapProp = document.querySelector("#flexWrap")
const flexFlow = document.querySelector(".flexFlowContainer")
const flexFlowProp = document.querySelector("#flexFlow")
const justfyContent = document.querySelector(".justifyContentContainer")
const justfyContentProp = document.querySelector("#justifyContent")
const flexDirectionJustifyProp = document.querySelector(".flexDirection")
const alignItems = document.querySelector(".alignIntemsContainer")
const alignItemsProp = document.querySelector("#alignItems")
const flexDirectionAlignProp = document.querySelector(".flexDirectionAlign")
const alignContent = document.querySelector(".alignContentContainer")
const alignContentProp = document.querySelector("#alignContent")
const flexDirectionAlignContentProp = document.querySelector(".flexDirectionAlignContent")
const agradecimento = document.querySelector(".agradecimentos")
const reportar = document.querySelector(".reportar")
const reportarArea = document.querySelector(".report")
const infoReport = document.querySelector(".infoReport")
const fecharForm = document.querySelector(".close")

const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".btn")

flexProp.addEventListener("change", event=>{

    flex.style.display = event.target.value
})

flexDirectionProp.addEventListener("change", event=>{

    flexDirection.style.flexDirection = event.target.value
})

flexWrapProp.addEventListener("change", event=>{

    flexWrap.style.flexWrap = event.target.value
})

flexFlowProp.addEventListener("change", event=>{

    flexFlow.style.flexFlow = event.target.value
})

justfyContentProp.addEventListener("change", event=>{

    justfyContent.style.justifyContent = event.target.value
    
})

flexDirectionJustifyProp.addEventListener("change", event=>{
    justfyContent.style.heigth= "200px"
    justfyContent.style.flexDirection = event.target.value
})

alignItemsProp.addEventListener("change", event=>{

    alignItems.style.alignItems = event.target.value
})

flexDirectionAlignProp.addEventListener("change", event=>{

    alignItems.style.flexDirection = event.target.value
})

alignContentProp.addEventListener("change", event =>{
    alignContent.style.alignContent = event.target.value
})


flexDirectionAlignContentProp.addEventListener("change", (evt) => {
    alignContent.style.flexDirection = event.target.value
});

closeModal.addEventListener("click", event =>{
    modal.style.display = "none"
})

reportar.addEventListener("click", event =>{
    agradecimento.style.display = "none"
    infoReport.style.display = "none"
    reportarArea.style.display = "flex"
})

fecharForm.addEventListener("click", event =>{
    modal.style.display = "none"
})