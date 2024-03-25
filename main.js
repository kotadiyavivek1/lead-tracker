let myleads=[];
let inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("save-tab");
//value fatch from the local storage if it is non-empty then this value store in our myleads array
let leadsfromLocalStorage=JSON.parse(localStorage.getItem("myleads"));
if(leadsfromLocalStorage){
    myleads=leadsfromLocalStorage;      
    randerleads(myleads);
}
tabBtn.addEventListener("click",()=>{
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myleads));
        randerleads(myleads);
    })
    }
)

deleteBtn.addEventListener("dblclick",()=>{
    localStorage.clear();
    myleads=[];
    randerleads(myleads);
})

inputBtn.addEventListener("click",function(){
    myleads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myleads",JSON.stringify(myleads));
    randerleads(myleads);
});
function randerleads(leads){
let listItems="";
for(i=0;i<leads.length;i++){
    listItems+=`<li class="myClass" >
        <a href=${leads[i]} target='blank'>  ${leads[i]}  </a>
        </li>`;
}
ulEl.innerHTML=listItems;
}