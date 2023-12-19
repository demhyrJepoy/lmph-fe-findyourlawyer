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

    return {
        loadEvent: load,
        controlValues: getValues,
        otherCategoriesContent: otherCategoriesContent,
        getStep3Content: getStep3Content
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