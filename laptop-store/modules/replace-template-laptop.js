module.exports = function (templ, prod){
    
    return templ.replaceAll(`{%ID%}`, prod.id)
                .replaceAll(`{%PRODUCTNAME%}`, prod.productName)
                .replaceAll(`{%IMAGE%}`,prod.image)
                .replaceAll(`{%CPU%}`, prod.cpu)
                .replaceAll(`{%RAM%}`, prod.ram)
                .replaceAll(`{%STORAGE%}`, prod.storage)
                .replaceAll(`{%SCREEN%}`, prod.screen)
                .replaceAll(`{%PRICE%}`, prod.price)
                .replaceAll(`{%DESCRIPTION%}`, prod.description)
                
    
    /*     second option
    if(prod.organic){
       return  output.replaceAll(`{%ORGANIC%}`, '');
    }
    else{
        return  output.replaceAll(`{%ORGANIC%}`, 'not-organic');
    }*/ 
    
} 