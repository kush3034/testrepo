let count = 0;

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram pst gained 10 followers! Congratulation!");
    } else if (count === 20){
        alert("Your Istagram post gained 20 followers! Keep it up!");
    }
}

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}