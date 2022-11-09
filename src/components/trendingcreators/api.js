

 export const getCreators=async()=>{
    try{
        const getdata=await fetch("https://random-data-api.com/api/v2/users?size=3&is_xml=true");
    const getUser= await getdata.json();
    }catch(err){
        console.log("error",err)
    }
   
 };