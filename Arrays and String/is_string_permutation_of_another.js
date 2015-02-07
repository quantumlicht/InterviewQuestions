var str1 = "12345";
var str2 = "43125";
var str3 = "12346";
var str4 = "1112244";
var str5 = "11111";
var str6 = "15234";
function isPerm(str1, str2){
    var hash1 = {}, hash2 = {};
    if (str1.length != str2.length) return false;

    for (var i=0; i < str1.length; i++){
        hash1[str1[i]]= hash1[str1[i]]+1 || 1;
        hash2[str2[i]] = hash2[str2[i]]+1 || 1;
    }
    
    if (hash1.length != hash2.length) return false;
    for (var k in hash1){
        if (!hash2[k]) return false;
        if (hash1[k] != hash2[k]) return false;
    }
    return true;
}


console.log(isPerm(str1,str2), isPerm(str1,str3), isPerm(str1,str4), isPerm(str1,str5), isPerm(str1, str6));