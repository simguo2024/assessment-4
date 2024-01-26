const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const getTimeBtn = document.querySelector("#getTimeButton")
const whatToEatBtn = document.querySelector("#whatToEatButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getTime = () => {
    axios.get("http://localhost:4000/api/currenttime/")
        .then(res => {
            const data = res.data.time;
            alert(data);
    });
};


const getDish = () => {
    axios.get("http://localhost:4000/api/whattoeat/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getTimeBtn.addEventListener('click', getTime)
whatToEatBtn.addEventListener('click', getDish)