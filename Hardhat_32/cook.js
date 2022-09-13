async function movieNight() {
  await cookPopcorn();
  await pourDrink();
  startMovie();
}

function cookPopcorn() {
  // code
  return Promise(/*Some code*/); // cannot move to the next step unless the promise is completed
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
