const levels = {
  u17: { ageRange: { start: 16, end: 17 } },
  u16: { ageRange: { start: 15, end: 16 } },
  u14: { ageRange: { start: 13, end: 14 } },
  u13: { ageRange: { start: 12, end: 13 } },
  dev1: { ageRange: { start: 12, end: 18 } },
  dev2: { ageRange: { start: 12, end: 18 } },
};

// Function to calculate expected start date and end date for the age range
const getExpectedDateRange = (level) => {
  if (!level) {
    return null;
  }

  const ageRange = levels[level]?.ageRange;
  if (!ageRange) {
    return null;
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const may31st = new Date(year, 4, 31); // Note: Months are 0-indexed in JavaScript, 4 = May

  const currentYear = currentDate <= may31st ? year - 1 : year;

  const startYear = currentYear - ageRange.end;
  const endYear = currentYear - ageRange.start;
  const expectedDateRange = {
    start: `${startYear}-09-01`,
    end: `${endYear}-08-31`,
  };

  return expectedDateRange;
};

// Validate age function adapted to handle both `dateOfBirth` and `level`
const validateDateOfBirthAgainstLevel = (dateOfBirth, level) => {
  if (!dateOfBirth || !level || dateOfBirth === "" || level === "") {
    return true;
  }

  const expectedDateRange = getExpectedDateRange(level);
  console.log("expectedDateRange:", expectedDateRange);

  if (!expectedDateRange) {
    return true;
  }

  const isValidAge =
    dateOfBirth >= expectedDateRange.start &&
    dateOfBirth <= expectedDateRange.end;
  return isValidAge;
};

export { validateDateOfBirthAgainstLevel, getExpectedDateRange };
