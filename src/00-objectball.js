function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
function numPointsScored(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
    return "Player name not found";
}

function shoeSize(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }
    return "Player name not found";
}

function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    return "Team name not found";
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
        return Object.values(game.away.players).map(player => player.number);
    }
    return "Team name not found";
}

function playerStats(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    return "Player name not found";
}
function playerStats(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return { ...game.home.players[playerName] };
    } else if (game.away.players[playerName]) {
        return { ...game.away.players[playerName] };
    }
    return "Player name not found";
}

function bigShoeRebounds() {
    const game = gameObject();
    const players = [...Object.values(game.home.players), ...Object.values(game.away.players)];
    const largestShoeSize = Math.max(...players.map(player => player.shoe));

    // Find the player with the largest shoe size
    const biggestPlayer = players.find(player => player.shoe === largestShoeSize);

    return biggestPlayer ? biggestPlayer.rebounds : null;
}
function mostPointsScored() {
    const game = gameObject();
    let topPlayer = null;
    let maxPoints = 0;

    const players = [...Object.values(game.home.players), ...Object.values(game.away.players)];

    players.forEach(player => {
        if (player.points > maxPoints) {
            maxPoints = player.points;
            topPlayer = player;
        }
    });

    return topPlayer ? topPlayer : null;
}

function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    Object.values(game.home.players).forEach(player => {
        homePoints += player.points;
    });

    Object.values(game.away.players).forEach(player => {
        awayPoints += player.points;
    });

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    
    const players = [...Object.keys(game.home.players), ...Object.keys(game.away.players)];

    players.forEach(player => {
        if (player.length > longestName.length) {
            longestName = player;
        }
    });

    return longestName;
}
function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = null;

    const players = [...Object.values(game.home.players), ...Object.values(game.away.players)];

    // Find the player with the longest name
    players.forEach(player => {
        if (player.name.length > longestName.length) {
            longestName = player.name;
        }
    });

    // Find the player with the most steals
    players.forEach(player => {
        if (player.steals > mostSteals) {
            mostSteals = player.steals;
            playerWithMostSteals = player.name;
        }
    });

    return longestName === playerWithMostSteals;
}

