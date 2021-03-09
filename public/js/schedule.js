import {data} from './data.js';

//


let container = document.getElementById("insertHTML");
let pos = "";
let template = ""
let str = "";
// load by card
for(let card = data.length-1; card > -1; card--) {
    // let template = "";
    template = `
        <div class="row content-section">
            <div class="card-header border-round-top">${data[card].date}</div>
            <h2 class="card-title no-margin">${data[card].title}</h2>
            <div class="card border border-round-bottom">
                <div id="insertDesc" class="row card">
                    <div class="btn btn-speakers" data-toggle="collapse" data-target=".collapseElement">VIEW SPEAKERS</div>
                </div>
                <div id="insertInnerCard" class="collapseElement row card-inner card-desktop collapseElement" >
                </div>
            </div>
        </div>

    `;
    container.insertAdjacentHTML("afterbegin", template);

    pos = document.getElementById("insertDesc");
    for(let i = data[card].desc.length-1; i > -1; i--) {
        template = `<p class="card-text">${data[card].desc[i]}</p>`;
        pos.insertAdjacentHTML("afterbegin", template);
    }

    

    for(let i = data[card].speaker.length-1; i > -1; i--) {
        pos = document.getElementById("insertInnerCard");
        //replace all whitespaces https://stackoverflow.com/a/55303526
        str = data[card].speaker[i].name.replace(/\s/g, "");
        template = `
            <div class="col col-lg-6 col-md-6 col-sm-6">
                <!-- Trigger the modal with a button -->
                <div class="" data-toggle="modal" data-target="#${str}">
                    <h5 class="card-title no-margin">${data[card].speaker[i].name}</h5>
                    <div class="card border mb-3">
                        <div class="row g-0 ">
                            <div class="wrapper-img border border-round col-md-4">
                                <a href="${data[card].speaker[i].link}"><img src="${data[card].speaker[i].image}"></a>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">${data[card].speaker[i].desc}</p>
                                </div>
                            </div>
                        
                            <!-- Modal -->
                            <div class="modal " id="${str}" role="dialog">
                                <div class="modal-dialog modal-dialog-scrollable modal-sm modal-lg">

                                    <!-- Modal content-->
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close">&times;</button>
                                            <h4 class="modal-title">${data[card].speaker[i].name}</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="wrapper-img border border-round col-md-4">
                                                    <a href="${data[card].speaker[i].link}"><img src="${data[card].speaker[i].image}"></a>
                                                </div>
                                                <div class="col-md-8">
                                                    <div id="insertModal" class="card-body">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default close">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
        pos.insertAdjacentHTML("afterbegin", template);

        pos = document.getElementById("insertModal");
        // for(let i = 0; i < data[card].speaker.length; i++) {
            template = `<p class="card-text">${data[card].speaker[i].desc}</p>`;
            pos.insertAdjacentHTML("afterbegin", template);
        // }

    }
    // pos = document.getElementById("insertModal");
    // for(let i = 0; i < data[card].speaker.length; i++) {
    //     template = `<p class="card-text">${data[card].speaker[i].desc}</p>`;
    //     pos.insertAdjacentHTML("afterbegin", template);
    // }

}

// let closeE = document.getElementsByClassName("close");
// for(let i = 0; i < closeE.length; i++) {
//     closeE[i].addEventListener('click', function(e) {
//         // document.querySelector(".modal-backdrop").style.display = 'none';
//     });
// }


// template = `
// <div class="row content-section ">
//     <div class="card-header border-round-top">${data[0].date}</div>
//     <h2 class="card-title no-margin">${data[0].title}</h2>
//     <div class="card border border-round-bottom">
//         <div class="row card">
//             <p class="card-text">${data[0].desc[0]}</p>
//             <p class="card-text">${data[0].desc[1]}</p>
//             <p class="card-text">SEE YOU ALL ON ZOOM!</p>
//             <div class="btn btn-speakers" data-toggle="collapse" data-target="#collapseElement">VIEW SPEAKERS</div>
//         </div>
//         <div class="row card-inner card-desktop" id="collapseElement">
//             <div class="col col-lg-6 col-md-6 col-sm-6">
//                 <h5 class="card-title no-margin">${data[0].speaker[0].name}</h5>
//                 <div class="card border mb-3">
//                     <div class="row g-0 ">
//                         <div class="wrapper-img border border-round col-md-4">
//                             <a href="${data[0].speaker[0].link}"><img src="${data[0].speaker[0].image}"></a>
//                         </div>
//                         <div class="col-md-8">
//                             <div class="card-body">
//                                 <p class="card-text">${data[0].speaker[0].desc}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col col-lg-6 col-md-6 col-sm-6"">
//                 <h5 class="card-title no-margin">${data[0].speaker[0].name}</h5>
//                 <div class="card border mb-3">
//                     <div class="row g-0">
//                         <div class="wrapper-img border border-round col-md-4">
//                             <a href="${data[0].speaker[0].link}"><img src="${data[0].speaker[0].image}"></a>
//                         </div>
//                         <div class="col-md-8">
//                             <div class="card-body">
//                                 <p class="card-text">${data[0].speaker[0].desc}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// `;
// container.insertAdjacentHTML("afterbegin", template);

