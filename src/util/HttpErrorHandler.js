
/**
 * Function do signout activity and redirect current page to login page.
 */
const onNonAuthorizedError = () => {
    // onSignOut();
    //TODO : Add Spinner, you are about to logout. 
    // location.replace(`/auth-login`);
}

/**
 * 
 * @param {*} error 
 * Http Error Handler method.
 */
export default function HttpErrorHandler(error) {
    const response_status = error?.response?.status;
    if(response_status == 401) {
        onNonAuthorizedError();
    } else if(response_status == 403){
        
    }
};
/*End of file*/
