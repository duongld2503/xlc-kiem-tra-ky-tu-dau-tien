function isFirstLetterUpperCase(str) {
    rngexp = /^[A-Z]/;
    if (rngexp.test(str)) {
        console.log("dung")
    } else {
        console.log("sai")
    }
}