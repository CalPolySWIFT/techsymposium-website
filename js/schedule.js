import {eventData} from './scheduleData.js';

// let Header = function() {
//     return (
//         `<div class="card-header border-round-top">${data.title}</div>
//         <h2 class="card-title no-margin">${data.date}</h2>`
//     )
// }



const container = document.getElementById("insertHTML");

//Event Component
for(let event = eventData.length-1; event > -1; event--) {
    let data = eventData[event];

    let Event = `
    <div class="row content-section card-main">
        <!--Header Component-->
        ${Header(data)}        

        <div class="card border border-round-bottom">

            <!--Description Component-->
            ${Content(data)}
            <!--
            <div id="insertDesc" class="row card">
                <div id="insertButtons" class="row card">
            </div>
            -->

            <!--Speaker Card Component-->
            ${Speaker(data)}
            <div id="insertInnerCard" class=" row card-inner flex-centered" >
                <!--Modal Component-->
                <div id="insertModal" class="card-body">
                </div>
            </div>
        </div>
    </div>
    `;
    container.insertAdjacentHTML("afterbegin", Event)

    // Description(pos, data);
    // pos = document.getElementById("insertButtons");


    // pos = document.getElementById("insertInnerCard");


}
// function Description(pos, data) {
//     let template = "";
//     for(let i = data.desc.length-1; i > -1; i--) {
//         template = `<p class="card-text">${data.desc[i]}</p>`;
//         pos.insertAdjacentHTML("afterbegin", template);
//     }
// }

function Header(data) {
    return (
        `<div class="card-header border-round-top">${data.title}</div>
        <h2 class="card-title no-margin">${data.date}</h2>`
    )
}

//want to return as many description lines
function Content(data) {
    let HTML = "";
    let content = function() {
        for(let i = data.desc.length-1; i > -1; i--) {
            HTML = `<p class="card-text">${data.desc[i]}</p>`;
            // contentPos.insertAdjacentHTML("afterbegin", HTML);
        }
    }
    return content();
}

function Speaker(data) {

}

