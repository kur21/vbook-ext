let BASE_URL = "https://cmangal.com";
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}

let API = BASE_URL + '/api'

function capitalizeWords(str) {
  return str.replace('\\', '').split(" ").map(word => word[0] && word[0].toUpperCase() + word.slice(1)).join(" ");
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}