fs =  require('fs');

const readStream = fs.createReadStream('data.txt','utf-8', (err, result) => {
    console.log('Error',err, result);
});
readStream.on('data', function (info) {
    console.log('\ninfo: ', info);
    let infoArray = info.match(/(\w+)/g);
    let infoObject = [];
    infoArray.forEach(info => {  
        let found = -1;
        if ((found = infoObject.findIndex(obj => obj.word === info)) === -1) {
            infoObject.push({word: info, count: 1});
        } else {
            infoObject[found]['count']++;            
        } 
    });
    let srtWords = infoObject.sort((a,b) => a.count - b.count);
    let srtWordsLength = srtWords.length;
    let mfWords = [], lfWords=[];
    for( i = 0 ; i<5 ; i++) {
        mfWords.push(srtWords[srtWordsLength-1-i]);
        lfWords.push(srtWords[i]);
    }
    console.log("\n***** Word List ******\n");
    srtWords.forEach( wd=> console.log(wd));
    console.log('\n \n Total No. of Words: ', srtWords.length);
    console.log("\n***** Most Frequent 5 Words ******\n");
    mfWords.forEach(wd => console.log(wd));
    console.log("\n***** Least Frequent 5 Words ******\n");
    lfWords.forEach(wd => console.log(wd));
    console.log("\n***** Unique Words ******\n");
    let uniqueWords = srtWords.filter( wd=> wd.count === 1);
    uniqueWords.forEach(wd => console.log(wd));
    console.log('\n \n Total No. of Unique Words: ', uniqueWords.length);
});