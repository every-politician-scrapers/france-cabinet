module.exports = (id, position, personname, positionname) => {
  reference = {
    P854: 'https://www.gouvernement.fr/en/composition-of-the-government',
    P1476: {
      text: 'Composition of the Government',
      language: 'en',
    },
    P813: new Date().toISOString().split('T')[0],
    P407: 'Q1860', // language: English
  }
  if(personname)     reference['P1810'] = personname
  if(positionname)   reference['P1932'] = positionname

  return {
    id,
    claims: {
      P39: {
        value: position,
        qualifiers: {
          P580: '2020-07',
          P5054: 'Q96872687' // Castex Government
        },
        references: reference,
      }
    }
  }
}
