---
layout: page0
title: Job Market Data 2020-2021
permalink: /projects/jobssearch2021/
---

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>
<script type="text/javascript">
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaFYd4IFyrOmY8d5DFWj7rCDpTXQBi59RcXmILsHuQXtviKGLTyf3kiv2n6c8FuUudKteSHpIDfhzu/pub?output=csv';

  function init() {
         Papa.parse(public_spreadsheet_url, {
           download: true,
           header: true,
           complete: showInfo
         })
       }

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
