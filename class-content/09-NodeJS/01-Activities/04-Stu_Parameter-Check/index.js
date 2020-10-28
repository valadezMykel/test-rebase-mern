console.log(process.argv)

if(process.argv[2] === process.argv[3]){
    console.log("they are equal");
}
if(process.argv[2] > process.argv[3]){
    console.log(process.argv[2]+" is greater than "+process.argv[3]);
}

if(process.argv[2] < process.argv[3]){
    console.log(process.argv[2]+" is less than "+process.argv[3]);
};