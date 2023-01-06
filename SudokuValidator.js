function getRow(puzzle, row) {
  return puzzle[row]
}

let column = []

function getColumn(puzzle, col) {
  for (let i = 0; i < puzzle.length; i++) {
      column.push(puzzle[i][col])
  } return column
}

let section = []

function getSection(puzzle, x, y) {
  if (y === 0) {
      if (x === 0) {
          for (let a = 0; a < 3; a++) {
              for (let b = 0; b < 3; b++) {
                  section.push(puzzle[a][b])}}}
      else if (x === 1) {
          for (let c = 0; c < 3; c++) {
              for (let d = 3; d < 6; d++) {
                  section.push(puzzle[c][d])}}}
      else if (x === 2) {
          for (let e = 0; e < 3; e++) {
              for (let f = 6; f < 9; f++) {
                  section.push(puzzle[e][f])}}
      }
  }
  else if (y === 1) {
      if (x === 0) {
          for (let a = 3; a < 6; a++) {
              for (let b = 0; b < 3; b++) {
                  section.push(puzzle[a][b])}}}
      else if (x === 1) {
          for (let c = 3; c < 6; c++) {
              for (let d = 3; d < 6; d++) {
                  section.push(puzzle[c][d])}}}
      else if (x === 2) {
          for (let e = 3; e < 6; e++) {
              for (let f = 6; f < 9; f++) {
                  section.push(puzzle[e][f])}}
      }
  }
  else if (y === 2) {
      if (x === 0) {
          for (let a = 6; a < 9; a++) {
              for (let b = 0; b < 3; b++) {
                  section.push(puzzle[a][b])}}}
      else if (x === 1) {
          for (let c = 6; c < 9; c++) {
              for (let d = 3; d < 6; d++) {
                  section.push(puzzle[c][d])}}}
      else if (x === 2) {
          for (let e = 6; e < 9; e++) {
              for (let f = 6; f < 9; f++) {
                  section.push(puzzle[e][f])}}
      }
  }
  return section
}

function includes1To9(arr) {
  for (let i = 1; i <= 9; i++) {
      if (arr.includes(i)) {
          if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
              return false
          }
      }
  } return true
}

function sudokuIsValid(puzzle) {
  for (let i = 0; i < 9; i++) {
      if (includes1To9(getRow(puzzle, i)) === false || includes1To9(getColumn(puzzle, i)) === false) {
          return false
      }
  } for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
          if (includes1To9(getSection(puzzle, j, k)) === false) {
              return false
          }
      }
  } return true
}
