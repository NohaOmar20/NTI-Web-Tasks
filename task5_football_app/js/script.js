const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];  

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];  

const { team1, x: draw, team2 } = game.odds;

function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  players.forEach(player => console.log(player));
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

const odds = { team1, draw, team2 };
const likelyToWin = Object.entries(odds).sort((a, b) => a[1] - b[1])[0][0];
console.log(`Team more likely to win: ${game[likelyToWin]}`);

game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

const oddsValues = Object.values(game.odds);
const averageOdd = oddsValues.reduce((acc, odd) => acc + odd, 0) / oddsValues.length;
console.log(`Average odd: ${averageOdd}`);

console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);


const scorers = {};
game.scored.forEach(player => {
  scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);
