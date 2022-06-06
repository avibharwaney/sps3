// Global states
total_games = 0;
player1_wins = 0;
player1_loses = 0;
player1_draws = 0;
userName = "";

// Computer random choice generation
var randomChoice = function () {
  // Computer generates random number
  var randomNumber = Math.random();

  // Computer transforms random number to 1, 2, 3
  var indexSelection = Math.floor(randomNumber * 3 + 1);

  if (indexSelection == 1) {
    return "scissors";
  } else if (indexSelection == 2) {
    return "paper";
  } else {
    return "stone";
  }
};

// Produce the tally table
var tallyTable = function (input1, input2) {
  input1 = input1;
  input2 = input2;
  winningPercentage = Math.floor(
    (Number(player1_wins) / Number(total_games)) * 100
  );
  return (
    `<br><br> ${userName}'s move: ${input1}` +
    `<br><br> Computer's move: ${input2}` +
    `<br><br> Games: ${total_games}` +
    `<br><br> Wins: ${player1_wins}` +
    `<br><br> Draws: ${player1_draws}` +
    `<br><br> Losses: ${player1_loses}` +
    `<br><br> Winning %: ${winningPercentage}%`
  );
};

// Check input functon
var checkInput = function (input1) {
  if (
    input1 == "scissors" ||
    input1 == "paper" ||
    input1 == "stone" ||
    input1 == "reversed stone" ||
    input1 == "reversed paper" ||
    input1 == "reversed scissors"
  ) {
    return true;
  } else {
    return false;
  }
};

// Main game function
var playGame1 = function (input1) {
  // determine the random throw
  input2 = randomChoice();

  // run the game
  if (
    input1 === input2 ||
    (input1 == "reversed stone" && input2 == "stone") ||
    (input1 == "reversed scissors" && input2 == "scissors") ||
    (input1 == "reversed paper" && input2 == "paper")
  ) {
    total_games += 1;
    player1_draws += 1;
    return (
      `${userName} used ${input1}. Computer used ${input2}.` +
      `<br><br> It is a draw!` +
      tallyTable()
    );
  } else if (
    (input1 === "scissors" && input2 === "paper") ||
    (input1 === "paper" && input2 === "stone") ||
    (input1 === "stone" && input2 === "scissors") ||
    (input1 === "reversed paper" && input2 === "scissors") ||
    (input1 === "reversed stone" && input2 === "paper") ||
    (input1 === "reversed scissors" && input2 === "stone")
  ) {
    total_games += 1;
    player1_wins += 1;

    return (
      `${userName} used ${input1}. Computer used ${input2}.` +
      `<br><br> You win!` +
      tallyTable()
    );
  } else {
    total_games += 1;
    player1_loses += 1;

    return (
      `${userName} used ${input1}. Computer used ${input2}.` +
      `<br><br> You lose!` +
      tallyTable()
    );
  }
};

// code running to the html
var playGame = function (input1) {
  if (checkInput(input1) == false) {
    return (
      `Please try again. Input either:` +
      `<br>For the regular game: "scissors", "paper", or "stone"` +
      '<br>Or for the reversed game: "reversed scissors", "reversed paper", or "reversed stone"'
    );
  } else {
    input2 = randomChoice();
    if (
      input1 === input2 ||
      (input1 == "reversed stone" && input2 == "stone") ||
      (input1 == "reversed scissors" && input2 == "scissors") ||
      (input1 == "reversed paper" && input2 == "paper")
    ) {
      total_games += 1;
      player1_draws += 1;
      return `You draw` + tallyTable(input1, input2);
    } else if (
      (input1 === "scissors" && input2 === "paper") ||
      (input1 === "paper" && input2 === "stone") ||
      (input1 === "stone" && input2 === "scissors") ||
      (input1 === "reversed paper" && input2 === "scissors") ||
      (input1 === "reversed stone" && input2 === "paper") ||
      (input1 === "reversed scissors" && input2 === "stone")
    ) {
      total_games += 1;
      player1_wins += 1;
      return `You win!` + tallyTable(input1, input2);
    } else {
      total_games += 1;
      player1_loses += 1;
      return `You lose!` + tallyTable(input1, input2);
    }
  }
};

var main = function (input1) {
  // Add username
  if (!userName) {
    if (!input1) {
      return `Hi, please input your in-game name!`;
    }
    userName = input1;
    return (
      `Welcome to Ultimate SPS, ${userName}. Get ready to rumble!` +
      `<br> Please select either: ` +
      `For the regular game: "scissors", "paper", or "stone"` +
      `Or for the reversed game: "reversed scissors", "reversed paper", or "reversed stone"`
    );
  }

  // Check input
  if (checkInput(input1) == false) {
    return (
      `Please try again. Input either:` +
      `<br>For the regular game: "scissors", "paper", or "stone"` +
      '<br>Or for the reversed game: "reversed scissors", "reversed paper", or "reversed stone"'
    );
  }

  // Generate random number
  input2 = randomChoice();

  // Play the game
  if (
    input1 === input2 ||
    (input1 == "reversed stone" && input2 == "stone") ||
    (input1 == "reversed scissors" && input2 == "scissors") ||
    (input1 == "reversed paper" && input2 == "paper")
  ) {
    total_games += 1;
    player1_draws += 1;
    return `You draw` + tallyTable(input1, input2);
  } else if (
    (input1 === "scissors" && input2 === "paper") ||
    (input1 === "paper" && input2 === "stone") ||
    (input1 === "stone" && input2 === "scissors") ||
    (input1 === "reversed paper" && input2 === "scissors") ||
    (input1 === "reversed stone" && input2 === "paper") ||
    (input1 === "reversed scissors" && input2 === "stone")
  ) {
    total_games += 1;
    player1_wins += 1;
    return `You win!` + tallyTable(input1, input2);
  } else {
    total_games += 1;
    player1_loses += 1;
    return `You lose!` + tallyTable(input1, input2);
  }
};
