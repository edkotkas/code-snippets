// https://www.codewars.com/kata/5d076515e102162ac0dc514e/solutions/javascript

function babySharkLyrics(){
  return `${['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', `Let's go hunt`].map((p, i) => new Array(4).fill('').map((x, xi) =>  xi < 3 ? `${p}, doo doo doo doo doo doo` : `${p}!`).join('\n')).join('\n')}\nRun away,…`
}



console.log(babySharkLyrics())
