interface Details {
  artist: string;
  year: number;
};

interface AudioPlayer {
  volume: number;
  second: number;
  song: string;
  details: Details;
};

const audioPlayer: AudioPlayer = {
  volume: 90,
  second: 36,
  song: 'Mess',
  details: {
    artist: 'Vince Staples',
    year: 2018
  }
};

const { volume, second, song, details } = audioPlayer;
const { artist } = details;

//console.log('Volume:', volume);
//console.log('Second:', second);
//console.log('Song:', song);
//console.log('Artist:', artist);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, vegeta, trunks, otro='No hay otro'] = dbz; // Desestructuración de array

console.log(dbz[0]);
console.log(dbz[1]);
console.log(trunks);
console.log(otro);

export {};