function calculateNetSalary(basicSalary, benefits) {
    // Constants for deductions based on provided links
    const PAYE_RATES = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 25 },
        { min: 32334, max: 500000, rate: 30 },
        { min: 500001, max: 800000, rate: 32 },
        { min: 800001, max: Infinity, rate: 35 }
    ];
 
    const NHIF_RATES = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 1000 },
        { min: 40000, max: 44999, amount: 1100 },
        { min: 45000, max: 49999, amount: 1200 },
        { min: 50000, max: 59999, amount: 1300 },
        { min: 60000, max: 69999, amount: 1400 },
        { min: 70000, max: 79999, amount: 1500 },
        { min: 80000, max: 89999, amount: 1600 },
        { min: 90000, max: 99999, amount: 1700 },
        { min: 100000, max: Infinity, amount: 1800 },
        
    ];

    const NSSF_RATES = [
        { min: 0, max: 6000, rate: 6 },
        { min: 6001, max: 18000, rate: 6 },
        { min: 18001, max: Infinity, rate: 6 }
    ];

    
    let grossSalary = basicSalary + benefits;

     let taxableIncome = grossSalary;
    for (let i = 0; i < PAYE_RATES.length; i++) {
        if (taxableIncome > PAYE_RATES[i].min && taxableIncome <= PAYE_RATES[i].max) {
            let taxAmount = (taxableIncome - PAYE_RATES[i].min) * (PAYE_RATES[i].rate / 100);
            taxableIncome = taxAmount + PAYE_RATES[i].min;
            break;
        }
    }

    let nhifDeduction = 0;
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary > NHIF_RATES[i].min && grossSalary <= NHIF_RATES[i].max) {
            nhifDeduction = NHIF_RATES[i].amount;
            break;
        }
    }

    let nssfDeduction = 0;
    for (let i = 0; i < NSSF_RATES.length; i++) {
        if (grossSalary > NSSF_RATES[i].min && grossSalary <= NSSF_RATES[i].max) {
            nssfDeduction = grossSalary * (NSSF_RATES[i].rate / 100);
            break;
        }
    }
    let taxAmount= 200

    let deductions = taxAmount + nhifDeduction + nssfDeduction;
    let netSalary = grossSalary - deductions;
 
    
    console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
    console.log(`Tax (PAYE): KES ${taxAmount.toFixed(2)}`);
    console.log(`NHIF Deductions: KES ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deductions: KES ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
}


calculateNetSalary(10000, 2000); 