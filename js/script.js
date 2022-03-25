// Created by: Lucas Tyman
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates salary.
 */
function calculate () {
  // input
  const hoursWorked = parseInt(document.getElementById('hours-worked').value)
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)

  // process
  const takeHomeIncome = (hoursWorked * hourlyRate) * (1.00 - 0.18)
  const taxes = (hoursWorked * hourlyRate) *  0.18

  // output
  document.getElementById('take-home-income').innerHTML = 'Your pay will be: $' + takeHomeIncome.toFixed(2)
  document.getElementById('government-tax').innerHTML = 'The government will take: $' + taxes.toFixed(2)
}
