const getPuzzle = async () => {
  const response = await fetch('https://puzzle.mead.io/puzzle?wordCount=2');
  if (response.status === 200){
    const data = await response.json();
    return data.puzzle;
  } else {
      throw new Error ('Unable to fetch the puzzle');
  }
}

