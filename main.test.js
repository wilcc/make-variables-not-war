const {
  myFirstName,
  myLastName,
  myBestFriend,
  mySentence,
  myFavoriteNum,
  myMentalAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
} = require('./main.js')



describe('myFirstName', () => {
  it(`is a String`, () => {
    expect(typeof myFirstName).toBe('string');
  })
});


describe('myLastName', () => {
  it(`is a String`, () => {
    expect(typeof myLastName).toBe('string');
  })
});

describe('myBestFriend', () => {
  it(`is a String`, () => {
    expect(typeof myBestFriend).toBe('string');
  })
});

describe('mySentence', () => {
  it(`is a String`, () => {
    expect(typeof mySentence).toBe('string');
  })
});

describe('myFavoriteNum', () => {
  it(`is a Number`, () => {
    expect(typeof myFavoriteNum).toBe('number');
  })
});

describe('myMentalAge', () => {
  it(`is a Number`, () => {
    expect(typeof myMentalAge).toBe('number');
  })
});

describe('myHeight', () => {
  it(`is a Number`, () => {
    expect(typeof myHeight).toBe('number');
  })
});

describe('myFavoriteYear', () => {
  it(`is a Number`, () => {
    expect(typeof myFavoriteYear).toBe('number');
  })
});

describe('mySum', () => {
  it(`is the correct sum`, () => {
    expect(mySum).toBe(1946)
  })
});

describe('myProduct', () => {
  it(`is the correct sum`, () => {
    expect(myProduct).toBe(4992)
  })
});

describe('myHeightAndAge', () => {
  it(`is your height in inches plus your age in inches`, () => {
    expect(myHeightAndAge).toBe(myHeight + myMentalAge);
  })
})