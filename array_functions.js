const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Foreach looping

// companies.forEach(function (company,index) {
//     console.log(company);
//     console.log(index);
// });
// companies.forEach(company => console.log(company));

//Filter
// const Teenages = ages.filter(function (age) {
//     if(age > 20) return true;    
// });

// const Teenages = ages.filter(age => age > 20)
// console.log(Teenages);

// const old_companies = companies.filter(company => (company.end - company.start) >= 10 )

// console.log(old_companies)

//Map

// const DoubleAges = ages.map(age => age * 2);
// const DoubleAges = ages
//     .map(age => age / 2)
//     .map(age => Math.pow(age,2));
// console.log(DoubleAges);


//Sort
// const SortAges = ages.sort((a,b) => a > b ? 1 : -1);
// console.log(SortAges);

//Reduce

// const AgeSum = ages.reduce((total,age) => total+age,0);
// console.log(AgeSum);