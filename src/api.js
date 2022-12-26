export async function fetchImages(amiibo){
    const response = await fetch(
        `https://www.amiiboapi.com/api/amiibo/?name=${amiibo}`
    );
    const data = await response.json();
    return data.amiibo;
}