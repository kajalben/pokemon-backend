exports.fetchData = async(url) =>{
    try{
        const response = await fetch(url);
        if(response.ok){
            return data = await response.json();
        }
        throw new Error("API is not working");
        
    }
    catch(e){
        console.log(e.message)
    }
}

