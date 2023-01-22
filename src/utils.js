export function addgmail(txt){
    if(!txt.endsWith('@gmail.com')){
        return txt + '@gmail.com'
    }
    return txt
}