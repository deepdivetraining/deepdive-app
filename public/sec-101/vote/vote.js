/**
 * Source: https://gist.githubusercontent.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4/raw/e7e7d4e063c5bdd4fb6bc17d7b75370de42d48ee/index.js
 */
 if(!web3) {
   web3 = new Web3.providers.HttpProvider("https://ropsten.infura.io/4V5xU3MkRN6Lw3b9pMGh");
 }
abi=[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidateNames","type":"bytes32[]"},{"name":"secretkey","type":"bytes32"}],"name":"initCandidates","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"secretkey","type":"bytes32"}],"name":"resetVotes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

DeepDiveVoting = web3.eth.contract(abi);

// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = DeepDiveVoting.at('0xbE18d1139649Ca50cb1DEA50Ab82Dc9214977293');
candidates = {"good": "candidate-1", "bad": "candidate-2", "ugly": "candidate-3"}

function voteForCandidate(candidateName) {
  // candidateName = $("#candidate").val();
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.defaultAccount, value: 0}, function(err, res) {
    if(err) {
      alert("Het is niet gelukt om te stemmen. Probeer het opnieuw!");
      return;
    }
  });
};

function updateCounters() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    contractInstance.totalVotesFor.call(name, (err, result) => {
      if(err) {
        $("#" + candidates[candidateName]).html("??");
      } else {
        $("#" + candidates[name]).html(result.toString());
      }
    });
  }

  setTimeout(updateCounters, 5000);
}

$(document).ready(function() {
  updateCounters();
});
