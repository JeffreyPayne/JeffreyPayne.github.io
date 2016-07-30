"use strict";

var startup = function () {
  $("form#mainform").on("submit", handleSubmit);
};

var handleSubmit = function () {
  var PurchasePrice = parseInt($("#PurchasePrice").val());
  var LoanAmount = parseInt($("#LoanAmount").val());
  var AnnualIntRate = parseFloat($("#AnnualIntRate").val());
  var LoanTerm = parseInt($("#LoanTerm").val());
  var PaymentFrequency = parseInt($("#PaymentFrequency").val());

  //var AnnualPropertyTax = parseFloat($("#AnnualPropertyTax").val());
  //var PMI = parseFloat($("#PMI").val());
  //var HomeInsurance = parseFloat($("#HomeInsurance").val());
  //var MonthlyHOD = parseFloat($("#MonthlyHOD").val());

  var monthlyIntRate = (AnnualIntRate / PaymentFrequency);
  var monthlyLoanAmount = (LoanAmount * monthlyIntRate);
  var monthlyIntRatePlusOne = 1 + monthlyIntRate;
  var loanTermNegYear = (-12 * LoanTerm);
  var powered = Math.pow(monthlyIntRatePlusOne, loanTermNegYear);
  var oneMinusPowered = 1 - powered;
  var Answer = monthlyLoanAmount / oneMinusPowered;

  var TotalPayment = $("#TotalPayment");
  $("#TotalPayment").val(Answer);

  return false;
};

$(document).ready(startup);

