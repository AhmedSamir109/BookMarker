
var nameInput = document.getElementById('nameInput');
var urlInput = document.getElementById('urlInput');
var tbody = document.getElementById('tbody');
var anchor = document.getElementById('anchor');

// var sites = [];



if(localStorage.length !== 0 ){
    var sites = JSON.parse(localStorage.getItem('sites'));
    displayTable();
}else{
    var sites = [];
};



function createBookmark(){
   
    var site ={
        sitaName :nameInput.value ,
        siteUrl : urlInput.value
    };

   sites.push(site);

   localStorage.setItem('sites' , JSON.stringify(sites) );
   clear()
   retrivesites();
};






function clear(){
    nameInput.value = "";
    urlInput.value = "";
} 







    var trs = "";
function retrivesites(){

    lastIndex = sites.length -1 ;

    trs = `<tr>
                <td>${sites.length}</td>
                <td>${sites[lastIndex].sitaName}</td>
                <td>
                <button class="btn btn-dark px-4">
                    <i class="fa-solid fa-eye px-1 "></i> Visit
                </button>
                </td>
                <td>
                <button class="btn btn-danger px-4"> 
                    <i class="fa-solid fa-trash px-1"></i> Delete
                </button>
                </td>
            </tr>`;

            tbody.innerHTML += trs ;

         displayTable();
 };





function displayTable(){
    var trs = "" ;

    for(var i = 0 ; i<sites.length ; i++){
        trs += `<tr>
                    <td>${i+1}</td>
                    <td>${sites[i].sitaName}</td>
                    <td>
                    <button class="btn btn-dark px-4" onclick="visitSite(${i})">
                        <i class="fa-solid fa-eye px-1 "></i> Visit
                    </button>
                    </td>
                    <td>
                    <button class="btn btn-danger px-4" onclick="deleteBookmark(${i})"> 
                        <i class="fa-solid fa-trash px-1"></i> Delete
                    </button>
                    </td>
                </tr>`;
    };


    tbody.innerHTML = trs ;

};





function deleteBookmark(index) {
    sites.splice(index , 1)
    localStorage.setItem('sites' , JSON.stringify(sites))
    displayTable()
}

function visitSite(index){
    //  anchor.innerHTML= sites[index].urlInput;
  window.open(sites[index].siteUrl , "_blank" )
  
}