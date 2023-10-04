const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");


const claculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);
    const data = {}; 

    formData.forEach((value,key) => {
        data[key] = +value;
    })


    // console.log ({data});
    const totalMarks = data.maths + data.science + data.english + data.hindi;
    const percentage = Math.floor(( totalMarks / maxMarks ) * 100 );
   resultEl.innerText = `your hard work get a  ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
    // console.log({totalMarks , percentage});
};