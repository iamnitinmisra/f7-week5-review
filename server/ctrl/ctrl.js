let goals = [];

module.exports = {
  compliments: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  fortunes: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);

    const randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  encourage: (req, res) => {
    const encouragementArr = [
      "You're doing great",
      "Keep up the good work",
      "You'll pass, don't worry",
    ];
    let randomIndex = Math.floor(Math.random() * encouragementArr.length);
    let randomEncouragement = encouragementArr[randomIndex];
    res.status(200).send(randomEncouragement);
  },
  goals: (req, res) => {
    const { goal } = req.body;
    goals.push(goal);
    res.status(200).send(goals);
  },
};
