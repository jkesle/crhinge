import fs from 'fs';

const matchesPath = process.argv[process.argv.indexOf('-m') + 1];
const matches = JSON.parse(fs.readFileSync(process.argv[3]));

const matchCount = matches.filter(entry => entry.match?.at(0)?.type =='match').length
const chatCount = matches.filter(entry => entry.chats).length
const metCount = matches.filter(entry => entry.we_met?.at(0)?.type == 'we_met').length

console.log("Your hinge stats: ")
console.log(`Likes sent: ${matches.length}`);
console.log(`Matches: ${matchCount}`);
console.log(`Match %: ${(matchCount / matches.length * 100).toFixed(2)}%`);
console.log(`% of matches chatted with: ${(chatCount / matchCount * 100).toFixed(2)}%`);
console.log(`% of matches met: ${(metCount / matchCount * 100).toFixed(2)}%`);
