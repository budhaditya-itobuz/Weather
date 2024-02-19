const day=document.getElementById('day')
const date=document.getElementById('date')
const place=document.getElementById('place')
const condition=document.getElementById('condition')
const temperature=document.getElementById('temp')

const dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const funct =async ()=>{
const res= await fetch("https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=Gangtok&aqi=no")
const data= await res.json()

const d=new Date(data.location.localtime)

day.innerText=dayArr[d.getDay()]
date.innerText=d.toString().substring(4,10)
place.innerText=data.location.name
condition.innerText=data.current.condition.text
temperature.innerText=data.current.temp_c
}
funct()
