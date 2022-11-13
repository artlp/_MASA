module.exports = function (templ, prod) {
    return templ.replaceAll(`{%PRODUCTNAME%}`, prod.productName)
        .replaceAll(`{%IMAGE%}`, prod.image)
        .replaceAll(`{%QUANTITY%}`, prod.quantity)
        .replaceAll(`{%FROM%}`, prod.from)
        .replaceAll(`{%PRICE%}`, prod.price)
        .replaceAll(`{%NUTRIENTS%}`, prod.nutrients)
        .replaceAll(`{%ID%}`, prod.id)
        .replaceAll(`{%DESCRIPTION%}`, prod.description)
        .replace(/{%ORGANIC%}/g, prod.organic ? '' : 'not-organic');
}; 