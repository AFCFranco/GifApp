export const getGifs=async (category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=AQOG1FyQs19xdoTjdYRN7FrZPBGBkgn2&q=${category}&limit=3`;
    const resp=await fetch(url);
    const {data}=await resp.json()
    //console.log(data[0].images)
    const gifs= data.map(img=>{
        let url=(img.images.downsized_medium.url);        
       return {
        id:img.id,
        title: img.title,
        url: url
    }})
    // console.log(gifs[1].url)
    return  gifs
}