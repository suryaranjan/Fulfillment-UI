export default {
    client_id: '6b0b41d9-25f1-4bcc-b3cc-74d47d98f134',
    //client_name:'VitaSourceWeb',
    redirect_uri: 'http://localhost:3000',
    response_type: 'token id_token',
    scope: 'openid profile VitaSourceAPI',
    // authority: 'http://localhost:5000/',
    authority: 'https://identity2.innogrp.com',
    silent_redirect_uri: 'http://localhost:3000/silentRenew.html',
    grant_type: 'implicit',
    // silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
    post_logout_redirect_uri:'http://localhost:3000',
    // revokeAccessTokenOnSignout :true,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
};