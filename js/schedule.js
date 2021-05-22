import {eventData} from './scheduleData.js';

const container = document.getElementById("insertHTML");

//Event Component
eventData.map((event) => {
    // console.log("event: " + event.title);
    let Event = `
    <div class="row content-section card-main">
        <!--Header Component-->
        ${Header(event)}        

        <div class="card border border-round-bottom">
            <!--Description Component-->
            ${Description(event)}

            <!--Links Components-->
            ${Links(event)}

            <!--Speaker Card Component-->
            ${Speaker(event)}
        </div>
    </div>
    `;
    container.insertAdjacentHTML("beforeend", Event)
})

function Header(data) {
    return (
        `<div class="card-header border-round-top">${data.title}</div>
        <h2 class="card-title no-margin">${data.date}</h2>`
    )
}

function Description(data) {
    let HTML = data.desc.map((i) => {
        return `<p class='card-text'>${i}</p>`
    }).join("")
    return HTML;
}

function Links(data) {
    let HTML = data.link.map((i) => {
        return `<button class="btn center-block"><a href="${i.url}">${i.name} Link</a></button>`
    }).join("")
    return HTML;
}

function Speaker(data) {
    let HTML = data.speaker.map((speaker) => {
        // replace all whitespaces https://stackoverflow.com/a/55303526
        let nameID = speaker.name.replace(/\s/g, "");
        return `
            <div id="insertInnerCard" class=" row flex-centered col-md-4 col-lg-4" >

            <!-- Trigger the modal with a button -->
            <div class="" data-toggle="modal" data-target="#modal${nameID}">
            
                <!--Speaker Header Component-->
                <h5 class="card-title border-round-top no-margin">${speaker.name}</h5>

                <!--Content-->
                <div class="card speaker border border-round-bottom mb-3 ">

                    <!--Speaker Content Component-->
                    ${SpeakerContent(speaker)}

                    <!-- Modal -->
                    <div class="modal " id="modal${nameID}" role="dialog">
                        <div class="modal-dialog modal-dialog-scrollable modal-md modal-lg">

                            <!-- Modal content-->
                            <div class="modal-content">

                                <!--Modal Header Component-->
                                <div class="modal-header">
                                    <button type="button" class="close">&times;</button>
                                    <h4 class="modal-title text-center">${speaker.name}</h4>
                                </div>

                                <!--Modal Content Component-->
                                <div class="modal-body">
                                    <div class="row flex-centered">
                                        <div class="img-wrapper border col-md-4 ">
                                            <img src="${speaker.image}" class="margin-centered flex-centered img-width-100">
                                        </div>
                                        <div class="col-md-8">

                                            <!--insert modal box speaker text-->
                                            <div id="insertModal" class="card-body">
                                                ${ModalContent(speaker)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn close">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        `;
    }).join("")
    return HTML;
}

{/* <div class="collapseElement${eventData[data]} card-wrapper col-md-4 col-lg-4 in"> */}

function Modal(data) {
    // let HTML = data.link.map((i) => {
    // }).join("")
    // return HTML;
}

function SpeakerHeader(speakerData) {
    return `<h5 class="card-title border-round-top no-margin">${speakerData.name}</h5>`
}

function SpeakerContent(speakerData) {
    return `
        <div class="speaker-card row g-0">
            <div class="img-wrapper border col-md-4 col-sm-4 col-xs-4 flex-centered border-round-top border-round-bottom" >
                <img src="${speakerData.image}" class="img-speaker">
            </div>
            <div class="col-md-8 col-sm-8 col-xs-8 speaker-text-wrapper">
                <div class="">
                    <p class="card-text speaker-text">${speakerData.desc}</p>
                </div>
                <div class="speaker-text-overlay"></div>
            </div>
        </div>
    `
}

function ModalBox(data) {
    // let HTML = data.link.map((i) => {
    // }).join("")
    // return HTML;
}

function ModalContent(data) {
    let HTML = data.desc.map((data) => {
        return `<p class="card-text speaker-modal-text">${data}</p>`
    }).join("")
    return HTML;
}



