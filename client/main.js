const fortuneButton = document.getElementById("fortuneButton");
const encouragementForm = document.getElementById("encouragementForm");
const inputBox1 = document.getElementById("encouragement");
const goalsForm = document.getElementById("goals");
const inputBox2 = document.getElementById("goal");
const goalSection = document.getElementById("goalSection");

const baseURL = "http://localhost:4000";

console.log(goalSection);

function encourage(e) {
  e.preventDefault();
  axios.get(`${baseURL}/api/encourage`).then((res) => {
    alert(`Dont worry about ${inputBox.value}. ${res.data}`);
  });
}

function getRandomFortune() {
  axios.get(`${baseURL}/api/fortune`).then((res) => {
    alert(res.data);
  });
}

function createGoal(e) {
  e.preventDefault();

  const body = {
    goal: inputBox2.value,
  };
  axios.post(`${baseURL}/api/goals`, body).then((res) => {
    const { data } = res;
    goalSection.innerHTML = "";
    data.forEach((element) => {
      const goals = document.createElement("div");
      goals.innerHTML = `<p>${element}</p>`;

      goalSection.appendChild(goals);
    });
  });
}

fortuneButton.addEventListener("click", getRandomFortune);
encouragementForm.addEventListener("submit", encourage);
goalsForm.addEventListener("submit", createGoal);
