// my code
//Calculate Payee Tax, NHIF, NSSF Deductions and Net salary
// define employee details

{const basicSalary = 50000;
const benefits = 15000;
const taxRate = 0.3;
const nhifRate = 0.05;
const nssfRate = 0.12;}

// calculate deductions and net salary
{const taxableIncome = basicSalary + benefits;
const payeeTax = taxableIncome * taxRate;
const nhifDeduction = taxableIncome * nhifRate;
const nssfDeduction = taxableIncome * nssfRate;
const totalDeductions = payeeTax + nhifDeduction + nssfDeduction;
const netSalary = taxableIncome - totalDeductions;}

// print the results
console.log(`Basic Salary: KES ${basicSalary}`);
console.log(`Benefits: KES ${benefits}`);
console.log(`Taxable Income: KES ${taxableIncome}`);
console.log(`Payee Tax: KES ${payeeTax}`);
console.log(`NHIF Deduction: KES ${nhifDeduction}`);
console.log (`NSSF Deduction: KES ${nssfDeduction}');
