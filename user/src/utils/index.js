export const convertTagListToString = (tagListArr) => {
    if(!tagListArr)
    return "";
    let tagString = '';
    for(let i = 0 ; i < tagListArr.length; i++) {
        tagString += tagListArr[i].name + ',';
    }
    return tagString
    .slice(0,tagString.length-1);
}