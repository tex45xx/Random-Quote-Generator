const btn= document.getElementById("btn");
const output = document.querySelector(".output");

let quote= [ " Ive dedicated my life to find my wifes murderer.If you can recommend someone, let me know" , "Dating in your 30s is like looking for a parking spot......The good ones are all taken. The rest are either handicapped or too far away." , "My wife asked me to please quit singing Wonderwall in the showerI said maybe." , "Hey, boss, my salary is not compatible with my skills!I know that, but I can't let you starve to death"];

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})
