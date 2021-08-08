const fs = require('fs')
const fse = require('fs-extra')


fs.exists('./original.txt', (exists) => {
    if (!exists) {
        fse.ensureFile('./original.txt', writesome)
    }
      
    
    })

    const writesome = (error)=>
    {
        fse.writeFile('./original.txt',"sometext",checkdir)
       
   
    }
    const checkdir = (error)=>{
        if(error)
        {
            console.log("file could not be created");
        }
        else
          fse.ensureDir('./bkp',makefile)

    }

    const makefile = (error)=>
    {
        if(error)
        {
            console.log("directory could not be created");
        }
        else
          fse.ensureFile('./bkp/copy.txt',docopy)
    } 
    const docopy = (error)=>
    {
        if(error)
        {
            console.log("copy file could not be created");
        }
        else
        {
            fse.copy('./original.txt','./bkp/copy.txt',removeoriginal)
        }
    }
    const removeoriginal = (error)=>
    {
        if(error)
        {
            console.log("could not copy the contents");
        }
        else
          fse.remove('./original.txt',(error)=>{
              if(error){console.log("file removed");}
              else
                console.log("original file deleted successfully")
              })
    }
            













