

function runTestCode() {

    alert("Test");
    testVal = formulajs.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]);
    alert(testVal);

}


function showInput() {
    inputPanel = document.getElementById("panelsStayOpen-collapseOne");  //panelsStayOpen-collapseTwo
    inputPanel.classList.add("show"); //aria-expanded="true"

    overviewPanel = document.getElementById("panelsStayOpen-collapseThree");
    overviewPanel.classList.remove("show"); //aria-expanded="true"

    window.scrollTo(0, 0);
    console.log("Show Input");
}

function tryAgain() {
    inputPanel = document.getElementById("panelsStayOpen-collapseOne");  //panelsStayOpen-collapseTwo
    inputPanel.classList.add("show"); //aria-expanded="true"

    resultsPanel = document.getElementById("panelsStayOpen-collapseTwo");
    resultsPanel.classList.remove("show"); //aria-expanded="true"

    window.scrollTo(0, 0);
    console.log("Show Input");
}





function getMCinputTriangular(minVal, mlVal, maxVal) {
    r = Math.random()
    if (r > 0.5) {
        retval = mlVal + ((r - 0.5) / 0.5) * (maxVal - mlVal);
    } else {
        retval = minVal + ((r) / 0.5) * (mlVal - minVal);

    }
    return retval;
}


function doAnalysis() {
    //read in all values from the form...


    //PurchasePrice
    tmp = document.getElementById("ml-PurchasePrice").value;
    mlPurchasePrice = parseInt(tmp);

    //AmortizationPeriod

    mlAmortizationPeriod = parseFloat(document.getElementById("ml-AmortizationPeriod").value);

    //starting Interest Rate

    mlStartingInterestRate = parseFloat(document.getElementById("ml-StartingInterestRate").value) / 100;

    //mortgage term

    mlMortgageTerm = parseFloat(document.getElementById("ml-MortgageTerm").value);
    console.log("read Mortgage term as", mlMortgageTerm);

    //(Ending) InterestRate

    minInterestRate = parseFloat(document.getElementById("min-InterestRate").value) / 100;
    mlInterestRate = parseFloat(document.getElementById("mostLikely-InterestRate").value) / 100;
    maxInterestRate = parseFloat(document.getElementById("max-InterestRate").value) / 100;
    console.log(minInterestRate, maxInterestRate);


    //DownpaymentPercent
    mlDownpaymentPercent = parseFloat(document.getElementById("ml-DownpaymentPercent").value) / 100;

    //buyingLegalFees
    minBuyingLegalFees = parseFloat(document.getElementById("min-buyingLegalFees").value);
    mlBuyingLegalFees = parseFloat(document.getElementById("ml-buyingLegalFees").value);
    maxBuyingLegalFees = parseFloat(document.getElementById("max-buyingLegalFees").value);

    //propertyTransferTax

    mlPropertyTransferTax = parseFloat(document.getElementById("ml-propertyTransferTax").value) / 100;

    //buyingAdditionalExpenses

    minBuyingAdditionalExpenses = parseFloat(document.getElementById("min-buyingAdditionalExpenses").value);
    mlBuyingAdditionalExpenses = parseFloat(document.getElementById("ml-buyingAdditionalExpenses").value);
    maxBuyingAdditionalExpenses = parseFloat(document.getElementById("max-buyingAdditionalExpenses").value);

    //yearsToHold

    minMonthsToHold = parseFloat(document.getElementById("min-yearsToHold").value) * 12;
    mlMonthsToHold = parseFloat(document.getElementById("ml-yearsToHold").value) * 12;
    maxMonthsToHold = parseFloat(document.getElementById("max-yearsToHold").value) * 12;

    //propertyAppreciation
    minPropertyAppreciation = parseFloat(document.getElementById("min-propertyAppreciation").value) / 100;
    mlPropertyAppreciation = parseFloat(document.getElementById("ml-propertyAppreciation").value) / 100;
    maxPropertyAppreciation = parseFloat(document.getElementById("max-propertyAppreciation").value) / 100;

    //sellingLegalFees
    minSellingLegalFees = parseFloat(document.getElementById("min-sellingLegalFees").value);
    mlSellingLegalFees = parseFloat(document.getElementById("ml-sellingLegalFees").value);
    maxSellingLegalFees = parseFloat(document.getElementById("max-sellingLegalFees").value);

    //sellingRealtorFees

    minSellingRealtorFees = parseFloat(document.getElementById("min-sellingRealtorFees").value) / 100;
    mlSellingRealtorFees = parseFloat(document.getElementById("ml-sellingRealtorFees").value) / 100;
    maxSellingRealtorFees = parseFloat(document.getElementById("max-sellingRealtorFees").value) / 100;

    //MonthlyRent

    minMonthlyRent = parseFloat(document.getElementById("min-MonthlyRent").value);
    mlMonthlyRent = parseFloat(document.getElementById("ml-MonthlyRent").value);
    maxMonthlyRent = parseFloat(document.getElementById("max-MonthlyRent").value);

    //OccupancyPercent
    minOccupancyPercent = parseFloat(document.getElementById("min-OccupancyPercent").value) / 100;
    mlOccupancyPercent = parseFloat(document.getElementById("ml-OccupancyPercent").value) / 100;
    maxOccupancyPercent = parseFloat(document.getElementById("max-OccupancyPercent").value) / 100;

    //AnnualRentIncrease
    minAnnualRentIncrease = parseFloat(document.getElementById("min-AnnualRentIncrease").value) / 100;
    mlAnnualRentIncrease = parseFloat(document.getElementById("ml-AnnualRentIncrease").value) / 100;
    maxAnnualRentIncrease = parseFloat(document.getElementById("max-AnnualRentIncrease").value) / 100;



    //monthlyExpenses
    minMonthlyExpenses = parseFloat(document.getElementById("min-monthlyExpenses").value);
    mlMonthlyExpenses = parseFloat(document.getElementById("ml-monthlyExpenses").value);
    maxMonthlyExpenses = parseFloat(document.getElementById("max-monthlyExpenses").value);

    //annualInsurance
    minMonthlyInsurance = parseFloat(document.getElementById("min-annualInsurance").value) / 12;
    mlMonthlyInsurance = parseFloat(document.getElementById("ml-annualInsurance").value) / 12;
    maxMonthlyInsurance = parseFloat(document.getElementById("max-annualInsurance").value) / 12;

    //propertyManagementFees

    minPropertyManagementFees = parseFloat(document.getElementById("min-propertyManagementFees").value);
    mlPropertyManagementFees = parseFloat(document.getElementById("ml-propertyManagementFees").value);
    maxPropertyManagementFees = parseFloat(document.getElementById("max-propertyManagementFees").value);

    //propertyTax

    mlPropertyTax = parseFloat(document.getElementById("ml-propertyTax").value) / 100;

    //annualInflationRate

    minAnnualInflationRate = parseFloat(document.getElementById("min-annualInflationRate").value) / 100;
    mlAnnualInflationRate = parseFloat(document.getElementById("ml-annualInflationRate").value) / 100;
    maxAnnualInflationRate = parseFloat(document.getElementById("max-annualInflationRate").value) / 100;



    //Populate Table with **Most Likely** Analysis

    mlIrr = runIteration(mlMonthsToHold, mlPurchasePrice, mlInterestRate, mlAmortizationPeriod, mlDownpaymentPercent, mlBuyingLegalFees, mlPropertyTransferTax, mlBuyingAdditionalExpenses, mlPropertyAppreciation, mlSellingLegalFees, mlSellingRealtorFees, mlMonthlyRent, mlOccupancyPercent, mlMonthlyExpenses, mlMonthlyInsurance, mlPropertyManagementFees, mlPropertyTax, mlAnnualInflationRate, mlAnnualRentIncrease, mlStartingInterestRate, mlMortgageTerm, true);


    //Run Monte Carlo for multiple iterations.  Each iteration takes a random value based on the a triangular distribution
    //of Min -> Most Likely -> Max values

    const mcIrrResults = [];
    const interestRateArr = [];
    const buyingLegalFeesArr = [];
    const buyingAdditionalExpensesArr = [];
    const propertyAppreciationArr = [];
    const monthsToHoldArr = [];
    const sellingLegalFeesArr = [];
    const sellingRealtorFeesArr = [];
    const monthlyRentArr = [];
    const occupancyPercentArr = [];
    const annualRentIncreaseArr = [];
    const monthlyExpensesArr = [];
    const monthlyInsuranceArr = [];
    const propertyManagementFeesArr = [];
    const annualInflationRateArr = [];
    for (j = 0; j < 5000; j++) {

        //work out values for inputs for this iteration based on triangular distributions

        mcInterestRate = getMCinputTriangular(minInterestRate, mlInterestRate, maxInterestRate);
        //console.log(i, minInterestRate, mlInterestRate, maxInterestRate, apInterestRate);
        mcPurchasePrice = mlPurchasePrice;
        mcAmortizationPeriod = mlAmortizationPeriod;
        mcDownpaymentPercent = mlDownpaymentPercent;
        mcBuyingLegalFees = getMCinputTriangular(minBuyingLegalFees, mlBuyingLegalFees, maxBuyingLegalFees);
        mcPropertyTransferTax = mlPropertyTransferTax;
        mcBuyingAdditionalExpenses = getMCinputTriangular(minBuyingAdditionalExpenses, mlBuyingAdditionalExpenses, maxBuyingAdditionalExpenses);
        mcMonthsToHold = getMCinputTriangular(minMonthsToHold, mlMonthsToHold, maxMonthsToHold);
        mcPropertyAppreciation = getMCinputTriangular(minPropertyAppreciation, mlPropertyAppreciation, maxPropertyAppreciation);
        mcSellingLegalFees = getMCinputTriangular(minSellingLegalFees, mlSellingLegalFees, maxSellingLegalFees);
        mcSellingRealtorFees = getMCinputTriangular(minSellingRealtorFees, mlSellingRealtorFees, maxSellingRealtorFees);
        mcMonthlyRent = getMCinputTriangular(minMonthlyRent, mlMonthlyRent, maxMonthlyRent);
        mcOccupancyPercent = getMCinputTriangular(minOccupancyPercent, mlOccupancyPercent, maxOccupancyPercent);
        mcMonthlyExpenses = getMCinputTriangular(minMonthlyExpenses, mlMonthlyExpenses, maxMonthlyExpenses);
        mcMonthlyInsurance = getMCinputTriangular(minMonthlyInsurance, mlMonthlyInsurance, maxMonthlyInsurance);
        mcPropertyManagementFees = getMCinputTriangular(minPropertyManagementFees, mlPropertyManagementFees, maxPropertyManagementFees);
        mcPropertyTax = mlPropertyTax;
        mcAnnualInflationRate = getMCinputTriangular(minAnnualInflationRate, mlAnnualInflationRate, maxAnnualInflationRate);

        mcAnnualRentIncrease = getMCinputTriangular(minAnnualRentIncrease, mlAnnualRentIncrease, maxAnnualRentIncrease);
        mcStartingInterestRate = mlStartingInterestRate 
        mcMortgageTerm = mlMortgageTerm;

        //mcAnnualRentIncrease, mcStartingInterestRate, mcMortgageTerm
     


        console.log("MC Inputs", mcInterestRate, mcAmortizationPeriod, mcDownpaymentPercent, mcBuyingLegalFees, mcPropertyTransferTax, mcBuyingAdditionalExpenses, mcMonthsToHold);
        mcIrr = runIteration(mcMonthsToHold, mcPurchasePrice, mcInterestRate, mcAmortizationPeriod, mcDownpaymentPercent, mcBuyingLegalFees, mcPropertyTransferTax, mcBuyingAdditionalExpenses, mcPropertyAppreciation, mcSellingLegalFees, mcSellingRealtorFees, mcMonthlyRent, mcOccupancyPercent, mcMonthlyExpenses, mcMonthlyInsurance, mcPropertyManagementFees, mcPropertyTax, mcAnnualInflationRate, mcAnnualRentIncrease, mcStartingInterestRate, mcMortgageTerm, false);
        if (isFinite(mcIrr)) {
            mcIrrResults.push(mcIrr);
            interestRateArr.push(mcInterestRate);
            buyingLegalFeesArr.push(mcBuyingLegalFees);
            console.log("----->Buying Legal Fees", mcBuyingLegalFees);
            buyingAdditionalExpensesArr.push(mcBuyingAdditionalExpenses);
            propertyAppreciationArr.push(mcPropertyAppreciation);
            monthsToHoldArr.push(mcMonthsToHold);
            sellingLegalFeesArr.push(mcSellingLegalFees);
            sellingRealtorFeesArr.push(mcSellingRealtorFees);
            monthlyRentArr.push(mcMonthlyRent);
            occupancyPercentArr.push(mcOccupancyPercent);
            annualRentIncreaseArr.push(mcAnnualRentIncrease);
            monthlyExpensesArr.push(mcMonthlyExpenses);
            monthlyInsuranceArr.push(mcMonthlyInsurance);
            propertyManagementFeesArr.push(mcPropertyManagementFees);
            annualInflationRateArr.push(mcAnnualInflationRate);
        }
        console.log("MC Iteration #", j, " - ", mcIrr);
        console.log(".");
        console.log("");
    }

    const sensitivityGraphLabel = [];
    const sensitivityGraphValue = [];


    sensitivityGraphLabel.push("(G) Legal Fees to Buy");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, buyingLegalFeesArr));


    sensitivityGraphLabel.push("(E) Ending Mortgage Interest Rate");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, interestRateArr));

    sensitivityGraphLabel.push("(I) Additional Expenses for Purchase");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, interestRateArr));

    sensitivityGraphLabel.push("(K) Assumed Annual Appreciation");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, propertyAppreciationArr));

    sensitivityGraphLabel.push("(J) Years to Hold Property");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, monthsToHoldArr));

    sensitivityGraphLabel.push("(L) Legal Fees to Sell");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, sellingLegalFeesArr));

    sensitivityGraphLabel.push("(M) Realtor Fees to Sell");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, sellingRealtorFeesArr));

    sensitivityGraphLabel.push("(N) Monthly Rent");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, monthlyRentArr));

    sensitivityGraphLabel.push("(O) Percent of Time Occupied");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, occupancyPercentArr));

    sensitivityGraphLabel.push("(P) Annual Rent Increase");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, annualRentIncreaseArr));

    sensitivityGraphLabel.push("(Q) Monthy Expenses");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, monthlyExpensesArr));

    sensitivityGraphLabel.push("(R) Annual Property Insurance");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, monthlyInsuranceArr));

    sensitivityGraphLabel.push("(S) Management Fees");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, propertyManagementFeesArr));

    sensitivityGraphLabel.push("(U) Annual Inflation Rate");
    sensitivityGraphValue.push(formulajs.CORREL(mcIrrResults, annualInflationRateArr));

    for (x = 0; x < sensitivityGraphValue.length; x++) {

        //fuck javascript arrays; doing a bubble sort
        for (y = 0; y < sensitivityGraphValue.length; y++) {
            if (Math.abs(sensitivityGraphValue[x]) > Math.abs(sensitivityGraphValue[y])) {
                tmp1 = sensitivityGraphLabel[x];
                tmp2 = sensitivityGraphValue[x];

                sensitivityGraphLabel[x] = sensitivityGraphLabel[y];
                sensitivityGraphValue[x] = sensitivityGraphValue[y];

                sensitivityGraphLabel[y] = tmp1;
                sensitivityGraphValue[y] = tmp2;


            }

        }
    }

    //var combinedSensitivity = [[], [], []];
    //combinedSensitivity = [sensitivityGraphLabel, sensitivityGraphValue];
    //for (l = 0; l < sensitivityGraphValue.length; l++) {
    //    console.log(l, sensitivityGraphLabel[l], sensitivityGraphValue[l]);
     //   combinedSensitivity[2][l] = Math.abs(sensitivityGraphValue[l]);
      //  combinedSensitivity[1][l] = sensitivityGraphValue[l];
      //  combinedSensitivity[0][l] = sensitivityGraphLabel[l];
       
        
    //}
    //const combinedSensitivity2 = [[], [], []];




    //combinedSensitivity = combinedSensitivity.sort(function (a, b) {
     //   return a[2] - b[2];
    //});

    //https://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value

    


    console.table(sensitivityGraphLabel);
    console.table(sensitivityGraphValue);


    

    //handle graph update

    minMcIrr = Math.min.apply(Math, mcIrrResults);
    maxMcIrr = Math.max.apply(Math, mcIrrResults);

    stepSize = 0.01;

    lowerBound = Math.floor(minMcIrr / stepSize) * stepSize
    upperBound = Math.ceil(maxMcIrr / stepSize) * stepSize
    console.log("MIN IRR:", minMcIrr, "MAX IRR:", maxMcIrr, "Lower Bound", lowerBound, "Upper Bound", upperBound);

    //first, populate an array from the lower to upper bound of results, with Keys = steps between them

    var myGraphValue = [];
    for (k = lowerBound; k <= upperBound; k = k + stepSize) {
        k = Number((k).toFixed(4));
        myGraphValue[k] = 0;

    }

    //next loop through the output array of results for MC analysis and determine which
    //bucket of the array it should go in.

    totalSamples = 0;
    for (var i = 0; i < mcIrrResults.length; i++) {

        myBucket = Math.floor(mcIrrResults[i] / stepSize) * stepSize;
        myBucket = Number((myBucket).toFixed(4));
        myGraphValue[myBucket] = myGraphValue[myBucket] + 1;
        totalSamples = totalSamples + 1;
    }


    //final processing for graph

    cumSamples = 0;
    const myGraphData = [];
    const myGraphLabels = [];
    const myCumProbability = [];
    for (k = lowerBound; k <= upperBound; k = k + stepSize) {
        k = Number((k).toFixed(4));
        myGraphData.push(myGraphValue[k]);
        cumSamples = cumSamples + myGraphValue[k];
        myCumProbability.push(cumSamples / totalSamples * 100);
        tmpLabel = Number((k * 100).toFixed(4)) + "%";
        myGraphLabels.push(tmpLabel);


    }


    //fucking javascript
    //https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

    mcIrrResults.sort(function (a, b) {
        return a - b;
    });

    //console.table(mcIrrResults);
    
    //work out descriptive stats for Monte Carlo results

    //this figures out which array element contains values for varioups P50, P80, etc values...
    p50lowerElement = Math.floor(totalSamples * 0.25);
    p50upperElement = Math.floor(totalSamples * 0.75);
    p80lowerElement = Math.floor(totalSamples * 0.10);
    p80upperElement = Math.floor(totalSamples * 0.90);
    modelMedianElement = Math.floor(totalSamples * 0.50);

    //...sfigure out the numeric values, given the correct array element...
    p50lowerIRR = mcIrrResults[p50lowerElement];
    p50upperIRR = mcIrrResults[p50upperElement];
    p80lowerIRR = mcIrrResults[p80lowerElement]; 
    p80upperIRR = mcIrrResults[p80upperElement];
    modelMedianIRR = mcIrrResults[modelMedianElement];

    console.log("P50 Lower Bound", p50lowerElement);
    console.log("P50 Lower Value", p50lowerIRR);

    //Number((resultingIRR * 100 ).toFixed(3));
    
    document.getElementById("P50-IRR-Low").value = Number((p50lowerIRR * 100).toFixed(1));
    document.getElementById("P50-IRR-High").value = Number((p50upperIRR * 100).toFixed(1));
    document.getElementById("P80-IRR-Low").value = Number((p80lowerIRR * 100).toFixed(1));
    document.getElementById("P80-IRR-High").value = Number((p80upperIRR * 100).toFixed(1));    //ModelMedian

    document.getElementById("ModelMedian").value = Number((modelMedianIRR * 100).toFixed(1));




    //draw graph


    //https://www.chartjs.org/docs/latest/charts/mixed.html

    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var ctx3 = document.getElementById('myChart3').getContext('2d');

    //delete old graph if user runs multiple times

    try {
         if (window.myChart2 != null) {
             window.myChart2.destroy();
             
         }

        if (window.myChart3 != null) {
            window.myChart3.destroy();

        }

        console.log("Ran all code for graph recreate ok");
    } catch (err) {
        console.log("Chart Delete Caused Error:", err);
    }


    //https://stackoverflow.com/questions/40056555/destroy-chart-js-bar-graph-to-redraw-other-graph-in-same-canvas


    //sensitivity

    window.myChart3 = new Chart(ctx3, {
        
        data: {
            labels: sensitivityGraphLabel,
            datasets: [{
                type: 'bar',
                yAxisID: 'C',
                label: 'Correlation Coefficient',
                //data: [1, 2, 3, 4, 5, 6],

                data: sensitivityGraphValue,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                    
                  
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                   
                  
                ],
                borderWidth: 1
            }

            ]
        },
        options: {
            indexAxis: 'y',
            scales: {
                xAxes: {
                    title: {
                        display: true,
                        text: 'Correlation'

                    }
                }
            }
            
        } 
        
    });   //sensitivityGraphLabel

    //probability distribution

    window.myChart2 = new Chart(ctx2, {

        data: {
            labels: myGraphLabels,
            datasets: [{
                type: 'bar',
                yAxisID: 'A',
                //label: '# of samples',
                //data: [1, 2, 3, 4, 5, 6],
                data: myGraphData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'


                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'


                ],
                borderWidth: 1
            }, {
                type: 'line',
                yAxisID: 'B',
                label: 'Cum Probability',
                //data: [1, 2, 3, 4, 5, 6],
                data: myCumProbability
            }

            ]
        },
        options: {
            scales: {
                A: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: '# of Samples'
                    }

                },
                B: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Cum Probability'
                    }


                },
                xAxes: {
                    title: {
                        display: true,
                        text: 'Annualized Rate of Return',

                    }
                }
            }
        }
    });
    


    //unhide results accordion panel and hide input panel

    resultPanel = document.getElementById("panelsStayOpen-collapseTwo");  //panelsStayOpen-collapseTwo
    resultPanel.classList.add("show"); //aria-expanded="true"

    inputPanel = document.getElementById("panelsStayOpen-collapseOne");
    inputPanel.classList.remove("show"); //aria-expanded="true"

    window.scrollTo(0, 0);



}





function updateTable() {
    alert("Dont delete me");

    //to fix ... rent inflation independent to other inflation
    //mortgage interest to climb to value

    myTable = document.getElementById("outputTable");

    //panelsStayOpen-collapseTwo


    //https://dev.to/ara225/bootstrap-collapsing-menus-without-jquery-4l8l

    

   

    //document.documentElement.scrollTop();

    window.scrollTo(0, 0);


    console.log("Result Panel Referenced");

    //ml-yearsToHold

    monthsToHold = 12 * parseInt(document.getElementById("ml-yearsToHold").value);

    

    runIteration(12, 500000, 0.02, 20, 0.2, 1000, 0.015, 500, 0.02, 1200, 0.06, 2500, 0.95, 600, 100, 300, 0.03, 0.02, true);


    resultPanel = document.getElementById("panelsStayOpen-collapseTwo");  //panelsStayOpen-collapseTwo
    resultPanel.classList.add("show"); //aria-expanded="true"

    inputPanel = document.getElementById("panelsStayOpen-collapseOne");
    inputPanel.classList.remove("show"); //aria-expanded="true"


    console.log(monthsToHold)
    console.log("Done!");
}


function runIteration(monthsToHold, purchasePrice, mortagageInterest, mortgagePeriod, downPayment, legalFeesToBuy, propertyTrasnferTax, otherBuyingExpesesn, annualAppreciation, legalFeesToSell, realtorFeesToSell, monthlyRent, Occupancy, monthyExpenses, monthlyInsurance, monthlyManagementFees, annulPropertyTaxRate, inflation, annualRentIncrease, startingInterestRate, mortgageTerm, outputToTable) {
    console.log("Starting Iteration...");

    monthsToHold = Math.round(monthsToHold);

    mortgageIncrement = (mortagageInterest - startingInterestRate) / monthsToHold;
    cumExpensesExceptMortgage = 0;
    cumRentIn = 0;


    if (mortgageTerm == "Variable") {
        periodWhereMortgageAdjusts = 1;
    } else {
        //let str = mortgageTerm;
        periodWhereMortgageAdjusts = Math.max(parseInt(String(mortgageTerm).substring(0, 1)) * 12,6); //this sets the period when the mortgage will be 'refinanced'; for variable mortages, this is reevaluated every 6 months
    }
    originalPeriodWhereMortgageAdjusts = periodWhereMortgageAdjusts;
    //console.log("periodWhereMortgageAdjusts = ", periodWhereMortgageAdjusts, mortgageTerm);


    console.log(" - Inputs:", monthsToHold, purchasePrice, mortagageInterest, mortgagePeriod, downPayment, legalFeesToBuy, propertyTrasnferTax, otherBuyingExpesesn, annualAppreciation, legalFeesToSell, realtorFeesToSell, monthlyRent, Occupancy, monthyExpenses, monthlyInsurance, monthlyManagementFees, annulPropertyTaxRate, inflation, outputToTable);
    if (outputToTable) {
        console.log("Update Table");
        outputTable = document.getElementById("outputTable");
        console.log("    Deleting Previous Entries", outputTable.rows.length);
        while (outputTable.rows.length > 2) {
            outputTable.deleteRow(outputTable.rows.length-1);
           // outputTable.deleteRow(outputTable.rows.length);
        }
        console.log("    Updated Table Length", outputTable.rows.length);

    }

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });



    downPaymentAmount = purchasePrice * downPayment;
    financedAmount = purchasePrice - downPaymentAmount;

    //periodMortgagePayment = financedAmount*(mortagageInterest*(1 + mortagageInterest) ^ monthsToHold] / ((1 + mortagageInterest) ^ monthsToHold – 1);
   
    periodMortgagePayment = formulajs.PMT(startingInterestRate / 12, mortgagePeriod * 12, financedAmount, 0, 0) * -1; //formulajs.PMT
    //Assume that if interest rate changes, payment stays constant but amortization period changes


    //https://formulajs.info/functions/

    peridCashOut_Mortgage = [];
    periodCashOut_Taxes = [];
    periodcashOut_Maintenance = [];
    periodcashOut_ProfessionalServices = [];
    periodCashOut_Total = [];

    perodcashIn_Rent = [];
    periodcashIn_Sale = [];
    periodCashIn_Total = [];

    periodCashNet_Total = [];

    principlePaid = [];
    

    cumCashOut = 0;
    cumCashIn = 0;
    cumPrinciplePayment = 0;

    notes = [];
    //console.log("Period", "Mortgage", "Taxes", "Maintenance", "ProfServ", "TotCashOut", "Rent", "Sale", "TotalCashOut", "PrinciplePaid", "Notes");

    stillOnInitialMortgage = true;
    for (i = 0; i < monthsToHold; i++) {
       
        notes[i] = "";
        currentInterestRate = startingInterestRate + (i * mortgageIncrement);
        inflationFactorToDate = Math.pow((1 + inflation), formulajs.FLOOR(i / 12));

        rentIncreaseFactorToDate = Math.pow((1 + annualRentIncrease), formulajs.FLOOR(i / 12));


        //check here to see if we're still within the bounds of the original mortgae and treat interst calc accordingly.
        if (i == periodWhereMortgageAdjusts) {
            newMortgageAmount = (financedAmount - cumPrinciplePayment);
            newMortgagePeriod = formulajs.NPER(currentInterestRate / 12, periodMortgagePayment * -1, newMortgageAmount, 0, 0); // recalculate the new mortgage period based on new interest rate
            newMortgageInterestRate = currentInterestRate;
            notes[i] = "Rate Readjusting to [" + Number((newMortgageInterestRate * 100).toFixed(3)) + "%]"; //  New Amount [" + formatter.format(newMortgageAmount)+"]; New Period [" + newMortgagePeriod/12+"]";
            periodWhenMortgageAdjusted = i;
            periodWhereMortgageAdjusts = periodWhereMortgageAdjusts + originalPeriodWhereMortgageAdjusts;
            stillOnInitialMortgage = false;
            //console.log("Refinancing Mortgage;", i, "Financed Amount=", newMortgageAmount, "Periods=", newMortgagePeriod, "New Interest=", newMortgageInterestRate)
        }

        if (stillOnInitialMortgage) { //this is the original mortgage...

            periodInterestMortgagePayment = formulajs.IPMT(startingInterestRate / 12, i, mortgagePeriod * 12, financedAmount, 0, 0) * -1; //IPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)

        } else { //this is a revised mortgage

            curMortgagePeriod = (i - periodWhenMortgageAdjusted) + 1;
           // notes[i] = notes[i] + " Current Mortgage period [" + curMortgagePeriod + "], Period Interest: [" + periodInterestMortgagePayment+"]";
            periodInterestMortgagePayment = formulajs.IPMT(newMortgageInterestRate / 12, curMortgagePeriod, newMortgagePeriod, newMortgageAmount, 0, 0) * -1; //IPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)
        }
        
        principlePaid[i] = periodMortgagePayment - periodInterestMortgagePayment;
        cumPrinciplePayment = cumPrinciplePayment + principlePaid[i];

        if (i == 0) {
            //handle first period
            periodDownPayment = downPaymentAmount;
            periodPropertyTransfer = purchasePrice * propertyTrasnferTax;
            periodSaleAmount = 0;
            periodProfessionalServices = legalFeesToBuy + otherBuyingExpesesn + monthlyInsurance;
            notes[i] = "Mortgage includes Down Payment; Taxes include Property Transfer Tax; Professional Service Fees include buying lawyer and other buying expenses."
        }else if (i == monthsToHold - 1) {
            //handle last period
            periodDownPayment = 0;
            periodPropertyTransfer = 0;
            salePrice = purchasePrice * Math.pow((1 + annualAppreciation), (monthsToHold / 12));
            periodSaleAmount = salePrice - (financedAmount - cumPrinciplePayment);
            realtorCommission = salePrice * realtorFeesToSell;
            periodProfessionalServices = realtorCommission  + legalFeesToSell + monthlyInsurance * inflationFactorToDate;
            
            notes[i] = "Professional Service include selling lawyer (" + formatter.format(legalFeesToSell) + ") and realtor (" + formatter.format(realtorCommission) + " at " + (realtorFeesToSell*100)+"% Commission).  Sales Price is " + formatter.format(salePrice) + " based on [" + (annualAppreciation*100)+"%] appreciation over [" + monthsToHold/12+"] years.";
        } else {
            periodDownPayment = 0;
            periodPropertyTransfer = 0;
            periodSaleAmount = 0;
            periodProfessionalServices = monthlyInsurance * inflationFactorToDate;
        }
        if (i == 11) { //calculate net yield
            tmpNetYield = Number(((((12 * monthlyRent * Occupancy) - cumExpensesExceptMortgage) / purchasePrice) * 100).toFixed(1));
        }

        peridCashOut_Mortgage[i] = periodMortgagePayment + periodDownPayment; //where periodDownPayment is zero for all but the first periods

        periodCashOut_Taxes[i] = purchasePrice * Math.pow((1 + annualAppreciation), formulajs.FLOOR(i / 12)) * annulPropertyTaxRate / 12 + periodPropertyTransfer;
        periodcashOut_Maintenance[i] = (monthyExpenses + monthlyManagementFees) * inflationFactorToDate;
        periodcashOut_ProfessionalServices[i] = periodProfessionalServices;
        periodCashOut_Total[i] = peridCashOut_Mortgage[i] + periodCashOut_Taxes[i] + periodcashOut_Maintenance[i] +  periodcashOut_ProfessionalServices[i] 


        perodcashIn_Rent[i] = monthlyRent * rentIncreaseFactorToDate * Occupancy;
        periodcashIn_Sale[i] = periodSaleAmount;
        periodCashIn_Total[i] = perodcashIn_Rent[i] + periodcashIn_Sale[i];

        periodCashNet_Total[i] = periodCashIn_Total[i] - periodCashOut_Total[i];

        cumCashOut = cumCashOut + periodCashOut_Total[i];
        cumCashIn = cumCashIn + periodCashIn_Total[i];

        cumExpensesExceptMortgage = cumExpensesExceptMortgage + periodCashOut_Taxes[i] + periodcashOut_ProfessionalServices[i] + periodcashOut_Maintenance[i];
        cumRentIn = cumRentIn + perodcashIn_Rent[i];
        
        //MAIN CONSOLE OUTPUT
        //console.log(i, peridCashOut_Mortgage[i], periodCashOut_Taxes[i], periodcashOut_Maintenance[i], periodcashOut_ProfessionalServices[i], periodCashOut_Total[i], perodcashIn_Rent[i], periodcashIn_Sale[i], periodCashIn_Total[i], principlePaid[i], notes[i])


        //output Table
        if (outputToTable) {
            
            var row = outputTable.insertRow(outputTable.rows.length);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = (i + 1) ;
            cell1.classList.add("tableValueRight"); 

            var cell2 = row.insertCell(1);
            cell2.innerHTML = formatter.format(peridCashOut_Mortgage[i]) ;
            cell2.classList.add("tableValueRight"); 

            var cell3 = row.insertCell(2);
            cell3.innerHTML =  formatter.format(periodCashOut_Taxes[i]) ;
            cell3.classList.add("tableValueRight"); 

            var cell4 = row.insertCell(3);
            cell4.innerHTML = formatter.format(periodcashOut_Maintenance[i]) ;
            cell4.classList.add("tableValueRight"); 

            var cell5 = row.insertCell(4);
            cell5.innerHTML =  formatter.format(periodcashOut_ProfessionalServices[i]) ;
            cell5.classList.add("tableValueRight"); 

            var cell6 = row.insertCell(5);
            cell6.innerHTML =  formatter.format(periodCashOut_Total[i]) ;
            cell6.classList.add("tableValueRight"); 

            var cell7 = row.insertCell(6);
            cell7.innerHTML =  formatter.format(perodcashIn_Rent[i]) ;
            cell7.classList.add("tableValueRight"); 

            var cell8 = row.insertCell(7);
            cell8.innerHTML = formatter.format(periodcashIn_Sale[i]) ;
            cell8.classList.add("tableValueRight"); 

            var cell9 = row.insertCell(8);
            cell9.innerHTML =  formatter.format(periodCashIn_Total[i]) ;
            cell9.classList.add("tableValueRight"); 

            var cell10 = row.insertCell(9);
            cell10.innerHTML = formatter.format(periodCashIn_Total[i] - periodCashOut_Total[i]) ;
            cell10.classList.add("tableValueRight"); 

            var cell11 = row.insertCell(10);
            cell11.innerHTML = formatter.format(principlePaid[i]);
            cell11.classList.add("tableValueRight"); 

            var cell12 = row.insertCell(11);
            cell12.innerHTML =  notes[i] ;
            cell12.classList.add("tableValueLeft"); 
            

        }


    }
    //calculate IRR

    monthlyIRR = formulajs.IRR(periodCashNet_Total);

    resultingIRR = Math.pow((1 + monthlyIRR), 12)-1 //convert monthly IRR to annual IRR
    console.log("IRR=", resultingIRR);

    if (outputToTable) {

        //output Summary Data

        tmpIRR = Number((resultingIRR * 100 ).toFixed(1));
        document.getElementById("ml-IRR").value = tmpIRR + "%";

        tmpGrossYield = Number(((12 * monthlyRent * Occupancy / purchasePrice) * 100).toFixed(1));
        document.getElementById("ml-GrossYield").value = tmpGrossYield + "%";

        
        document.getElementById("ml-NetYield").value = tmpNetYield + "%";

        //output final rows

        var row = outputTable.insertRow(outputTable.rows.length);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "<b>Total</b>";
        cell1.classList.add("tableValueRight"); 

        var cell2 = row.insertCell(1);
        cell2.innerHTML = "";
        cell2.classList.add("tableValueRight"); 

        var cell3 = row.insertCell(2);
        cell3.innerHTML = "";
        cell3.classList.add("tableValueRight"); 

        var cell4 = row.insertCell(3);
        cell4.innerHTML = "";
        cell4.classList.add("tableValueRight"); 

        var cell5 = row.insertCell(4);
        cell5.innerHTML = "";
        cell5.classList.add("tableValueRight"); 

        var cell6 = row.insertCell(5);
        cell6.innerHTML = "<b>" + formatter.format(cumCashOut) + "</b>";
        cell6.classList.add("tableValueRight"); 

        var cell7 = row.insertCell(6);
        cell7.innerHTML = "";
        cell7.classList.add("tableValueRight"); 

        var cell8 = row.insertCell(7);
        cell8.innerHTML = "";
        cell8.classList.add("tableValueRight"); 

        var cell9 = row.insertCell(8);
        cell9.innerHTML = "<b>" + formatter.format(cumCashIn) + "</b>";
        cell9.classList.add("tableValueRight"); 

        var cell10 = row.insertCell(9);
        cell10.innerHTML = "<b>" + formatter.format(cumCashIn - cumCashOut) + "</b>";
        cell10.classList.add("tableValueRight"); 

        var cell11 = row.insertCell(10);
        cell11.innerHTML = "";
        cell11.classList.add("tableValueRight"); 

        var cell12 = row.insertCell(11);
        cell12.innerHTML = "";
        cell12.classList.add("tableValueRight"); 
    }

    console.log("Total", "", "", "", "", cumCashOut, "", "", cumCashIn, cumPrinciplePayment);

    



    return resultingIRR;
}

