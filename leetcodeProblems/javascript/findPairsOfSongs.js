/*
Amazon Music Pairs

Amazon Music is working on a new "community radio station" feature which will allow users to iteratively populate
the playlist with their desired songs. Considering this radio station will also have other scheduled shows to be
aired, and to make sure the community soundtrack will not run over other scheduled shows, the user-submitted songs
will be organized in full-minute blocks. Users can choose any songs they want to add to the community list, but
only in pairs of songs with durations that add up to a multiple of 60 seconds (e.g. 60, 120, 180).

As an attempt to insist on the highest standards and avoid this additional burden on users, Amazon will let them
submit any number of songs they want, with any duration, and will handle this 60-second matching internally. Once
the user submits their list, given a list of song durations, calculate the total number of distinct song pairs that
can be chosen by Amazon Music.

Example

n = 3

songs = [37, 23, 60]
One pair of songs can be chosen whose combined duration is a multiple of a whole minute (37 + 23 = 60) and the
return value would be 1. While the third song is a single minute long, songs must be chosen in pairs.


GUESS
G --> array of songs with length, seconds --> nums[]
U --> number of 60 second pairs --> num
E --> quadratically find a pair, create an object with diff from 60 and do lookups
S -->
Object with diff from 60
grab edge cases
for each sogn length, object of diff from 60, accounted for by mod
for each song length, lookup couple and if it's not in a set of indice tracker to knwo which are taken and index doesn't match current one, add to num Pairs

S -->
nums --> [37, 23, 60]
indices --> Set []
tracker --> {23: 0, 37: 1, 0: 2}
37 --> finds itself, 1 not in indices --> indices add 0, 1 from n%60 - 37, 37 object lookup,
23 --> finds itself, 0 already in indices --> skip
60 --> does not find 0 in indices --> skip
second
return 1;
*/
const findPairsOfSongs = (songs=[]) => {
  if(songs.length < 2) return 0;
  let songPairs = 0;
  const songIndexesTaken = new Set([]);
  const coupleDict = {};
  for(let ii = 0; ii < songs.length; ii++) {
    const secondsLeftoverFromSong = songs[ii]%60;
    coupleDict[`${60-secondsLeftoverFromSong}`] ? coupleDict[`${60-secondsLeftoverFromSong}`].push(ii) : coupleDict[`${60-secondsLeftoverFromSong}`] = [ii];
  }

  for(let ii = 0; ii < songs.length; ii++) {
    const secondsLeftoverFromSong = songs[ii]%60;
    if(coupleDict[60-secondsLeftoverFromSong] && !songIndexesTaken.has(ii)) {
      let indexAvailableForCouple = null;
      for(let jj = 0; jj < coupleDict[60-secondsLeftoverFromSong].length; jj++) {
        if(!songIndexesTaken.has(coupleDict[60-secondsLeftoverFromSong][jj])) {
          indexAvailableForCouple = coupleDict[60-secondsLeftoverFromSong][jj];
          break;
        }
      }

      if(indexAvailableForCouple !== null) {
        songIndexesTaken.add(ii);
        songIndexesTaken.add(indexAvailableForCouple);
        songPairs++;
      }
    }
  }

  return songPairs;
}

console.log(' Test 0 [] === 0 ', findPairsOfSongs([]) === 0);
console.log(' Test 1 [1] === 0 ', findPairsOfSongs([1]) === 0);
console.log(' Test 2 [1, 2] === 0 ', findPairsOfSongs([1, 2]) === 0);
console.log(' Test 3 [37, 23, 60] === 1 ', findPairsOfSongs([37, 23, 60]) === 1);
console.log(' Test 4 [10, 50, 90, 30] === 2 ', findPairsOfSongs([10, 50, 90, 30]) === 2);
console.log(' Test 5 [30, 20, 150, 100, 40] === 3 ', findPairsOfSongs([30, 20, 150, 100, 40]) === 3);
console.log(' Test 6 [60, 60, 60] === 3 ', findPairsOfSongs([60, 60, 60]) === 3);
