export const getQuote = async () => {
    const response = await fetch('https://zenquotes.io/api/today/');
    const data = await response.json();
    console.log(data)
    return data;
}


module.exports = {
    getQuote
}