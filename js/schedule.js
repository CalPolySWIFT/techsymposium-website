import {data} from './scheduleData.js';

const container = document.getElementById("insertHTML");
let pos = "";
let template = ""
let nameID = "";

//todo: create logic for if key value is empty

//This large and nested for loop represents each event on the schedule
for(let card = data.length-1; card > -1; card--) {
    let event = data[card];
    setHeader(event, event.title, event.date, event.link);
    function setHeader(eventIndex, title, date, link) {
        
    }

    // Header, Title, Zoom Button
    template = `
        <div class="row content-section card-main">
            <div class="card-header border-round-top">${data[card].title}</div>
            <h2 class="card-title no-margin">${data[card].date}</h2>
            <div class="card border border-round-bottom">

                <!--insert main description-->
                <div id="insertDesc" class="row card">
                    <div id="insertButtons" class="row card">
                    
                    </div>
                    <!--<button class="btn center-block"><a href="${data[card].link}">${data[card].linkType} Link</a></button>-->
                    <!--<button class="btn center-block"><a href="${data[card].link}">LINK2</a></button>-->
                    <!--<button class="btn btn-speakers center-block" data-toggle="collapse" data-target=".collapseElement${card}">TOGGLE SPEAKERS</button>-->
                </div>

                <!--insert speaker cards-->
                <div id="insertInnerCard" class=" row card-inner flex-centered" >
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML("afterbegin", template);

    // Main description
    pos = document.getElementById("insertDesc");
    for(let i = data[card].desc.length-1; i > -1; i--) {
        template = `<p class="card-text">${data[card].desc[i]}</p>`;
        pos.insertAdjacentHTML("afterbegin", template);

    }

    // Speaker room links
    pos = document.getElementById("insertButtons");
    // for(let i = data[card].link.length-1; i > -1; i--) {
    for(let i = data[card].link.length-1; i > -1; i--) {
        template = `<button class="btn center-block"><a href="${data[card].link[i].url}">${data[card].link[i].name}</a></button>`;
        pos.insertAdjacentHTML("afterbegin", template);

    }

    // Group of speaker cards
    for(let i = data[card].speaker.length-1; i > -1; i--) {
        // replace all whitespaces https://stackoverflow.com/a/55303526
        nameID = data[card].speaker[i].name.replace(/\s/g, "");
        pos = document.getElementById("insertInnerCard");

        // Speaker Card, Modal box onclick
        template = `
            <div class="collapseElement${card} card-wrapper col-md-4 col-lg-4 in">

                <!-- Trigger the modal with a button -->
                <div class="" data-toggle="modal" data-target="#modal${nameID}">

                    <!-- Speaker Card -->
                    <h5 class="card-title border-round-top no-margin">${data[card].speaker[i].name}</h5>
                    <div class="card speaker border border-round-bottom mb-3 " >
                        <div class="speaker-card">
                            <div class="row g-0">
                                <div class="img-wrapper border col-md-4 col-sm-4 col-xs-4 flex-centered border-round-top border-round-bottom" >
                                    <!--<div class="border-round-top border-round-bottom">-->
                                        <img src="${data[card].speaker[i].image}" class="img-speaker">
                                    <!--</div>-->
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-8 speaker-text-wrapper">
                                    <div class="">
                                        <p class="card-text speaker-text">${data[card].speaker[i].desc}</p>
                                    </div>
                                    <div class="speaker-text-overlay"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal " id="modal${nameID}" role="dialog">
                            <div class="modal-dialog modal-dialog-scrollable modal-md modal-lg">

                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close">&times;</button>
                                        <h4 class="modal-title text-center">${data[card].speaker[i].name}</h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row flex-centered">
                                            <div class="img-wrapper border col-md-4 ">
                                                <img src="${data[card].speaker[i].image}" class="margin-centered flex-centered img-width-100">
                                            </div>
                                            <div class="col-md-8">

                                                <!--insert modal box speaker text-->
                                                <div id="insertModal" class="card-body">
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
        pos.insertAdjacentHTML("afterbegin", template);

        // Speaker Card Description
        pos = document.getElementById("insertModal");
        for(let j = data[card].speaker[i].desc.length-1; j > -1; j--) {
            template = `<p class="card-text speaker-modal-text">${data[card].speaker[i].desc[j]}</p>`;
            pos.insertAdjacentHTML("afterbegin", template);
        }

    }
}

