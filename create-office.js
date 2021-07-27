// wd create-entity create-office.js "Minister for X"
module.exports = (label) => {
  return {
    type: 'item',
    labels: {
      en: label,
    },
    descriptions: {
      en: 'French government position',
    },
    claims: {
      P31:   { value: 'Q294414' }, // instance of: public office
      P279:  { value: 'Q83307'  }, // subclas of: minister
      P17:   { value: 'Q142'    }, // country: France
      P1001: { value: 'Q142'    }, // jurisdiction: France
      P361: {
        value: 'Q2993836',         // part of: Council of Ministers
        references: {
          P854: 'https://www.gouvernement.fr/en/composition-of-the-government',
        },
      }
    }
  }
}
