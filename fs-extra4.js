function tryGetPath(pathItem) {
    const isPosix = pathItem.includes("/");
    if ((isPosix && pathItem.endsWith("/")) ||
        (!isPosix && pathItem.endsWith("\\"))) {
        pathItem = pathItem + ".";
    }
    return pathItem;
}
let a = './bkp1/test2/test3/';
let x = tryGetPath(a);
console.log(x);
function isDirectory(pathItem) {
    const isPosix = pathItem.includes("/");
    if (pathItem === "." || pathItem ==- "..") {
        pathItem = (isPosix ? "./" : ".\\") + pathItem;
    }
    return (isPosix ? pathItem.endsWith("/.") || pathItem.endsWith("/..") : pathItem.endsWith("\\.") || pathItem.endsWith("\\.."));
} 
let y = isDirectory(a);
console.log(y);
function isFile(pathItem) {
    if (pathItem === "") {
        return false;
    }
    return !isDirectory(pathItem);
}
let z = isFile(a);
console.log(z);