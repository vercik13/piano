const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
  console.log(newUrl)
  new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? '0' + (i + 1) : (i + 1)
  const reMap = ['09','11','14','16','18','21','23','02','04','06','08','10','12','13','15','17','19','20','22','24','01','03','05','07']

  const newUrl = 'piano-keys/key' + reMap[i] + '.mp3'
  pianoKey.addEventListener('click', () => playSound(newUrl))
})