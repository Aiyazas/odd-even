let num = Number(prompt('Enter The Number :'));

if(num %2 == 0){
    document.querySelector('h1').innerText = 'This number is : Even'
}else if(num % 2 == 1){
    document.querySelector('h1').innerText = 'This number is : Odd'
}
else{
    document.querySelector('h1').innerText = 'Please enter the number...';
}
