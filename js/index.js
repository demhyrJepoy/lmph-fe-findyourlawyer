const app = () => {

    let zipCodeCityControl;
    let zipCodeCityValue;
    let categoryControl;

    const load = () => {
        console.log("page loaded");

        zipCodeCityControl = document.querySelector('[id=zipCodeCity]');
        categoryControl = document.querySelector('#category');

        if (categoryControl != null && zipCodeCityControl != "") {
            zipCodeCityControl.addEventListener("change", function (e) {
                zipCodeCityValue = e.target.value;
                
                categoryControl.attributes.removeNamedItem('readonly');
            });

            categoryControl.addEventListener("change", function (e) {
                categoryValue = e.target.value;

                if(categoryValue !== null && categoryValue !== '')
                    revEngrModal().open({content: app().getStep3Content()});
            });
        }

    }

    const getValues = () => {
        return {zipCodeCityControl: zipCodeCityValue, categoryControl: categoryValue};
    }

    const otherCategoriesContent = () => {
        return '<h4>OTHER CATEGORIES</h4><small>Choose the categories that best fit your case</small><div class="mt-4 row row-cols-2"><div class=col><a href=#>Sed ut perspiciatis</a></div><div class=col><a href=#>Unde omnis iste</a></div><div class=col><a href=#>Natus error sit</a></div><div class=col><a href=#>Voluptatem accusantium</a></div><div class=col><a href=#>Doloremque laudantium</a></div><div class=col><a href=#>Totam rem aperiam</a></div><div class=col><a href=#>Eaque ipsa quae</a></div><div class=col><a href=#>Ab illo inventore</a></div><div class=col><a href=#>Veritatis et quasi</a></div><div class=col><a href=#>Architecto beatae</a></div><div class=col><a href=#>Vitae dicta</a></div><div class=col><a href=#>Sunt explicabo</a></div><div class=col><a href=#>Nemo enim ipsam</a></div><div class=col><a href=#>Voluptatem quia</a></div><div class=col><a href=#>Voluptas sit</a></div><div class=col><a href=#>Aspernatur aut</a></div><div class=col><a href=#>Odit aut fugit</a></div><div class=col><a href=#>Sed quia consequuntur</a></div><div class=col><a href=#>Dolores eos qui</a></div><div class=col><a href=#>Ratione voluptatem</a></div><div class=col><a href=#>Sequi nesciunt</a></div><div class=col><a href=#>Neque porro quisquam est</a></div><div class=col><a href=#>Qui dolorem ipsum</a></div><div class=col><a href=#>Quia dolor sit amet</a></div><div class=col><a href=#>Consectetur</a></div><div class=col><a href=#>Adipisci velit</a></div><div class=col><a href=#>Sed quia non</a></div><div class=col><a href=#>Numquam eius</a></div></div>';
    }

    const getStep3Content = () => {
        return '<div class="d-flex flex-row mb-4"><div class="rounded-5 fs-4 me-3 px-3 text-white"style=background-color:gold><strong>3</strong></div><h4 class="mb-0 mt-1">Which <strong>Family Law</strong> issue(s) apply to your case?</h4></div><div class="row row-cols-2"><div class="col mb-3"><input type=checkbox> <span class=ms-4>Adoptions</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Child Support</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Guardianship</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Separations</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Child Custody and Visitation</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Divorce</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Paternity</span></div><div class="col mb-3"><input type=checkbox> <span class=ms-4>Spousal Support or Alimony</span></div></div><div class="mt-4 text-center"><button class="rounded-5 btn btn-lm-blue"><strong>FIND A LAWYER NOW</strong></button></div>';
    }

    const getReview1Content = () => {
        return '<h3>CLIENT REVIEWS</h3><hr><div class="d-flex flex-row px-3"><div class="text-center me-3 px-4"><i class="bi-person-circle fs-1"></i></div><div><h3>Mitchell M.</h3><strong class=text-muted>Cherryhill, NJ</strong><h5 class=mt-2>Family Law</h5></div></div><div class=mt-3><span class="fs-4 me-2">Rating (29 users)</span> <span><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span></div><hr><div class="row row-cols-2"><div class=col><strong>Overall</strong></div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div><div class=col>Responded in a timely manner</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Gave complete and clear information</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Answered questions clearly</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></div><div class=col>Understood needs</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></div><div class=col>Knowledgeable in legal area</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Good value for money</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div><div class=col>Would hire again</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Would recommed to friend</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div></div><hr><div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <strong class=ms-3>by Dexter Marchal, 06/10/2016</strong><p class=mt-2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <strong class=ms-3>by Marshall Mathers, 06/13/2016</strong><p class=mt-2>I\'m sorry, mama. I never meant to hurt you. I never meant to make you cry but tonight, I\'m cleaning out my closet.</div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i> <i class="bi bi-star"></i> <strong class=ms-3>by Anonymous User, 06/11/2016</strong><p class=mt-2>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></div>';
    }

    const getReview2Content = () => {
        return '<h3>CLIENT REVIEWS</h3><hr><div class="d-flex flex-row px-3"><div class="text-center me-3 px-4"><i class="bi-person-circle fs-1"></i></div><div><h3>Joel C.</h3><strong class=text-muted>Little Rock, AK</strong><h5 class=mt-2>Job & Employment Law</h5></div></div><div class=mt-3><span class="fs-4 me-2">Rating (29 users)</span> <span><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span></div><hr><div class="row row-cols-2"><div class=col><strong>Overall</strong></div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div><div class=col>Responded in a timely manner</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Gave complete and clear information</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Answered questions clearly</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></div><div class=col>Understood needs</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></div><div class=col>Knowledgeable in legal area</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Good value for money</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div><div class=col>Would hire again</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Would recommed to friend</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div></div><hr><div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <strong class=ms-3>by Dexter Marchal, 06/10/2016</strong><p class=mt-2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <strong class=ms-3>by Marshall Mathers, 06/13/2016</strong><p class=mt-2>I\'m sorry, mama. I never meant to hurt you. I never meant to make you cry but tonight, I\'m cleaning out my closet.</div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i> <i class="bi bi-star"></i> <strong class=ms-3>by Anonymous User, 06/11/2016</strong><p class=mt-2>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></div>';
    }

    const getReview3Content = () => {
        return '<h3>CLIENT REVIEWS</h3><hr><div class="d-flex flex-row px-3"><div class="text-center me-3 px-4"><i class="bi-person-circle fs-1"></i></div><div><h3>Brigida R.</h3><strong class=text-muted>Dallas, TX</strong><h5 class=mt-2>Real Estate Law</h5></div></div><div class=mt-3><span class="fs-4 me-2">Rating (29 users)</span> <span><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span></div><hr><div class="row row-cols-2"><div class=col><strong>Overall</strong></div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div><div class=col>Responded in a timely manner</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Gave complete and clear information</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Answered questions clearly</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></div><div class=col>Understood needs</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></div><div class=col>Knowledgeable in legal area</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Good value for money</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div><div class=col>Would hire again</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></div><div class=col>Would recommed to friend</div><div class="col text-center"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div></div><hr><div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <strong class=ms-3>by Dexter Marchal, 06/10/2016</strong><p class=mt-2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <strong class=ms-3>by Marshall Mathers, 06/13/2016</strong><p class=mt-2>I\'m sorry, mama. I never meant to hurt you. I never meant to make you cry but tonight, I\'m cleaning out my closet.</div><div><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i> <i class="bi bi-star"></i> <strong class=ms-3>by Anonymous User, 06/11/2016</strong><p class=mt-2>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></div>';
    }

    return {
        loadEvent: load,
        controlValues: getValues,
        otherCategoriesContent: otherCategoriesContent,
        getStep3Content: getStep3Content,
        getReview1Content: getReview1Content,
        getReview2Content: getReview2Content,
        getReview3Content: getReview3Content
    }
}

const revEngrModal = () => {

    let backdrop = document.getElementById("modalBackdrop");
    let modalProper = document.getElementById("staticBackdrop");
    let modalTitle = document.getElementById("staticBackdropLabel");
    let htmlBody = document.querySelector('body');
    let modalHeader = modalProper.children.item(0).childNodes.item(1).childNodes.item(1);
    let modalBody = modalProper.children.item(0).childNodes.item(1).childNodes.item(3);
    let modalClosuresX = document.querySelectorAll('[data-bs-dismiss="revEngrModal"]')[0];
    let modalClosuresButton = document.querySelectorAll('[data-bs-dismiss="revEngrModal"]')[1];
    
    const open = (options) => {

        //change modal content
        if(options.content !== null && options.content !== undefined) {
            modalBody.innerHTML = options.content;
        } else {
            console.error("Put a content at least!");
            return undefined;
        }

        //change modal title
        if(options.title !== null && options.title !== undefined) {
            modalTitle.innerHTML = options.title;
            modalHeader.classList.remove('d-none');
        } else
            modalHeader.classList.add('d-none');

        //attach close event to modal close triggers
        modalClosuresX.addEventListener("click", doCloseNow);
        modalClosuresButton.addEventListener("click", doCloseNow);

        //open
        doOpenNow();
    }

    const close = () => {
        //close
        doCloseNow();

        //cleanup
        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';
    }

    const doOpenNow = () => {
        htmlBody.classList.add('modal-open');

        backdrop.classList.remove('d-none');
        backdrop.classList.add('show');

        modalProper.classList.add('show');
        modalProper.classList.add('d-block');
        modalProper.classList.remove('d-none');
    }

    const doCloseNow = () => {
        htmlBody.classList.remove('modal-open');
        
        backdrop.classList.remove('show');
        backdrop.classList.add('d-none');

        modalProper.classList.remove('show');
        modalProper.classList.remove('d-block');
        modalProper.classList.add('d-none');
    }


    return {
        open: open,
        close: close
    }
}