import {
    PublicClientApplication
} from "@azure/msal-browser";
import {
    msalConfig,
    loginRequest
} from './auth';

import {
    goto
} from "$app/navigation";

export const msal_obj = new PublicClientApplication(msalConfig);
await msal_obj.initialize();

msal_obj.handleRedirectPromise()
    .then(handleResponse)
    .catch((error) => {
        console.error(error);
    });

export function selectAccount() {
    const currentAccounts = msal_obj.getAllAccounts();
    if (!currentAccounts) {
        signIn()
    } else if (currentAccounts.length > 1) {
        console.warn("Multiple accounts detected.");
    } else if (currentAccounts.length === 1) {
        msal_obj.setActiveAccount(currentAccounts[0]);
    }
}

function handleResponse(response) {
    if (response !== null) {
        msal_obj.setActiveAccount(response.account);
        goto("/content")
    } else {
        selectAccount();
    }
}

export function signIn() {
    msal_obj.loginRedirect(loginRequest);
}