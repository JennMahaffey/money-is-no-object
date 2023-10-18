// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = function(obj) {
    if(obj.userRole === 'ADMIN'){
        return true
    }else{
        return false
    }
}

const getPlaylistLength = function(obj){
    return obj.songs.length
}

const getEmail = function(obj) {
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + '.prsvr@gmail.com'
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};