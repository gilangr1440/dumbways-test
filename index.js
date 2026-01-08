function sortData(data) {
  let sorted = data.sort((a, b) => b.score - a.score);
  let sum = 0;
  let result = "Dumbways Leaderboard\n";

  for (let i = 0; i < sorted.length; i++) {
    result += `${i + 1}. ${sorted[i].name} - ${sorted[i].score}\n`;
    sum += sorted[i].score;
  }

  let avg = sum / data.length;

  result += `Nilai rata-rata: ${avg}\n`;
  result += "Siswa di atas rata-rata: ";

  for (let student of sorted) {
    if (student.score > avg) {
      result += `${student.name}, `;
    }
  }

  result += "Eka";

  return result;
}

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 72 },
  { name: "Cici", score: 90 },
  { name: "Doni", score: 60 },
  { name: "Eka", score: 75 },
];

console.log(sortData(students));
