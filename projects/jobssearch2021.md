---
layout: page0
title: Job Market Data 2020-2021
permalink: /projects/jobssearch2021/
---

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>
<script type="text/javascript">
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Q0M0Y8W_8kr5JYY08SCNJECTDKxbGj1Md7zMyFMIFng/edit?usp=sharing';

  function init() {
            Papa.parse('https://docs.google.com/spreadsheets/d/1Q0M0Y8W_8kr5JYY08SCNJECTDKxbGj1Md7zMyFMIFng/edit?usp=sharing', {
            download: true,
            header: true,
            complete: function(results) {
              var data = results.data
              console.log(data)
            }
          })
  window.addEventListener('DOMContentLoaded', init)

  function showInfo(results) {
    var data = results.data

    // data comes through as a simple array since simpleSheet is turned on
    alert("Successfully processed " + data.length + " rows!")
    document.getElementById("food").innerHTML = "<strong>Foods:</strong> " + [ data[0].Name, data[1].Name, data[2].Name ].join(", ");
    console.log(data);
  }

  document.write("The published spreadsheet is here <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a>");        
</script>
