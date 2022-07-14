function main(title, author, pages){
    this.title = 'Title is '+title+'\n'
    this.author ='Author is :'+author+'\n'
    this.pages = 'No. of pages are '+pages
    this.readornot = function readornot(readingStatus){
           
            reading = 'Read :'+readingStatus;
            console.log (reading);
    }

   console.log(this.title, this.author,this.pages)
   
   

}

const theHobbit = new main('thehobbit','x',300);
theHobbit.readornot(true)


const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('Who are you?', name => {
        console.log(`Hey there ${name}!`);
        readline.close();
      });