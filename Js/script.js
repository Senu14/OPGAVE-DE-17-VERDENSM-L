
   const apiData = [];
   let detailData = [];

   const getApiData = () => {
    const apiEndpoint = "https://api.mediehuset.net/sdg/goals";

    fetch(apiEndpoint)
   .then((Response)=>{
       if(Response.ok){
       return Response.json();
   }
   
   }).then((data)=> {
    //    console.log(data.items);
       apiData.push(data.items);
   })
       .catch((error)=>{
       console.error(error)
   
   })
       .finally(()=>{
       renderContentt();
       });
   };


   const getditaldata = (id) => {
    const apiEndpoint = `https://api.mediehuset.net/sdg/goals/${id}`;

    fetch(apiEndpoint)
   .then((Response)=>{
       if(Response.ok){
       return Response.json();
   }
   
   }).then((data)=> {
    detailData.push(data.id)
    console.log(detailData);
        
   })
       .catch((error)=>{
       console.error(error)
   
   })
       .finally(()=>{
       renderdetail();
       });
       
   };

    const renderdetail =()=> {
    console.log(detailData);
   }
   const renderContentt = () =>{
       console.log(apiData);
       apiData[0].map((goal,i)=>createElements(goal) );
   };
   
   
   const createElements =(data)=> {
    console.log(data);
       document.getElementById("app").innerHTML+=`
     
     
       <a href="javascript:void(0)" 
       onclick= "openInfo(${data.id})">      
        <figure class="card"  style = "background-color: #${data.color}"> 
        <img  id="love" src=${data.image} 
        alt=${data.title}> 
        <article class="container">
        <h4>${data.title}</h4>
        </article>
        </figure>
       </a> 
     
       
     <div id="mySideInfo-${data.id}" class="sideInfo">
       <a href="javascript:void(0)" class="closebtn" onclick="closeInfo(${data.id})">&times;</a>
       <figure class="cardInfo" style = "background-color: #${data.color}"> 
       <img src=${data.image} alt=${data.title}> 
       <article class="containerInfo">
       <h4>${data.byline}</h4>
       <p>${data.description}</p>
       </article>
       </figure>
        </div>
    `
   };




   getApiData();
   function openInfo(id){
    console.log(id);
    document.getElementById (`mySideInfo-${id}`).style.width = "700px";
 
    
   }

   function closeInfo(id){
    document.getElementById(`mySideInfo-${id}`).style.width = "0";
   }
   
