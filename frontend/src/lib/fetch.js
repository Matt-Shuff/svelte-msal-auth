import {
    msal_obj,
    selectAccount
} from "$lib/redirect";

export async function fetch_with_auth(url, options = {}) {
    let account = msal_obj.getActiveAccount();
    if (account === null) {
        selectAccount()
        account = msal_obj.getActiveAccount();
    }

    let token = {}
    try {
        token = await msal_obj.acquireTokenSilent({
            scopes: ["user.read"],
            account: account
        });
    } catch (error) {
        console.log("error in fetch with auth", error)
        token = await msal_obj.acquireTokenRedirect({
            scopes: ["user.read"],
            account: account
        });
    }

    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token.accessToken}`
    };

    return fetch(url, {
        ...options,
        headers
    });


}