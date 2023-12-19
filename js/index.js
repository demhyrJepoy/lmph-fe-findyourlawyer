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
            });

            categoryControl.addEventListener("change", function (e) {
                categoryValue = e.target.value;
            });
        }

    }

    const getValues = () => {
        return {zipCodeCityControl: zipCodeCityValue, categoryControl: categoryValue};
    }

    return {
        loadEvent: load,
        controlValues: getValues
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

        console.log(options);


        //change modal content
        if(options.content !== null && options.content !== undefined) {
            modalBody.innerHTML = options.content;
        } else {
            console.error("Tsk tsk tsk. Put a content at least!");
            return undefined;
        }


        //change modal title
        if(options.title !== null && options.title !== undefined) {
            modalTitle.innerHTML = options.title;
        } else
            modalHeader.remove();



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