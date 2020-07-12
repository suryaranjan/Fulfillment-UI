const DecodeToken = () => {
    let token = localStorage.getItem("access_token");
    const jwtDecode = require('jwt-decode');
    const TokenData = jwtDecode(token);
    return TokenData;
}

export const getUserSubjectId = () => {
    var TokenData = DecodeToken();
    if(TokenData['sub']){
        return TokenData['sub'];
    }
    return null;
}

export const getUserRole = () => {
    var TokenData = DecodeToken();
    if(TokenData['role']){
        return TokenData['role'];
    }
    return null;
}