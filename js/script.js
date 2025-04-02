// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Calculate Trapezoid
 */
function Calculate() {
  // Get input values
  const Radius = parseFloat(document.getElementById("Radius").value)
  const resultDisplay = document.getElementById("Answer")

  // Calculate Volume of Sphere: ( 4 / 3) * Math.PI * Radius ** 3
  const Volume = (4 / 3) * Math.PI * Radius ** 3

  // Display the result
  resultDisplay.innerHTML = `The area of the Sphere is: <strong>${Volume.toFixed(2)}</strong> cm²`
}
