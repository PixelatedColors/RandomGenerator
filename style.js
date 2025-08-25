const nouns = ["sandwich","toaster","quantum banana","left sock","pigeon council","Wi-Fi goblin","grandma's pressure cooker","chair with opinions","AI goldfish","time-traveling auto-rickshaw","celery overlord","USB that only fits on Tuesdays","mysterious 13th month","spicy cloud","rubber duck debugger","keyboard warrior","unskippable ad","lootbox"];
const places = ["under your bed","in Kodaikanal traffic","inside a vending machine","on Mars but only on weekends","the backrooms of the internet","your neighbor's fridge","the comments section","a parallel timeline","that one group chat","a suspicious cloud server","the multiverse food court"];
const times = ["in 7 minutes","by 2045","next Tuesday","after 3 reloads","when nobody is looking","before your chai cools","at exactly 3:07 AM","during Mercury retrograde","once batteries are included"];
const actions = ["will become self-aware and demand snacks","will be banned for being too polite","will overthrow capitalism using coupons","will crash because you sneezed","will subscribe to its own newsletter","will file a bug report about you","will accidentally invent round triangles","will start a startup to disrupt pillows","will become Minister of Vibes","will pivot to being a blender","will launch an ICO for feelings","will release patch notes for reality v2.0","will win gold in competitive napping"];
const twists = ["but only on dial-up","unless you press the big red button","if the moon agrees","provided you say 'pls' in lowercase","while wearing flip-flops","assuming the pigeons approve","unless someone mentions Java","if the captcha is a vibe check","as foretold by the office printer"];
const emojis = ["🔮","🤖","🦆","🥴","🛸","🧪","📡","🐿️","🥪","🧠","🎛️","🌶️","🪙","🧹","💾","🧷"];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function rollDice(min=0,max=100){ return Math.floor(Math.random()*(max-min+1))+min; }

function makePrediction(topic, absurdity=3){
  const subject = topic.trim() ? topic : rand(nouns);
  const bits = [
    `${rand(emojis)} Prediction:`,
    `${subject} ${rand(actions)}`,
    `${rand(twists)}`,
    `Location: ${rand(places)}.`,
    `ETA: ${rand(times)}.`,
    `Confidence: ${rollDice(11,97)}% (calculated using Very Advanced Guessing™).`
  ];
  if(absurdity>=3) bits.push("Quantum disclaimer: Observing this may change the outcome.");
  if(absurdity>=4) bits.push("Legal note: Do not feed after midnight.");
  if(absurdity>=5) bits.push("Patch note: Reality will be hot-fixed shortly.");
  return bits.join("\\n");
}

function generate(){
  const topic=document.getElementById('topic').value;
  const absurdity=parseInt(document.getElementById('absurdity').value);
  const count=parseInt(document.getElementById('count').value);
  const out=document.getElementById('predictions');
  for(let i=0;i<count;i++){
    const p=document.createElement('div');
    p.className='prediction';
    p.textContent=makePrediction(topic, absurdity);
    out.prepend(p);
  }
}

function surprise(){
  document.getElementById('count').value=10;
  generate();
}

function clearAll(){
  document.getElementById('predictions').innerHTML='';
}

document.getElementById('absurdity').addEventListener('input', e=>{
  document.getElementById('absurdityLabel').textContent=e.target.value;
});
