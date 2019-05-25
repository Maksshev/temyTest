import {resetFormValues} from "./formValues";

const checkSubmitAndReset = (res, actions, saveForm) => {

    if (res.statusText === 'Created') {
        resetFormValues()
            .then(newFormValues => {
                saveForm(newFormValues)
                actions.resetForm()
            });


    }
}

export {
    checkSubmitAndReset
}