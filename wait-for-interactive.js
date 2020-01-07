"use strict";


module.exports = exports = function(){
    return new Promise(resolve=>{
        if(["interactive", "complete"].includes(document.readyState))
            resolve(Date.now());
        else 
            document.addEventListener("DOMContentLoaded", function(){
                resolve(Date.now());
            });
    });
}