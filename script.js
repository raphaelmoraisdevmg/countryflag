const nameField = document.querySelector('#country_name');
const sendBtn=document.querySelector('#send_btn');
const onSendBtnClick = async () =>{
    const nameCountry =nameField.value;
    const title =document.querySelector('#country_title');
    const countryImg =document.querySelector('#country_flag'); 
    const data = await fetchCountry(nameCountry);
    console.log(data)
    const {name} = data[0];
    const {flags} = data[0];
    console.log(name);
    title.innerHTML = name.common;
    countryImg.alt=name.common;
    countryImg.src=flags.png;
}
const fetchCountry =async(name)=>{
    try{
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json();
    return data
    }catch(err){
        console.log(err);
    }
}
sendBtn.addEventListener('click',onSendBtnClick);