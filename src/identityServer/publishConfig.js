export default {
    client_id: '4358d923-3b88-4b5e-b10e-bb3797e7b367',
    //client_name:'VitaSourceWeb',
    redirect_uri: 'https://pushtest.mqrefill.com',
    response_type: 'token id_token',
    scope: 'openid profile VitaSourceAPI',
    authority: 'https://identity2.innogrp.com/',
    silent_redirect_uri: 'https://pushtest.mqrefill.com/silentRenew.html',
    grant_type: 'implicit',
    // silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
};