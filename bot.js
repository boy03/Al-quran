const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');

let init = 0;

const botSay = (data) => {
  return [
    'Perkenalkan saya ariqbot,siapa nama kamu ?',
    `Hallo ${data?.nama},berapa usia kamu?`,
    `ouh ${data?.usia},hobi kamu apa yaa?`,
    `wah sama aku juga hobi ${data?.hobi},makanan kesukaanmu apa?`,
    `wahh sama aku juga suka ${data?.makanan},btw kamu punya pacar gak?`,
    `ouh ${data?.pacar},ya udah kalo gitu cuman nanya. Udahan yah?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ makanan: jawaban.value });
  } else if (init === 5) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 6) {
    finishing();
  } else {
    botEnd();
  }
}

function finishing() {
  pertanyaan.innerHTML = `Terimakasih sudah mampir ${usersData[0]} &#128514; kerenkan wkwkwk,
  kapan kapan kita main ${usersData[2]} bareng yaaa`;
  jawaban.value = 'jelas wkwkw';
}

function botEnd() {
  window.location.reload();
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);

  usersData.push(jawaban.value);
  jawaban.value = '';
}
